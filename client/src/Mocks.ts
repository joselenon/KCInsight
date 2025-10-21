import { IKCSession } from './interfaces/IKnowledgeCheck';

const biologiaActivities = [
  {
    id: '808f133a-74a1-461b-8c94-1e908b676d17',
    examInfo: {
      rawText: 'Enem 2020 – Caderno Amarelo – Aplicação Digital',
      examSlug: 'enem',
      examVariant: 'digital',
      examDay: null,
      examColor: 'amarelo',
    },
    positionInExam: 103,
    sourceExam: 'enem',
    examYear: '2020',
    disciplineSlug: 'biologia',
    tags: [
      { name: '16 Genética', slug: 'genetica' },
      { name: '16.11 Aplicações da Genética', slug: 'aplicacoes_da_genetica' },
    ],
    difficultyLevel: 2,
    questionStemHTML:
      '<p>Fenômenos epigenéticos levam a modificações do DNA e das histonas, que influenciam o remodelamento da cromatina e, consequentemente, a disponibilização ou não de genes para a transcrição.</p><p style="font-size:0.64em;text-align:right">ARRUDA, I. T. S. Epigenética. Genética na Escola, n. 1, 2015 (adaptado).</p><p><p>Esses fenômenos atuam na</p></p>',
    alternatives: [
      { text: '<p>regulação da expressão gênica.</p>', label: 'A' },
      { text: '<p>alteração nas sequências de bases.</p>', label: 'B' },
      { text: '<p>correção de mutações em determinados genes.</p>', label: 'C' },
      { text: '<p>associação dos ribossomos ao RNA mensageiro.</p>', label: 'D' },
      { text: '<p>alteração nas sequências dos aminoácidos das histonas.</p>', label: 'E' },
    ],
    correctAlternative: 'A',
    cancelled: false,
  },
  {
    id: '879c36a3-df07-4690-a59b-7495e2d4a6b5',
    examInfo: {
      rawText: 'Enem 2020 – Caderno Amarelo – Aplicação Digital',
      examSlug: 'enem',
      examVariant: 'digital',
      examDay: null,
      examColor: 'amarelo',
    },
    positionInExam: 107,
    sourceExam: 'enem',
    examYear: '2020',
    disciplineSlug: 'biologia',
    tags: [
      { name: '16 Genética', slug: 'genetica' },
      { name: '16.11 Aplicações da Genética', slug: 'aplicacoes_da_genetica' },
    ],
    difficultyLevel: 2,
    questionStemHTML:
      '<p>Uma nova e revolucionária técnica foi desenvolvida para a edição de genomas. O mecanismo consiste em um sistema de reconhecimento do sítio onde haverá a mudança do gene combinado com um mecanismo de corte e reparo do DNA. Assim, após o reconhecimento do local onde será realizada a edição, uma nuclease corta as duas fitas de DNA. Uma vez cortadas, mecanismos de reparação do genoma tendem a juntar as fitas novamente, e nesse processo um pedaço de DNA pode ser removido, adicionado ou até mesmo trocado por outro pedaço de DNA.</p><p><p>Nesse contexto, uma aplicação biotecnológica dessa técnica envolveria o(a)</p></p>',
    alternatives: [
      { text: '<p>diagnóstico de doenças.</p>', label: 'A' },
      { text: '<p>identificação de proteínas.</p>', label: 'B' },
      { text: '<p>rearranjo de cromossomos.</p>', label: 'C' },
      { text: '<p>modificação do código genético.</p>', label: 'D' },
      { text: '<p>correção de distúrbios genéticos.</p>', label: 'E' },
    ],
    correctAlternative: 'E',
    cancelled: false,
  },
  {
    id: 'c142d594-b44e-4d59-93a5-b236f7a0dcc0',
    examInfo: {
      rawText: 'Enem 2020 2º Dia – Caderno Amarelo – Aplicação Regular',
      examSlug: 'enem',
      examVariant: null,
      examDay: 2,
      examColor: 'amarelo',
    },
    positionInExam: 114,
    sourceExam: 'enem',
    examYear: '2020',
    disciplineSlug: 'biologia',
    tags: [
      { name: '16 Genética', slug: 'genetica' },
      { name: '16.2 Primeira lei de Mendel', slug: 'primeira_lei_de_mendel' },
    ],
    difficultyLevel: 2,
    questionStemHTML:
      '<p>Os diferentes tipos de café que consumimos nem sempre vêm da mesma espécie de planta. As duas espécies de café mais utilizadas são <em>Coffea canephora</em> e <em>Coffea arabica</em>. A primeira é diploide (2n = 22) e a segunda é tetraploide (2n = 44). Acredita-se que a espécie tetraploide surgiu de um cruzamento natural entre <em>C</em>.<em> canephora </em>e <em>C</em>.<em> eugenioides</em>, ambas diploides, há milhões de anos. De fato, as análises genéticas atuais nos cromossomos de C. arabica detectam os alelos de ambas as origens.</p><p><p>A alteração cromossômica que poderia explicar o surgimento do café da espécie <em>C</em>.<em> arabica </em>é: </p></p>',
    alternatives: [
      { text: '<p>Duplicação em uma das plantas parentais antes do cruzamento. </p>', label: 'A' },
      { text: '<p>Inversão durante a meiose gamética em ambas as plantas parentais. </p>', label: 'B' },
      { text: '<p>Separação desigual na meiose gamética de uma das plantas parentais. </p>', label: 'C' },
      { text: '<p>Falha na separação durante a meiose gamética em ambas as plantas parentais. </p>', label: 'D' },
      {
        text: '<p>Deleções durante as primeiras mitoses zigóticas na planta descendente <em>C</em>.<em> arabica</em>.</p>',
        label: 'E',
      },
    ],
    correctAlternative: null,
    cancelled: true,
  },
  {
    id: '597ee0c5-dd9d-47a6-a2c4-eb4804717a4f',
    examInfo: {
      rawText: 'Enem 2020 2º Dia – Caderno Amarelo – Aplicação Regular',
      examSlug: 'enem',
      examVariant: null,
      examDay: 2,
      examColor: 'amarelo',
    },
    positionInExam: 97,
    sourceExam: 'enem',
    examYear: '2020',
    disciplineSlug: 'biologia',
    tags: [
      { name: '16 Genética', slug: 'genetica' },
      { name: '16.11 Aplicações da Genética', slug: 'aplicacoes_da_genetica' },
    ],
    difficultyLevel: 2,
    questionStemHTML:
      '<p>Pesquisadores dos Estados Unidos desenvolveram uma nova técnica, que utiliza raios de luz infravermelha (invisíveis a olho nu) para destruir tumores. Primeiramente, o paciente recebe uma injeção com versões modificadas de anticorpos que têm a capacidade de “grudar” apenas nas células cancerosas. Sozinhos, eles não fazem nada contra o tumor. Entretanto, esses anticorpos estão ligados a uma molécula, denominada IR700, que funcionará como uma “microbomba”, que irá destruir o câncer. Em seguida, o paciente recebe raios infravermelhos. Esses raios penetram no corpo e chegam até a molécula IR700, que é ativada e libera uma substância que ataca a célula cancerosa.</p><p style="font-size:0.64em;text-align:right">Disponível em: http://super.abril.com.br. Acesso em: 13 dez. 2012 (adaptado).</p><p><p>Com base nas etapas de desenvolvimento, o nome apropriado para a técnica descrita é: </p></p>',
    alternatives: [
      { text: '<p>Radioterapia. </p>', label: 'A' },
      { text: '<p>Cromoterapia. </p>', label: 'B' },
      { text: '<p>Quimioterapia. </p>', label: 'C' },
      { text: '<p>Fotoimunoterapia. </p>', label: 'D' },
      { text: '<p>Terapia magnética.</p>', label: 'E' },
    ],
    correctAlternative: 'D',
    cancelled: false,
  },
  {
    id: 'b081200d-9eca-4329-b829-f5e3c0676ce8',
    examInfo: {
      rawText: 'Enem 2020 – Caderno Amarelo – Aplicação Digital',
      examSlug: 'enem',
      examVariant: 'digital',
      examDay: null,
      examColor: 'amarelo',
    },
    positionInExam: 129,
    sourceExam: 'enem',
    examYear: '2020',
    disciplineSlug: 'biologia',
    tags: [
      { name: '16 Genética', slug: 'genetica' },
      { name: '17 Evolução biológica', slug: 'evolucao_biologica' },
      { name: '18 Ecologia', slug: 'ecologia' },
      { name: '18.5 Dinâmica de populações', slug: 'dinamica_de_populacoes' },
    ],
    difficultyLevel: 2,
    questionStemHTML:
      '<p>Os frutos da pupunha têm cerca de 1g em populações silvestres no Acre, mas chegam a 70 g em plantas domesticadas por populações indígenas. No princípio, porém, a domesticação não era intencional. Os grupos humanos apenas identificavam vegetais mais saborosos ou úteis, e sua propagação se dava pelo descarte de sementes para perto dos sítios habitados.</p><p style="font-size:0.64em;text-align:right">DÓRIA, C. A.; VIEIRA, I. C. G. Iguarias da floresta. Ciência Hoje, n. 310, dez. 2013.</p><p><p>A mudança de fenótipo (tamanho dos frutos) nas populações domesticadas de pupunha deuse porque houve</p></p>',
    alternatives: [
      { text: '<p>introdução de novos genes.</p>', label: 'A' },
      { text: '<p>redução da pressão de mutação.</p>', label: 'B' },
      { text: '<p>diminuição da uniformidade genética.</p>', label: 'C' },
      { text: '<p>aumento da frequência de alelos de interesse.</p>', label: 'D' },
      { text: '<p>expressão de genes de resistência a patógenos.</p>', label: 'E' },
    ],
    correctAlternative: 'D',
    cancelled: false,
  },
];

