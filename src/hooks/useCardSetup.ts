import { useMemo, useState } from "react";

import { CARDS_IN_HAND } from "src/constants";

import { CardProps } from "src/types";

import { pickUniqueRandomNumbers, validateError } from "src/utils";

import { useGameDeckStore, useGameHandStore } from "src/store";

export const useCardSetup = (cards: CardProps[]) => {
  const { deck, setDeck } = useGameDeckStore();
  const { setHand } = useGameHandStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const availableCards = useMemo(() => {
    return cards.filter((card) => !deck.some((deckCard) => deckCard._id === card._id));
  }, [cards, deck]);

  const generateHand = () => {
    setLoading(true);
    setError(null);

    try {
      const cardsQuantity = deck.length;
      const arrayOfUniqueNumbers = pickUniqueRandomNumbers(CARDS_IN_HAND, cardsQuantity);

      const selectedCards = arrayOfUniqueNumbers.map((index) => deck[index]);
      const remainingCards = deck.filter((_, index) => !arrayOfUniqueNumbers.includes(index));

      setDeck(remainingCards);
      setHand(selectedCards);
    } catch (error) {
      setError(validateError(error));
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    availableCards,
    loading,
    error,
    generateHand
  };
};
