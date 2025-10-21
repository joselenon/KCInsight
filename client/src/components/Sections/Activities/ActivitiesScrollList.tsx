import React, { useEffect, useRef, useCallback } from 'react';
import { useActivitiesContext } from '@/contexts/ActivitiesContext';
import ActivityBox from './ActivityBox';
import LoadingGif from '@/components/Generics/LoadingGif';
import styled from 'styled-components';

const ActivitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LittleInfo = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--color-gray);

  margin: 1rem 0;
`;

export default function ActivitiesScrollList() {
  const { activities, fetchMoreActivities, isPending, hasMoreActivities, totalActivities } = useActivitiesContext();

  const observerRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasMoreActivities && !isPending) {
        fetchMoreActivities();
      }
    },
    [fetchMoreActivities, isPending, hasMoreActivities],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [handleObserver]);

  return (
    <div>
      <LittleInfo>Atividades encontradas: {totalActivities}</LittleInfo>

      <ActivitiesWrapper>
        {(activities || []).map((activity) => (
          <ActivityBox key={activity.id} activity={activity} />
        ))}
      </ActivitiesWrapper>

      {!hasMoreActivities && !isPending && (
        <div style={{ textAlign: 'center', margin: '40px 0', color: '#666' }}>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Você chegou ao fim 🎉</h4>
          <p style={{ fontSize: '1rem' }}>
            Não há mais atividades disponíveis com os filtros selecionados. <br />
            Que tal tentar novos filtros ou revisar o que você já viu?
          </p>
        </div>
      )}

      {isPending && (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <LoadingGif />
        </div>
      )}

      <div ref={observerRef} style={{ height: '1px' }} />
    </div>
  );
}
