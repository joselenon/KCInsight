import { UnknownError } from '@/config/errors/classes/SystemErrors';
import { OpenRouterInstance } from '@/index';
import { IAIInsight, IKCSession, IKCSessionMeta, IKCSessionRedis } from '@/interfaces/IKnowledgeCheck';

import ActivityyService from '@/services/ActivitiesServices/Activities.service';
import { IMessageContentPart } from '@/services/OpenRouter.service';

import {
  groupAlternatives,
  groupConsecutiveTexts,
  parseAlternativesTextOnlyToMessageContentParts,
  parseAlternativesToMessageContentParts,
  parseHtmlTextOnlyToMessageContentParts,
  parseHtmlToMessageContentParts,
} from '@/utils/activityMessageContentParser.utils';
import { formatSecondsToTimeString } from '@/utils/formatSecondsToTimeString';

class KCInsightService {
  private async buildActivityBlocks(session: IKCSessionRedis | IKCSession) {
    const activityBlocks: IMessageContentPart[] = [];

    for (const kcQuestion of session.KCQuestions) {
      const activity = await ActivityyService.getActivityBySlugsAndId({
        activityId: kcQuestion.activityId,
        disciplineSlug: session.disciplineSlug,
      });

      if (!activity) continue;

      const isCorrect = kcQuestion.userAnswer === activity.correctAlternative;

      // ----- Enunciado -----
      const questionContent = isCorrect
        ? parseHtmlTextOnlyToMessageContentParts(activity.questionStemHTML) // sem imagens
        : parseHtmlToMessageContentParts(activity.questionStemHTML); // completo

      const groupedQuestionContent = groupConsecutiveTexts(questionContent);

      // ----- Alternativas -----
      const alternativesContent = isCorrect
        ? parseAlternativesTextOnlyToMessageContentParts(activity.alternatives) // sem imagens
        : parseAlternativesToMessageContentParts(activity.alternatives); // completo

      const groupedAlternativesContent = groupAlternatives(alternativesContent);

      // ----- Montagem do bloco -----
      activityBlocks.push({ type: 'text', text: `Questão ID: ${activity.id}` });
      activityBlocks.push(...groupedQuestionContent);
      activityBlocks.push({ type: 'text', text: 'Alternativas:' });
      activityBlocks.push(...groupedAlternativesContent);
      activityBlocks.push({ type: 'text', text: `Gabarito oficial: ${activity.correctAlternative}` });
      activityBlocks.push({
        type: 'text',
        text: `Resposta do aluno: ${kcQuestion.userAnswer ?? '[ALUNO NÃO RESPONDEU]'}`,
      });
      activityBlocks.push({ type: 'text', text: '---' });
    }

    return activityBlocks;
  }

