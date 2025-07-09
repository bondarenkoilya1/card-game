import { useState } from "react";

import { CARDS_IN_HAND } from "src/constants";

import { pickUniqueRandomNumbers, validateError } from "src/utils";

import { useDecksStore, useHandsStore } from "src/store";

export const useHandGenerator = () => {
  const { playerDeck, setPlayerDeck } = useDecksStore();
  const { setPlayerHand } = useHandsStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateHand = () => {
    setLoading(true);
    setError(null);

    try {
      const cardsQuantity = playerDeck.length;
      const arrayOfUniqueNumbers = pickUniqueRandomNumbers(CARDS_IN_HAND, cardsQuantity);

      const selectedCards = arrayOfUniqueNumbers.map((index) => playerDeck[index]);
      const remainingCards = playerDeck.filter((_, index) => !arrayOfUniqueNumbers.includes(index));

      setPlayerDeck(remainingCards);
      setPlayerHand(selectedCards);
    } catch (error) {
      setError(validateError(error));
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    generateHand
  };
};
