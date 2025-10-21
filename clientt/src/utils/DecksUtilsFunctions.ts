import { ICardPublic, IDeckTree } from '@/interfaces/IDecks';
import { toast } from 'react-toastify';
import { IDecksContextProps } from '@/contexts/DecksContext';

export function findDeckInTree(tree: Record<string, IDeckTree>, deckId: string): IDeckTree | null {
  for (const key in tree) {
    const node = tree[key];
    if (node.id === deckId) {
      return node;
    }
    const foundInChildren = findDeckInChildren(node.children, deckId);
    if (foundInChildren) return foundInChildren;
  }
  return null;
}

function findDeckInChildren(children: IDeckTree[], deckId: string): IDeckTree | null {
  for (const child of children) {
    if (child.id === deckId) {
      return child;
    }
    const found = findDeckInChildren(child.children, deckId);
    if (found) return found;
  }
  return null;
}

export function getAllCards(deck: IDeckTree): ICardPublic[] {
  let cards: ICardPublic[] = [...deck.cards];
  deck.children.forEach((child) => {
    cards = cards.concat(getAllCards(child));
  });
  return cards;
}

export interface IOrganizedCards {
  organizedCards: {
    deckName: string;
    deckId: string;
    discipline: string;
    cards: ICardPublic[];
    parentId: string | null | undefined;
  }[];
}

export function getAllCardsOrganized(deck: IDeckTree): IOrganizedCards {
  let organizedCardsMultipleArrays: IOrganizedCards['organizedCards'] = [];
  organizedCardsMultipleArrays.push({
    deckName: deck.name,
    deckId: deck.id,
    cards: deck.cards,
    discipline: deck.discipline || '',
    parentId: deck.parentId,
  });

  deck.children.forEach((child) => {
    const childResult = getAllCardsOrganized(child);
    organizedCardsMultipleArrays = organizedCardsMultipleArrays.concat(childResult.organizedCards);
  });

  return { organizedCards: organizedCardsMultipleArrays };
}

export function getReadyCardsCount(cards: ICardPublic[], nowTime: number) {
  const toReview = cards.reduce((acc, card) => {
    const cardSM2Info = card.SM2Info;

    const isLearning = card.status === 'learning';
    const isGraduated = card.status === 'graduated';

    if ((isLearning || isGraduated) && cardSM2Info.nextReviewAt < nowTime) return acc + 1;
    return acc;
  }, 0);

  const notStudied = cards.reduce((acc, card) => {
    const cardSM2Info = card.SM2Info;

    if (card.status === 'new' && cardSM2Info.nextReviewAt < nowTime) return acc + 1;
    return acc;
  }, 0);

  const graduated = cards.reduce((acc, card) => {
    if (card.status === 'graduated') return acc + 1;
    return acc;
  }, 0);

  return { toReview, notStudied, graduated };
}

export function getReadyCardsArray(cards: ICardPublic[], nowTime: number): ICardPublic[] {
  return cards.filter((card) => card.SM2Info.nextReviewAt < nowTime);
}

export function findCardInDeckTree(deckTree: IDeckTree, cardId: string): IDeckTree | undefined {
  if (deckTree.cards.some((card) => card.id === cardId)) return deckTree;
  for (const child of deckTree.children) {
    const found = findCardInDeckTree(child, cardId);
    if (found) return found;
  }
  return undefined;
}

export function getCardDeckIdFromRootDeck({
  cardId,
  decks,
  rootDeckId,
}: {
  cardId: string;
  decks: IDecksContextProps['decks'];
  rootDeckId: string;
}) {
  if (!decks) {
    toast.error('Organizeddecks not initialized');
    return null;
  }
  if (!rootDeckId) {
    toast.error('DeckId não encontrado');
    return null;
  }

  const rootDeck = decks.find((deck) => deck.id === rootDeckId);

  if (!rootDeck) {
    toast.error('Deck não encontrado');
    return null;
  }

  const cardFound = rootDeck.cards.find((card) => card.id === cardId);

  if (!cardFound) {
    toast.error('Card não encontrada');
    return;
  }

  /*   const deckFound = rootDeck ? findCardInDeckTree(rootDeck, cardId) : undefined;
  if (!deckFound) {
    toast.error('Deck não encontrado');
    return null;
  } */

  return { cardDeckId: rootDeck.id };
}
