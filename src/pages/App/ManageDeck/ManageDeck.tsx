import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DecksContainerStyled, ManageDeckStyled, TitleStyled } from "./styled";

import { CARDS_IN_HAND } from "src/constants";

import { Button, Card, CardRow } from "src/components";

import { CardProps } from "src/types";

import { useCardSetsStore, useDecksStore } from "src/store";

import { useCardSetHTTPMethod, useRedirect } from "src/hooks";

export const ManageDeck = () => {
  const navigate = useNavigate();
  const { cardSetSlug } = useParams();
  const { fetchCardSets } = useCardSetHTTPMethod();
  const { cardSets, setSelectedCardSetName } = useCardSetsStore();
  const { playerDeck, addCardToPlayerDeck, removeCardFromPlayerDeck } = useDecksStore();

  useEffect(() => {
    fetchCardSets();
  }, []);

  const currentCardSet = cardSets.find((cardSet) => cardSet.slug === cardSetSlug) || null;

  useRedirect(!currentCardSet, "/pick-set");

  // To prevent execution of code below this statement
  if (!currentCardSet) {
    return null;
  }

  const outOfDeckCards = currentCardSet.cards.filter(
    (card) => !playerDeck.some((deckCard) => deckCard._id === card._id)
  );

  const handleStartGameButton = () => {
    if (playerDeck.length < CARDS_IN_HAND)
      throw new Error(`You should have at least ${CARDS_IN_HAND} cards in your deck.`);

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
        {renderCardRow(outOfDeckCards, "add")}
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