  private async buildPrompt(session: IKCSessionRedis | IKCSession, userName: string) {
    const activityBlocks = await this.buildActivityBlocks(session);
    const { meta: sessionMeta } = session;

    if (!sessionMeta) {
      throw new UnknownError('Session meta not received');
    }

    const promptParts: IMessageContentPart[] = [
      {
        type: 'text',
        text: `Você é **Ed Nossauro** 🦖, mascote e auxiliar de aprendizado especializado no ENEM. Sua missão é escrever um **relatório personalizado** para o aluno (${userName}) que completou uma sessão de atividades. Seja **amigável, divertido e empático**, mas **honesto e direto** com o desempenho do aluno.`,
      },
      {
        type: 'text',
        text: `**Se dirija ao aluno (${userName}) ao longo dos textos do relatório.**`,
      },
      {
        type: 'text',
        text: `As questões seguem esta estrutura:\n🔹 Enunciado\n🔹 Imagens do enunciado (se houver)\n🔹 Alternativas\n🔹 Imagens das alternativas (se houver)\n🔹 Gabarito oficial\n🔹 Resposta do aluno`,
      },
      {
        type: 'text',
        text:
          `⚡ **INSTRUÇÕES IMPORTANTES**:\n` +
          `- Use seções com títulos, listas e emojis para tornar a leitura agradável.\n` +
          `- Use **markdown simples** (negrito, itálico, listas, quebras de linha). Não use HTML.\n` +
          `- **Caso o relatório apresente fórmulas matemáticas** as formate em blocos, usando $$ ... $$ quando possível, e separe-as com linhas em branco para boa legibilidade em Markdown..\n` +
          `- Seja empático, humano e honesto nos feedbacks.\n` +
          `- **EVITE INCLUIR TÍTULOS COMO "Relatório", "Observações", ou informações já presentes na UI da plataforma** (ex: resposta do aluno, resposta correta, estatísticas, ID da atividade).\n` +
          `- **RETORNE APENAS JSON VÁLIDO**. O JSON deve conter apenas o relatório final da IA, sem incluir os blocos das atividades.\n`,
      },
      {
        type: 'text',
        text:
          `A estrutura do relatório (em JSON) deve conter as seguintes partes:\n\n` +
          `1️⃣ \`generalSummary\`: resumo geral do desempenho, com feedback positivo e negativo, tempo médio de resposta (3 min/ref), dicas gerais.\n` +
          `2️⃣ \`questionInsights\`: lista de insights por questão:\n` +
          `   - \`activityId\`: ID da questão\n` +
          `   - \`summary\`: explicação leve e honesta sobre acertos e erros\n` +
          `     🔹 Por que a alternativa do aluno está incorreta\n` +
          `     🔹 Por que a alternativa correta é a melhor\n` +
          `     🔹 Sempre inclua uma "✨ Dica rápida" para melhorar\n` +
          `     🔹 Use títulos, listas e emojis para facilitar a leitura`,
      },
      {
        type: 'text',
        text:
          `📊 Estatísticas da sessão:\n` +
          `- Questões respondidas: ${sessionMeta.activitiesAnswered}\n` +
          `- Questões corretas: ${sessionMeta.correctAnswers}\n` +
          `- Questões erradas: ${sessionMeta.wrongAnswers}\n` +
          `- Tempo médio de resolução: ${formatSecondsToTimeString(sessionMeta.averageSolveTime / 1000, 2)} segundos`,
      },
      {
        type: 'text',
        text: `⚠️ **LEMBRE-SE:**\n- **Retorne APENAS JSON válido contendo as estruturas esperadas**.\n- Não escreva nada fora do JSON.`,
      },
      // Contexto: blocos das atividades, só para referência da IA
      ...activityBlocks,
    ];

    return promptParts;
  }

  async generateAIInsights(
    userName: string | undefined | null,
    session: IKCSessionRedis | IKCSession,
    modelName: string,
  ): Promise<IAIInsight | null | undefined> {
    if (!session || !session.KCQuestions.length) return null;

    const userFirstName = (() => {
      if (userName) {
        return userName.split(' ')[0]; // First name
      }
      return '[NOME DE USUÁRIO NÃO ENCONTRADO. FAVOR REFERENCIÁ-LO GENERICAMENTE.]';
    })();

    const prompt = await this.buildPrompt(session, userFirstName);

    const response = await OpenRouterInstance.sendMessage({
      model: modelName,
      history: [],
      message: {
        role: 'user',
        content: prompt,
      },
    });

    const nowTime = Date.now();

    const content = response.content;
    const rawText = content.map((part) => (part as { text: string }).text).join(' ');

    try {
      // Tenta capturar o primeiro objeto JSON válido encontrado
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);

      if (!jsonMatch) {
        console.error('Nenhum JSON encontrado na resposta da IA');
        return undefined;
      }

      const parsed = JSON.parse(jsonMatch[0]);
      const AIInsight: IAIInsight = { ...parsed, generatedAt: Date.now(), modelName };

      return AIInsight;
    } catch (e) {
      console.error('Erro ao parsear resposta da IA:', e, 'rawText:', rawText);
      return undefined;
    }
  }
}

export default new KCInsightService();
