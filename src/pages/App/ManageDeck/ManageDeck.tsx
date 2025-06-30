import React, { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { CARDS_IN_HAND } from "src/constants";

import { Card, CardRow } from "src/components";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod, useCardSetup } from "src/hooks";

export const ManageDeck = () => {
  const { cardSetSlug } = useParams();
  const { cardSets, setSelectedCardSetName } = useCardSetsStore();
  const { fetchCardSets } = useCardSetHTTPMethod();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCardSets();
  }, []);

  const currentCardSet = useMemo(
    () => cardSets.find((cardSet) => cardSet.slug === cardSetSlug) || null,
    [cardSets, cardSetSlug]
  );

  useEffect(() => {
    if (!currentCardSet) {
      navigate("/pick-set");
    }
  }, [currentCardSet]);

  // To prevent execution of code below this statement
  if (!currentCardSet) {
    return null;
  }

  const {
    availableCards,
    selectedDeck,
    handleAddCardToDeck,
    handleRemoveCardFromDeck,
    generateHand
  } = useCardSetup(currentCardSet.cards ?? []);

  const handleStartGameButton = (event: React.MouseEvent<HTMLElement>) => {
    if (selectedDeck.length < CARDS_IN_HAND) {
      event.preventDefault();
      return;
    }

    if (currentCardSet) {
      setSelectedCardSetName(currentCardSet.cardSetName);
    }

    generateHand();
  };

  return (
    <div style={{ color: "#000", marginTop: "40px", textAlign: "center" }}>
      <p>Manage deck</p>
      <CardRow type="close">
        {availableCards &&
          availableCards.map((card) => (
            <Card
              location="hand"
              key={card._id}
              card={card}
              onClick={() => {
                handleAddCardToDeck(card);
              }}
            />
          ))}
      </CardRow>
      <CardRow type="close">
        {selectedDeck &&
          selectedDeck.map((card) => (
            <Card
              location="hand"
              key={card._id}
              card={card}
              onClick={() => {
                handleRemoveCardFromDeck(card._id);
              }}
            />
          ))}
      </CardRow>
      <Link
        style={{ margin: "20px auto 0 auto" }}
        to="/play"
        onClick={(event: React.MouseEvent<HTMLElement>) => handleStartGameButton(event)}>
        Play with this card set
      </Link>
    </div>
  );
};