const matematicaActivities = [
  {
    id: 'a9ec2262-1dba-4221-8343-35287831a86a',
    examInfo: {
      rawText: 'Enem 2020 – Caderno Amarelo – Aplicação Digital',
      examSlug: 'enem',
      examVariant: 'digital',
      examDay: null,
      examColor: 'amarelo',
    },
    positionInExam: 172,
    sourceExam: 'enem',
    examYear: '2020',
    disciplineSlug: 'matematica',
    tags: [
      {
        name: '11 Estatística',
        slug: 'estatistica',
      },
    ],
    difficultyLevel: 2,
    questionStemHTML:
      '<p>Prever a dinâmica populacional de um país é de extrema importância, pois com esse conhecimento as políticas públicas em saúde, educação, habitação e infraestrutura poderão ser executadas sem atraso e de forma eficiente. A linha cheia no gráfico mostra a evolução da população brasileira desde 1950 até 2010, e a extrapolação (previsão) até o ano 2050, representada pela linha tracejada, foi feita com base nos censos demográficos realizados até 2010.</p><p><img alt="Imagem da questão" style="display:block;margin-left:auto;margin-right:auto" src="https://api.estudino.com/activities/subjects/matematica/images/a9ec2262-1dba-4221-8343-35287831a86a-0.webp" alt="gráfico mostra a evolução dapopulação brasileira desde 1950 até 2010" /></p><p style="font-size:0.64em;text-align:right">Fonte: IBGE. Projeção da população do Brasil, 2010.</p><p><p>Pelo gráfico apresentado, o intervalo em que se observa aumento da população é</p></p>',
    alternatives: [
      {
        text: '<p>1950 a 2010.</p>',
        label: 'A',
      },
      {
        text: '<p>1950 a 2040.</p>',
        label: 'B',
      },
      {
        text: '<p>1950 a 2050.</p>',
        label: 'C',
      },
      {
        text: '<p>2010 a 2040.</p>',
        label: 'D',
      },
      {
        text: '<p>2040 a 2050.</p>',
        label: 'E',
      },
    ],
    correctAlternative: 'B',
    cancelled: false,
  },
  {
    id: '010858b4-9309-4105-88a0-4360a1a4573c',
    examInfo: {
      rawText: 'Enem 2020 2º Dia – Caderno Amarelo – Aplicação Regular',
      examSlug: 'enem',
      examVariant: null,
      examDay: 2,
      examColor: 'amarelo',
    },
    positionInExam: 162,
    sourceExam: 'enem',
    examYear: '2020',
    disciplineSlug: 'matematica',
    tags: [
      {
        name: '11 Estatística',
        slug: 'estatistica',
      },
      {
        name: '11.4 Medidas estatísticas',
        slug: 'medidas_estatisticas',
      },
    ],
    difficultyLevel: 1,
    questionStemHTML:
      '<p>Com o objetivo de contratar uma empresa responsável pelo serviço de atendimento ao público, os executivos de uma agência bancária realizaram uma pesquisa de satisfação envolvendo cinco empresas especializadas nesse segmento. Os procedimentos analisados (com pesos que medem sua importância para a agência) e as respectivas notas que cada empresa recebeu estão organizados no quadro.</p><p><img alt="Imagem da questão" style="display:block;margin-left:auto;margin-right:auto" src="https://api.estudino.com/activities/subjects/matematica/images/010858b4-9309-4105-88a0-4360a1a4573c-0.webp" /></p><p>A agência bancária contratará a empresa com a maior média ponderada das notas obtidas nos procedimentos analisados.</p><p><p>Após a análise dos resultados da pesquisa de satisfação, os executivos da agência bancária contrataram a empresa </p></p>',
    alternatives: [
      {
        text: '<p>X.</p>',
        label: 'A',
      },
      {
        text: '<p>Y.</p>',
        label: 'B',
      },
      {
        text: '<p>Z.</p>',
        label: 'C',
      },
      {
        text: '<p>W.</p>',
        label: 'D',
      },
      {
        text: '<p>T.</p>',
        label: 'E',
      },
    ],
    correctAlternative: 'C',
    cancelled: false,
  },
  {
    id: '18b76687-c0ce-43b4-8b67-634578a2f931',
    examInfo: {
      rawText: 'Enem 2020 2º Dia – Caderno Amarelo – Aplicação Regular',
      examSlug: 'enem',
      examVariant: null,
      examDay: 2,
      examColor: 'amarelo',
    },
    positionInExam: 172,
    sourceExam: 'enem',
    examYear: '2020',
    disciplineSlug: 'matematica',
    tags: [
      {
        name: '11 Estatística',
        slug: 'estatistica',
      },
      {
        name: '11.4 Medidas estatísticas',
        slug: 'medidas_estatisticas',
      },
    ],
    difficultyLevel: 2,
    questionStemHTML:
      '<p>O técnico de um time de basquete pretende aumentar a estatura média de sua equipe de 1,93 m para, no mínimo, 1,99 m. Para tanto, dentre os 15 jogadores que fazem parte de sua equipe, irá substituir os quatro mais baixos, de estaturas: 1,78 m, 1,82 m, 1,84 m e 1,86 m. Para isso, o técnico contratou um novo jogador de 2,02 m. Os outros três jogadores que ele ainda precisa contratar devem satisfazer à sua necessidade de aumentar a média das estaturas da equipe. Ele fixará a média das estaturas para os três jogadores que ainda precisa contratar dentro do critério inicialmente estabelecido.</p><p><p>Qual deverá ser a média mínima das estaturas, em metro, que ele deverá fixar para o grupo de três novos jogadores que ainda irá contratar?</p></p>',
    alternatives: [
      {
        text: '<p>1,96</p>',
        label: 'A',
      },
      {
        text: '<p>1,98</p>',
        label: 'B',
      },
      {
        text: '<p>2,05</p>',
        label: 'C',
      },
      {
        text: '<p>2,06</p>',
        label: 'D',
      },
      {
        text: '<p>2,08</p>',
        label: 'E',
      },
    ],
    correctAlternative: 'D',
    cancelled: false,
  },

  {
    id: '83a5f63d-edae-4ade-8c95-91ab3fd55ec8',
    examInfo: {
      rawText: 'Enem 2020 – Caderno Amarelo – Aplicação Digital',
      examSlug: 'enem',
      examVariant: 'digital',
      examDay: null,
      examColor: 'amarelo',
    },
    positionInExam: 170,
    sourceExam: 'enem',
    examYear: '2020',
    disciplineSlug: 'matematica',
    tags: [
      {
        name: '4 Matemática financeira',
        slug: 'matematica_financeira',
      },
      {
        name: '11 Estatística',
        slug: 'estatistica',
      },
    ],
    difficultyLevel: 2,
    questionStemHTML:
      '<p>O Índice de Desenvolvimento da Educação Básica (Ideb), criado para medir a qualidade do aprendizado do ensino básico no Brasil, é calculado a cada dois anos. No seu cálculo são combinados dois indicadores: o aprendizado e o fluxo escolar, obtidos a partir do Censo Escolar e das avaliações oficiais promovidas pelo Inep.</p><p>O Ideb de uma escola numa dada série escolar pode ser calculado pela expressão</p><p>Ideb = N × P,</p><p>em que N é a média da proficiência em língua portuguesa e matemática, obtida a partir do Sistema de Avaliação da Educação Básica (Saeb), e variando de 0 a 10. O indicador P, que varia de 0 a 1, por sua vez, refere-se ao fluxo escolar, pois considera as taxas de aprovação e reprovação da instituição, sendo calculado por</p><p><span class="math"><math><semantics><mrow><mi>P</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><mo>,</mo></mrow><annotation>P=\\frac{1}{T},</annotation></semantics></math></span></p><p>em que T é o tempo médio de permanência dos alunos na série.</p><p style="font-size:0.64em;text-align:right">Disponível em: www.inep.gov.br. Acesso em: 2 ago. 2012.</p><p><p>Uma escola apresentou no 9º ano do ensino fundamental, em 2017, um Ideb diferente daquele que havia apresentado nessa mesma série em 2015, pois o tempo médio de permanência dos alunos no 9º ano diminuiu 2%, enquanto a média de proficiência em língua portuguesa e matemática, nessa série, aumentou em 2%.</p><p>Dessa forma, o Ideb do 9º ano do ensino fundamental dessa escola em 2017, em relação ao calculado em 2015,</p></p>',
    alternatives: [
      {
        text: '<p>permaneceu inalterado, pois o aumento e a diminuição de 2% nos dois parâmetros anulam-se.</p>',
        label: 'A',
      },
      {
        text: '<p>aumentou em 4%, pois o aumento de 2% na média da proficiência soma-se à diminuição de 2% no tempo médio de permanência dos alunos na série.</p>',
        label: 'B',
      },
      {
        text: '<p>diminuiu em 4,04%, pois tanto o decrescimento do tempo médio de permanência dos alunos na série em 2% quanto o crescimento da média da proficiência em 2% implicam dois decréscimos consecutivos de 2% no valor do Ideb.</p>',
        label: 'C',
      },
      {
        text: '<p>aumentou em 4,04%, pois tanto o decrescimento do tempo médio de permanência dos alunos na série em 2% quanto o crescimento da média da proficiência em 2% implicam dois acréscimos consecutivos de 2% no valor do Ideb.</p>',
        label: 'D',
      },
      {
        text: '<p>aumentou em 4,08%, pois houve um acréscimo de 2% num parâmetro que é diretamente proporcional e um decréscimo de 2% num parâmetro que é inversamente proporcional ao Ideb.</p>',
        label: 'E',
      },
    ],
    correctAlternative: 'E',
    cancelled: false,
  },
];

