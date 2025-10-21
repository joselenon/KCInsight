import React from 'react';
import styled from 'styled-components';
import { IEstudinoActivity } from '@/interfaces/IActivity';

const QuestionStemWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span,
  p {
    font-size: 15px;
  }

  .info {
    display: flex;
    justify-content: flex-end;
    color: var(--color-gray4);
    font-style: italic;
    font-size: 0.9em;
    margin-top: 0.5em;
  }

  img {
    max-width: 100%;
    object-fit: contain;

    display: flex;
    justify-content: center;

    margin: 1rem auto !important;
  }
`;

interface IQuestionStemProps {
  questionStemHTML: IEstudinoActivity['questionStemHTML'];
}

export default function QuestionStem({ questionStemHTML }: IQuestionStemProps) {
  return <QuestionStemWrapper dangerouslySetInnerHTML={{ __html: questionStemHTML }} />;
}
