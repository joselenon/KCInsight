import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ENEMIcon from '@/assets/icons/ENEMIcon.png';
import { HRBar } from '@/styles/GlobalStyles';
import { IEstudinoActivity, IEstudinoActivityPublic } from '@/interfaces/IActivity';
import PrimaryButton from '@/components/Generics/Buttons/PrimaryButton';
import QuestionStem from './QuestionStem';
import Alternatives from './Alternatives';
import IconButton from '@/components/Generics/Buttons/IconButton';
import { toast } from 'react-toastify';
import Tags from './Tags';
import { replaceImageURLs } from '@/utils/replaceImageURLs';
import { DISCIPLINE_COLOR_FROM_SLUG } from '@/data/DISCIPLINE_COLOR_FROM_SLUG';
import FooterBar from './FooterBar';

const Wrapper = styled.div``;

const ActivityBoxHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 1fr);
  justify-content: space-between;
  gap: 1rem;

  background-color: var(--color-white);
  border-radius: var(--br-md) var(--br-md) 0 0;
  padding: 1.5rem;
`;

const LeftWrapper = styled.div`
  min-width: 0;

  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  overflow: visible;

  &::after {
    content: '';
    position: absolute;
    right: 0rem;
    top: 0;
    height: 100%;
    width: 30px;
    pointer-events: none;
    background: linear-gradient(to left, var(--color-white), transparent);
  }
`;

const IdAndTagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  overflow: hidden;

  .id {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 150px;

    font-size: 12px;
    font-weight: 500;
    color: var(--color-gray2);
  }
`;

const ActivityBoxBody = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  background-color: var(--color-white);
  padding: 1.5rem;
  padding-top: 0;

  p {
    color: var(--color-1);
  }

  @media (max-width: 1000px) {
    padding: 1rem;
  }
`;

const TagsScrollWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const AnimatedTagsContainer = styled.div`
  display: inline-flex;
  white-space: nowrap;
  padding-right: 40px;

  /* melhora renderização do texto */
  transform: translateZ(0); /* força renderização em layer separada sem causar blur */
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1rem;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const IconContainer = styled.div`
  flex-shrink: 0;

  width: 50px;
  height: 50px;

  background-color: var(--color-gray4);
  border-radius: var(--br-md);

  img {
    width: 100%;
    height: 100%;
    border-radius: var(--br-md);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;

  .dinozap-mobile {
    display: none;
  }

  @media (max-width: 550px) {
    .dinozap-desktop {
      display: none;
    }
    .dinozap-mobile {
      display: block;
    }
  }
`;

const attentionIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
  </svg>
);

export type TFooterBarItem = {
  icon: React.ReactElement;
  id: string;
  label: string;
  element?: React.ReactElement;
  toggle?: () => void | Promise<void>;
};

export interface IFooterBarConfig {
  extraFooterBarItems?: TFooterBarItem[];
  disableItems?: { disable: boolean; msg: string };
  defaultActiveItemId?: string;
}

export interface IActivityBox {
  activity: IEstudinoActivityPublic;
  showButtons?: boolean;
  defaultSelectedLetter?: IEstudinoActivity['correctAlternative'] | null;
  defaultCorrectLetter?: IEstudinoActivity['correctAlternative'];
  customStyle?: React.CSSProperties;
  onSendFeedbackFn?: (any: any) => void;
  onMarkAlternativeFn?: (activityId: string, alternative: 'A' | 'B' | 'C' | 'D' | 'E') => void;
  setActivityProblemFeedbackSent?: React.Dispatch<React.SetStateAction<boolean>>;
  externalSelectedLetter?: 'A' | 'B' | 'C' | 'D' | 'E' | null;
  KCSessionTopicSlug?: string;
  customElement?: React.ReactElement;
  footerBarConfig?: IFooterBarConfig;
}