const getKCSessionMock = (discipline: string): IKCSession => {
  const KCQuestionsMock: IKCSession['KCQuestions'] =
    discipline === 'matemática'
      ? [
          {
            activityId: 'a9ec2262-1dba-4221-8343-35287831a86a',
            answered: true,
            correct: false,
            correctAlternative: 'B',
            userAnswer: 'A',
            timestamp: Date.now() - 1000 * 60 * 13,
          },
          {
            activityId: '010858b4-9309-4105-88a0-4360a1a4573c',
            answered: true,
            correct: true,
            correctAlternative: 'C',
            userAnswer: 'C',
            timestamp: Date.now() - 1000 * 60 * 10,
          },
          {
            activityId: '18b76687-c0ce-43b4-8b67-634578a2f931',
            answered: true,
            correct: true,
            correctAlternative: 'D',
            userAnswer: 'D',
            timestamp: Date.now() - 1000 * 60 * 6,
          },
          {
            activityId: '83a5f63d-edae-4ade-8c95-91ab3fd55ec8',
            answered: true,
            correct: true,
            correctAlternative: 'E',
            userAnswer: 'E',
            timestamp: Date.now() - 1000 * 60 * 3,
          },
        ]
      : [
          {
            activityId: '808f133a-74a1-461b-8c94-1e908b676d17',
            answered: true,
            correct: true,
            correctAlternative: 'A',
            userAnswer: 'A',
            timestamp: Date.now() - 1000 * 60 * 13,
          },
          {
            activityId: '879c36a3-df07-4690-a59b-7495e2d4a6b5',
            answered: true,
            correct: false,
            correctAlternative: 'E',
            userAnswer: 'D',
            timestamp: Date.now() - 1000 * 60 * 10,
          },
          {
            activityId: '597ee0c5-dd9d-47a6-a2c4-eb4804717a4f',
            answered: true,
            correct: true,
            correctAlternative: 'D',
            userAnswer: 'D',
            timestamp: Date.now() - 1000 * 60 * 6,
          },
          {
            activityId: 'b081200d-9eca-4329-b829-f5e3c0676ce8',
            answered: true,
            correct: true,
            correctAlternative: 'D',
            userAnswer: 'D',
            timestamp: Date.now() - 1000 * 60 * 3,
          },
        ];

  return {
    startedAt: Date.now() - 1000 * 60 * 15,
    finishedAt: Date.now() - 1000 * 60 * 2,
    disciplineSlug: discipline,
    topicSlug: 'genetica',
    KCQuestions: KCQuestionsMock,
    meta: {
      activitiesAnswered: 4,
      correctAnswers: 3,
      wrongAnswers: 1,
      correctAnswersFreq: 0.75,
      averageSolveTime: 45,
      totalTime: 13 * 60,
      totalActivities: KCQuestionsMock.length,
    },
    SM2Info: { qualifiesAsApproved: true, nextReviewAt: Date.now() + 1000 * 60 * 60 * 24 * 3 },
    status: 'completed',
    aiGeneratedInsights: null,
  };
};

export { biologiaActivities, matematicaActivities, getKCSessionMock };
