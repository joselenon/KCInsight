import React, { useState } from 'react';
import { Section } from '@/styles/GlobalStyles';
import Reveal from '@/components/Generics/Reveal';
import PrimaryButton from '@/components/Generics/Buttons/PrimaryButton';
import styled from 'styled-components';
import { IAIInsight, IKCSession } from '@/interfaces/IKnowledgeCheck';
import ActivityBox from '@/components/Sections/Activities/ActivityBox';
import { biologiaActivities, getKCSessionMock, matematicaActivities } from '@/Mocks';
import ReactMarkdown from 'react-markdown';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import useGenerateAIInsight from '@/hooks/useGenerateAIInsight';
import LoadingGif from '@/components/Generics/LoadingGif';
import { FaMagnifyingGlassChart } from 'react-icons/fa6';
import ActivityCorrectionItem from '@/components/Sections/ActivityCorrectionItem';

const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActivitiesWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  max-height: 600px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow: auto;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export default function Home() {
  const [discipline, setDiscipline] = useState<'biologia' | 'matemática'>('biologia');
  const [AIInsight, setAIInsight] = useState<IAIInsight | undefined | null>(undefined);

  const { mutateAsync: generateAIInsight, isPending } = useGenerateAIInsight();

  const activitiesData = discipline === 'matemática' ? matematicaActivities : biologiaActivities;

  const mockKCSession = getKCSessionMock(discipline);

  const userNameDefault = 'Ingrid Vitória';

  const toggleGenerate = async () => {
    const res = await generateAIInsight({ userName: userNameDefault, discipline });
    setAIInsight(res);
  };

  return (
    <Reveal>
      <Section>
        <h5 className="Title">Atividades ({discipline})</h5>

        <ContentWrapper>
          <ActivitiesWrapper key={discipline}>
            {mockKCSession.KCQuestions.map((kcq) => {
              const activity = activitiesData.find((a) => a.id === kcq.activityId);
              if (!activity) return null;

              const insightFound = AIInsight?.questionInsights.find((insight) => insight.activityId === kcq.activityId);

              return (
                <ActivityBox
                  key={activity.id}
                  activity={activity as any}
                  defaultCorrectLetter={activity.correctAlternative as any}
                  defaultSelectedLetter={kcq.userAnswer}
                  footerBarConfig={{
                    defaultActiveItemId: 'smartanalysis',
                    disableItems: {
                      disable: false,
                      msg: 'Você deve finalizar as atividades primeiro',
                    },
                    extraFooterBarItems: [
                      {
                        id: 'smartanalysis',
                        label: 'Análise inteligente',
                        icon: <FaMagnifyingGlassChart />,
                        element: (
                          <>
                            <ActivityCorrectionItem aiInsights={insightFound} correct={kcq.correct || false} />
                          </>
                        ),
                      },
                    ],
                  }}
                />
              );
            })}
          </ActivitiesWrapper>

          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
              <ButtonsWrapper>
                <PrimaryButton
                  attributes={{ onClick: () => setDiscipline('biologia') }}
                  color={discipline === 'biologia' ? 'var(--color-2)' : 'var(--color-gray)'}
                  label="Biologia"
                />
                <PrimaryButton
                  attributes={{ onClick: () => setDiscipline('matemática') }}
                  color={discipline === 'matemática' ? 'var(--color-2)' : 'var(--color-gray)'}
                  label="Matemática"
                />
              </ButtonsWrapper>

              <PrimaryButton
                attributes={{
                  onClick: toggleGenerate,
                  disabled: isPending,
                }}
                showLoadingOnDisabled
                color="var(--color-estudinoblue)"
                label="Gerar Relatório IA"
              />
            </div>

            <div
              style={{
                minHeight: 400,
                width: '100%',
                flex: 1,
                background: 'var(--color-gray4)',
                borderRadius: 'var(--br-xl)',

                display: 'flex',
                alignItems: !AIInsight ? 'center' : 'flex-start',
                justifyContent: !AIInsight ? 'center' : 'flex-start',

                padding: '1.5rem',
              }}
            >
              {AIInsight && <MarkdownRenderer text={AIInsight.generalSummary}></MarkdownRenderer>}
              {!AIInsight && isPending && <LoadingGif color="var(--color-2)" />}

              {!AIInsight && !isPending && <h5>O relatório ficará visível aqui!</h5>}
            </div>
          </div>
        </ContentWrapper>
      </Section>
    </Reveal>
  );
}
