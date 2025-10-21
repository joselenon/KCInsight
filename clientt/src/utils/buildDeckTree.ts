// utils/buildDeckTree.ts
import { IDeckPublic, IDeckTree } from '@/interfaces/IDecks';

export function buildDeckTree(decks: IDeckPublic[]): Record<string, IDeckTree> {
  const deckMap: Record<string, IDeckTree> = {};

  // Criar o map com os children vazios
  decks.forEach((deck) => {
    deckMap[deck.id] = { ...deck, children: [] };
  });

  const tree: Record<string, IDeckTree> = {};

  // Relacionar filhos com seus pais
  decks.forEach((deck) => {
    const current = deckMap[deck.id];
    if (deck.parentId) {
      const parent = deckMap[deck.parentId];
      if (parent) {
        parent.children.push(current);
      } else {
        // parentId inválido, considerar como raiz
        tree[deck.id] = current;
      }
    } else {
      // Sem parentId, é raiz
      tree[deck.id] = current;
    }
  });

  return tree;
}
