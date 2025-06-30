import { useState } from "react";

import { CARDS_IN_HAND } from "src/constants";

import { CardProps } from "src/types";

import { pickUniqueRandomNumbers, validateError } from "src/utils";

import { useGameDeckStore, useGameHandStore } from "src/store";

// TODO: Store some states with zustand; Rename functions
export const useCardSetup = (cards: CardProps[]) => {
  const { deck, setDeck, addCardToDeck, removeCardFromDeck } = useGameDeckStore();
  const { hand, setHand } = useGameHandStore();

  const [availableCards, setAvailableCards] = useState<CardProps[]>(cards);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const removeCardFromAvailable = (cardId: string) =>
    setAvailableCards((prevAvailable) =>
      prevAvailable.filter((availableCards) => availableCards._id !== cardId)
    );

  const handleAddCardToDeck = (card: CardProps) => {
    addCardToDeck(card);
    removeCardFromAvailable(card._id);
  };

  const handleRemoveCardFromDeck = (cardId: string) => {
    const currentCard = deck.find((deckCard) => deckCard._id === cardId);
    if (currentCard) {
      removeCardFromDeck(cardId);
      setAvailableCards((prevInitial) => [...prevInitial, currentCard]);
    }
  };

  const generateHand = () => {
    setLoading(true);

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
    deck,
    hand,
    loading,
    error,
    handleAddCardToDeck,
    handleRemoveCardFromDeck,
    generateHand,
    setHand
  };
};
