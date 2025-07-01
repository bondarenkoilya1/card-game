import React, { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import { CARDS_IN_HAND } from "src/constants";

import { Card, CardRow } from "src/components";

import { useCardSetsStore, useGameDeckStore } from "src/store";

import { useCardSetHTTPMethod, useCardSetup, useRedirect } from "src/hooks";

export const ManageDeck = () => {
  const { cardSetSlug } = useParams();
  const { fetchCardSets } = useCardSetHTTPMethod();
  const { cardSets, setSelectedCardSetName } = useCardSetsStore();
  const { deck, addCardToDeck, removeCardFromDeck } = useGameDeckStore();

  useEffect(() => {
    fetchCardSets();
  }, []);

  const currentCardSet = useMemo(
    () => cardSets.find((cardSet) => cardSet.slug === cardSetSlug) || null,
    [cardSets, cardSetSlug]
  );

  useRedirect(!currentCardSet, "/pick-set");

  // To prevent execution of code below this statement
  if (!currentCardSet) {
    return null;
  }

  const { availableCards, generateHand } = useCardSetup(currentCardSet.cards ?? []);

  const handleStartGameButton = (event: React.MouseEvent<HTMLElement>) => {
    if (deck.length < CARDS_IN_HAND) {
      event.preventDefault();
      return;
    }

    setSelectedCardSetName(currentCardSet.cardSetName);
    generateHand();
  };

  return (
    <div style={{ color: "#000", marginTop: "40px", textAlign: "center" }}>
      <p>Manage deck</p>
      <CardRow type="close">
        {availableCards &&
          availableCards.map((card) => (
            <Card
              location="board"
              key={card._id}
              card={card}
              onClick={() => {
                addCardToDeck(card);
              }}
            />
          ))}
      </CardRow>
      <CardRow type="close">
        {deck &&
          deck.map((card) => (
            <Card
              location="board"
              key={card._id}
              card={card}
              onClick={() => {
                removeCardFromDeck(card._id);
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
