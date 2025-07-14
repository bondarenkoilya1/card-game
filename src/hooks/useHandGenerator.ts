import { useState } from "react";

import { CARDS_IN_HAND } from "src/constants";

import { PlayerType } from "src/types";

import { pickUniqueRandomNumbers, validateError } from "src/utils";

import { useDecksStore, useHandsStore } from "src/store";

export const useHandGenerator = (owner: PlayerType) => {
  const { playerDeck, setPlayerDeck, botDeck, setBotDeck } = useDecksStore();
  const { setPlayerHand, setBotHand } = useHandsStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isPlayer = owner === "player";
  const deck = isPlayer ? playerDeck : botDeck;
  const setDeck = isPlayer ? setPlayerDeck : setBotDeck;
  const setHand = isPlayer ? setPlayerHand : setBotHand;

  const generateHand = () => {
    setLoading(true);
    setError(null);

    try {
      const cardsQuantity = deck.length;
      const arrayOfUniqueNumbers = pickUniqueRandomNumbers(CARDS_IN_HAND, cardsQuantity);

      const selectedCards = arrayOfUniqueNumbers.map((index) => deck[index]);
      const sortedDescSelectedCards = [...selectedCards].sort((a, b) => b.points - a.points);
      const remainingCards = deck.filter((_, index) => !arrayOfUniqueNumbers.includes(index));

      setDeck(remainingCards);
      setHand(sortedDescSelectedCards);
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
