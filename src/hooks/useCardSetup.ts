import { useEffect, useState } from "react";

import { CARDS_IN_HAND } from "src/constants";

import { CardProps } from "src/types";

import { pickUniqueRandomNumbers, validateError } from "src/utils";

// TODO: Rename; Maybe store some states with zustand
export const useCardSetup = (cards: CardProps[]) => {
  const [initialCards, setInitialCards] = useState<CardProps[]>(cards);
  const [cardsInDeck, setCardsInDeck] = useState<CardProps[]>([]);

  const [availableCards, setAvailableCards] = useState<CardProps[]>([]);
  const [cardsInHand, setCardsInHand] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const removeCardFromDeck = (cardId: string) => {
    setCardsInDeck((prevDeck) => prevDeck.filter((deckCard) => deckCard._id !== cardId));
    const currentCard = cardsInDeck.find((deckCard) => deckCard._id === cardId);
    if (currentCard) setInitialCards((prevInitial) => [...prevInitial, currentCard]);
  };

  const removeCardFromInitial = (cardId: string) => {
    setInitialCards((prevInitial) =>
      prevInitial.filter((initialCard) => initialCard._id !== cardId)
    );
  };

  const addCardToDeck = (card: CardProps) => {
    setCardsInDeck((prevDeck) => [...prevDeck, card]);
    removeCardFromInitial(card._id);
  };

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

  return {
    availableCards,
    cardsInHand,
    setCardsInHand,
    initialCards,
    cardsInDeck,
    addCardToDeck,
    removeCardFromDeck,
    loading,
    error,
    refetch: generateHand
  };
};
