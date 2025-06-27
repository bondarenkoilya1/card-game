import { useEffect, useState } from "react";

import { CARDS_IN_HAND } from "src/constants";

import { CardProps } from "src/types";

import { pickUniqueRandomNumbers, validateError } from "src/utils";

// TODO: Rename.
export const useCardSetup = (cards: CardProps[]) => {
  const [availableCards, setAvailableCards] = useState<CardProps[]>([]);
  const [cardsInHand, setCardsInHand] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateHand = () => {
    setLoading(true);

    try {
      const cardsQuantity = cards.length;
      const arrayOfUniqueNumbers = pickUniqueRandomNumbers(CARDS_IN_HAND, cardsQuantity);

      const selectedCards = arrayOfUniqueNumbers.map((index) => cards[index]);
      const remainingCards = cards.filter((_, index) => !arrayOfUniqueNumbers.includes(index));

      setAvailableCards(remainingCards);
      setCardsInHand(selectedCards);
    } catch (error) {
      setError(validateError(error));
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateHand();
  }, []);

  return { availableCards, cardsInHand, setCardsInHand, loading, error, refetch: generateHand };
};
