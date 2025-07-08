import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DecksContainerStyled, ManageDeckStyled, TitleStyled } from "./styled";

import { CARDS_IN_HAND } from "src/constants";

import { Button, Card, CardRow } from "src/components";

import { CardProps } from "src/types";

import { useCardSetsStore, useDecksStore } from "src/store";

import { useCardSetHTTPMethod, useHandGenerator, useRedirect } from "src/hooks";

export const ManageDeck = () => {
  const navigate = useNavigate();
  const { cardSetSlug } = useParams();
  const { fetchCardSets } = useCardSetHTTPMethod();
  const { cardSets, setSelectedCardSetName } = useCardSetsStore();
  const { playerDeck, addCardToPlayerDeck, removeCardFromPlayerDeck } = useDecksStore();

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

  const { availableCards } = useHandGenerator(currentCardSet.cards ?? []);

  const handleStartGameButton = () => {
    navigate("/play");
    setSelectedCardSetName(currentCardSet.cardSetName);
  };

  const renderCardRow = (cards: CardProps[], action: "add" | "remove") => (
    <CardRow type="deck">
      {cards &&
        cards.map((card) => (
          <Card
            location="deck"
            key={card._id}
            card={card}
            onClick={() =>
              action === "add" ? addCardToPlayerDeck(card) : removeCardFromPlayerDeck(card._id)
            }
          />
        ))}
    </CardRow>
  );

  return (
    <ManageDeckStyled>
      <TitleStyled>Manage deck</TitleStyled>
      <DecksContainerStyled>
        {renderCardRow(availableCards, "add")}
        {renderCardRow(playerDeck, "remove")}
      </DecksContainerStyled>
      {/* TODO: Temporary decision to use Button instead of Link */}
      <Button
        onClick={handleStartGameButton}
        disabled={playerDeck.length < CARDS_IN_HAND}
        style={{ margin: "40px auto 0 auto" }}>
        Play with this card set
      </Button>
    </ManageDeckStyled>
  );
};
