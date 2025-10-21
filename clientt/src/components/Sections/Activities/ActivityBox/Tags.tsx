import { DISCIPLINE_COLOR_FROM_SLUG } from '@/data/DISCIPLINE_COLOR_FROM_SLUG';
import { DISCIPLINE_NAME_FROM_SLUG } from '@/data/DISCIPLINE_NAME_FROM_SLUG';
import { IEstudinoActivityPublic } from '@/interfaces/IActivity';
// import { getTopicNameBySlug } from '@/utils/getTopicNameBySlug';
import React from 'react';
import styled from 'styled-components';

const TagsWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  gap: 0.5rem;

  overflow-x: auto;
`;

const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 0.25rem 1rem;
  border-radius: var(--br-xl);

  span {
    color: var(--color-white);
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
  }
`;

export default function Tags({ activity }: { activity: IEstudinoActivityPublic }) {
  const { sourceExam, disciplineSlug, tags, examYear } = activity;
  const disciplineColor = DISCIPLINE_COLOR_FROM_SLUG[disciplineSlug];

  return (
    <TagsWrapper>
      <TagItem style={{ background: disciplineColor }}>
        <span>{sourceExam.toLocaleUpperCase()}</span>
      </TagItem>

      <TagItem style={{ background: disciplineColor }}>
        <span>{examYear}</span>
      </TagItem>

      <TagItem style={{ background: disciplineColor }}>
        <span>{DISCIPLINE_NAME_FROM_SLUG[disciplineSlug]}</span>
      </TagItem>

      {tags.map((tag, index) => {
        return (
          <TagItem key={index} style={{ background: disciplineColor }}>
            {/* <span>{getTopicNameBySlug(disciplineSlug, tag.slug, true)}</span> */}
          </TagItem>
        );
      })}
    </TagsWrapper>
  );
}
