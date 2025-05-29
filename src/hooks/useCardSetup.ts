import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { CARDS_IN_HAND } from "src/constants";

import { CardProps } from "src/types";

import { pickUniqueRandomNumbers, validateError } from "src/utils";

export const useCardSetup = (fullHandName: string) => {
  const [availableCards, setAvailableCards] = useState<CardProps[]>([]);
  const [cardsInHand, setCardsInHand] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAndSetCards = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<CardProps[]>(fullHandName);
      const fetchedCards = response.data;
      // TODO (later): Comeback here later, when I will combine default card sets with a special ones
      const fullHandCardsQuantity = fetchedCards.length;
      const fetchedCardsWithIdProp = fetchedCards.map((card) => ({ ...card, id: uuidv4() }));

      const arrayOfUniqueNumbers = pickUniqueRandomNumbers(
        // When I decide to change the number of cards in player's hand I do it only in one place
        CARDS_IN_HAND,
        fullHandCardsQuantity
      );

      const selectedCards = arrayOfUniqueNumbers.map((index) => fetchedCardsWithIdProp[index]);
      const remainingCards = fetchedCardsWithIdProp.filter(
        (_, index) => !arrayOfUniqueNumbers.includes(index)
      );

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
    fetchAndSetCards();
  }, []);

  return { availableCards, cardsInHand, setCardsInHand, loading, error, refetch: fetchAndSetCards };
};