export default function ActivityBox({
  activity,
  showButtons = true,
  customStyle,
  onSendFeedbackFn,
  onMarkAlternativeFn,
  defaultSelectedLetter,
  defaultCorrectLetter,
  setActivityProblemFeedbackSent,
  externalSelectedLetter,
  KCSessionTopicSlug,
  footerBarConfig,
}: IActivityBox) {
  const mode = 'simple';
  const { questionStemHTML, alternatives, sourceExam, id, disciplineSlug } = activity;
  const disciplineColor = DISCIPLINE_COLOR_FROM_SLUG[disciplineSlug];

  const filteredStemHTML = replaceImageURLs(questionStemHTML, disciplineSlug);
  const filteredAlternatives = alternatives.map((alt) => ({
    ...alt,
    text: replaceImageURLs(alt.text, disciplineSlug),
  }));

  const [showFeedbackModal, setShowFeedbackModal] = useState<boolean>(false);
  const [selectedLetter, setSelectedLetter] = useState<IEstudinoActivity['correctAlternative'] | null | undefined>(
    null,
  );
  const [correctAlternative, setCorrectLetter] = useState<IEstudinoActivity['correctAlternative'] | undefined>(
    defaultCorrectLetter,
  );

  useEffect(() => {
    setSelectedLetter(defaultSelectedLetter);
  }, [defaultSelectedLetter]);

  useEffect(() => {
    setSelectedLetter(externalSelectedLetter);
  }, [externalSelectedLetter]);

  useEffect(() => {
    setCorrectLetter(defaultCorrectLetter);
  }, [defaultCorrectLetter]);

  const toggleCheckAnswer = async () /* : Promise<IEstudinoActivity['correctAlternative'] | null>  */ =>
    /* payload: IAnswerQuestionsPayload, */
    {
      /*     const res = await checkAnswers(payload);

    if (res && res.length > 0) {
      return res.length === 1 ? res[0].correctAlternative : null;
    }

    toast.error('Algo deu errado...');
    return null; */
    };

  const toggleMarkAlternative = (alternativeLetter: IEstudinoActivity['correctAlternative']) => {
    if (correctAlternative) return; // Already answered
    if (onMarkAlternativeFn) return onMarkAlternativeFn(activity.id, alternativeLetter);

    setSelectedLetter(alternativeLetter);
  };

  const checkAnswer = async () => {
    /*     if (!selectedLetter) {
      toast.error('Selecione uma alternativa.');
      return;
    }

    const payload: IAnswerQuestionsPayload = [
      {
        id,
        userAnswer: selectedLetter,
        disciplineSlug,
      },
    ];

    const correctAlternativeFromAPI = await toggleCheckAnswer(payload);

    if (!correctAlternativeFromAPI) {
      toast.error('Algo deu errado...');
      return;
    }

    setCorrectLetter(correctAlternativeFromAPI); */
  };

  return (
    <Wrapper>
      <ActivityBoxHeader style={{ borderTop: `10px solid ${disciplineColor}` }}>
        <LeftWrapper>
          <IconContainer>{sourceExam === 'enem' && <img src={ENEMIcon} alt="" />}</IconContainer>
          <IdAndTagsWrapper>
            <span className="id">ID: {id}</span>

            <TagsScrollWrapper>
              <AnimatedTagsContainer className="scrolling-tags">
                <Tags activity={activity} />
              </AnimatedTagsContainer>
            </TagsScrollWrapper>
          </IdAndTagsWrapper>
        </LeftWrapper>

        <RightWrapper>
          <IconButton
            svgColor="var(--color-gray)"
            customStyle={{ width: '40px', height: '40px', flexShrink: 0, background: 'var(--color-gray5)' }}
            attributes={{ onClick: () => setShowFeedbackModal((prev) => !prev) }}
          >
            {attentionIcon}
          </IconButton>
        </RightWrapper>

        <HRBar $color="var(--color-gray4)" style={{ gridColumn: 'span 2' }} />
      </ActivityBoxHeader>

      <ActivityBoxBody style={customStyle}>
        <BodyWrapper>
          <QuestionStem questionStemHTML={filteredStemHTML} />
          <Alternatives
            disciplineSlug={disciplineSlug}
            alternatives={filteredAlternatives}
            correctAlternative={correctAlternative}
            markedLetter={selectedLetter}
            toggleMarkAlternative={toggleMarkAlternative}
          />
        </BodyWrapper>

        {showButtons && (
          <ButtonsWrapper>
            {mode === 'simple' && (
              <PrimaryButton
                label="Responder"
                color={disciplineColor}
                attributes={{ onClick: checkAnswer, disabled: /* isPending || */ !!correctAlternative }}
                showLoadingOnDisabled={!correctAlternative}
                loadingColor="var(--color-white)"
              />
            )}
          </ButtonsWrapper>
        )}

        {/* {showFeedbackModal && (
          <ActivityFeedbackModal
            activityId={activity.id}
            KCSessionTopicSlug={KCSessionTopicSlug}
            showModal={showFeedbackModal}
            setShowModal={setShowFeedbackModal}
            onSendFeedbackFn={onSendFeedbackFn}
          />
        )} */}
      </ActivityBoxBody>

      <FooterBar activityId={activity.id} disciplineSlug={activity.disciplineSlug} footerBarConfig={footerBarConfig} />
    </Wrapper>
  );
}
