import { IDecksContextProps } from '@/contexts/DecksContext';
import { ICardPublic, IDeckPublic, TRating } from '@/interfaces/IDecks';

const MIN_EASINESS = 1.3;
const DAY_IN_MS = 24 * 60 * 60 * 1000;

const learningCooldownsMS = {
  again: 60 * 1000,
  hard: 8 * 60 * 1000,
  good: 15 * 60 * 1000,
  easy: 4 * DAY_IN_MS,
};

const ratingMultipliers = {
  again: 0,
  hard: 0.25,
  good: 1,
  easy: 1.5,
};

const ratingGrades = { again: 0, hard: 3, good: 4, easy: 5 };

const calculateEasinessFactor = (ef: number, grade: number) => {
  const delta =
    grade >= 3 ? 0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02) : 0.2 - (5 - grade) * (0.1 + (5 - grade) * 0.03);

  return Math.max(ef + delta, MIN_EASINESS);
};

const calculateNextReview = (card: ICardPublic, rating: TRating, nowTime: number, newEF: number) => {
  const cardSM2Info = card.SM2Info;

  if (card.status === 'graduated') {
    const multiplier = ratingMultipliers[rating];
    return nowTime + cardSM2Info.repetition * newEF * multiplier * DAY_IN_MS;
  }
  return nowTime + learningCooldownsMS[rating];
};

const getNextStatus = (card: ICardPublic, rating: TRating) => {
  if ((card.status === 'new' || card.status === 'learning') && rating === 'easy') {
    return 'graduated';
  }
  if (card.status === 'new' && rating !== 'easy') {
    return 'learning';
  }
  if (card.status === 'graduated' && rating === 'again') {
    return 'learning';
  }
  return card.status;
};

const getNextRepetition = (card: ICardPublic, rating: TRating) => {
  const cardSM2Info = card.SM2Info;

  if (rating === 'again') return 0;
  if (ratingGrades[rating] >= 3) return cardSM2Info.repetition + 1;
  return cardSM2Info.repetition;
};

const getNextEasinessFactor = (card: ICardPublic, rating: TRating) => {
  const cardSM2Info = card.SM2Info;

  if (rating === 'again') return 2.5;
  return calculateEasinessFactor(cardSM2Info.easinessFactor, ratingGrades[rating]);
};

export function reviewCard(card: ICardPublic, rating: TRating, nowTime: number) {
  const updatedCard: ICardPublic = { ...card };
  const cardSM2Info = updatedCard.SM2Info;

  card.status = getNextStatus(card, rating);
  cardSM2Info.easinessFactor = getNextEasinessFactor(card, rating);
  cardSM2Info.repetition = getNextRepetition(card, rating);
  cardSM2Info.lastReviewedAt = nowTime;
  cardSM2Info.nextReviewAt = calculateNextReview(card, rating, nowTime, cardSM2Info.easinessFactor);

  return updatedCard;
}

export function previewSpacedRepetition(card: ICardPublic) {
  const nowTime = Date.now();

  const DAY_IN_MS = 24 * 60 * 60 * 1000;
  const HOUR_IN_MS = 60 * 60 * 1000;
  const MINUTE_IN_MS = 60 * 1000;

  const previews: Record<TRating, { nextReviewAt: number; nextIntervalDays: number; label: string }> = {
    again: { nextReviewAt: 0, nextIntervalDays: 0, label: '' },
    hard: { nextReviewAt: 0, nextIntervalDays: 0, label: '' },
    good: { nextReviewAt: 0, nextIntervalDays: 0, label: '' },
    easy: { nextReviewAt: 0, nextIntervalDays: 0, label: '' },
  };

  (Object.keys(ratingGrades) as TRating[]).forEach((rating) => {
    const cloned = { ...card };
    const newEF = getNextEasinessFactor(cloned, rating);
    const nextReviewAt = calculateNextReview(cloned, rating, nowTime, newEF);
    const intervalMS = nextReviewAt - nowTime;

    let label = '';
    if (intervalMS < HOUR_IN_MS) {
      label = `${(intervalMS / MINUTE_IN_MS).toFixed(1)}m`;
    } else if (intervalMS < DAY_IN_MS) {
      label = `${(intervalMS / HOUR_IN_MS).toFixed(1)}h`;
    } else {
      label = `${(intervalMS / DAY_IN_MS).toFixed(1)}d`;
    }

    previews[rating] = {
      nextReviewAt,
      nextIntervalDays: intervalMS / DAY_IN_MS,
      label,
    };
  });

  return previews;
}

export function customReviewCard(card: ICardPublic, nextReviewAt: number) {
  const nowTime = Date.now();
  const updatedCard: ICardPublic = { ...card };
  const cardSM2Info = updatedCard.SM2Info;

  cardSM2Info.nextReviewAt = nextReviewAt;
  cardSM2Info.lastReviewedAt = nowTime;

  return updatedCard;
}
