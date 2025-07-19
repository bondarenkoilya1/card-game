import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { CARDS_IN_HAND } from "src/constants";

import { useDecksStore } from "src/store";

import { useCardSets, useRedirect } from "src/hooks";

export const useManageDeck = () => {
  const navigate = useNavigate();
  const { cardSetSlug } = useParams();
  const { cardSets, isLoading, isError, error } = useCardSets();
  const { setSelectedCardSetName, playerDeck } = useDecksStore();

  const currentCardSet = cardSets?.find((cardSet) => cardSet.slug === cardSetSlug) || null;

  const shouldRedirect = !isLoading && !isError && !currentCardSet;
  useRedirect(shouldRedirect, "/pick-set", "You should choose existing card set firstly.");

  const outOfDeckCards =
    currentCardSet?.cards.filter(
      (card) => !playerDeck.some((deckCard) => deckCard._id === card._id)
    ) || [];

  const isDeckCompleted = playerDeck.length >= CARDS_IN_HAND;

  const startGame = () => {
    if (!isDeckCompleted) {
      const errorMessage = `You should have at least ${CARDS_IN_HAND} cards in your deck.`;
      toast.warning(errorMessage);
      throw new Error(errorMessage);
    }

    if (currentCardSet) {
      setSelectedCardSetName(currentCardSet.cardSetName);
      navigate("/play");
    }
  };

  return {
    currentCardSet,
    outOfDeckCards,
    isDeckCompleted,
    isLoading,
    isError,
    error,
    startGame
  };
};
