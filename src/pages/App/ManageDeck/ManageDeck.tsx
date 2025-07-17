import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { DecksContainerStyled, ManageDeckStyled, SubtitleStyled, TitleStyled } from "./styled";

import { CARDS_IN_HAND } from "src/constants";

import { Button, Card, CardRow, ErrorComponent } from "src/components";

import { CardProps } from "src/types";

import { useDecksStore } from "src/store";

import { useCardSets, useRedirect } from "src/hooks";

// TODO: Protect routes instead of useNavigate hook
export const ManageDeck = () => {
  const navigate = useNavigate();
  const { cardSetSlug } = useParams();
  const { cardSets, isLoading, isError, error } = useCardSets();
  const { setSelectedCardSetName, playerDeck, addCardToPlayerDeck, removeCardFromPlayerDeck } =
    useDecksStore();

  const currentCardSet = cardSets?.find((cardSet) => cardSet.slug === cardSetSlug) || null;

  const shouldRedirect = !isLoading && !isError && !currentCardSet;
  if (shouldRedirect) toast.warning("You should choose existing card set firstly.");
  useRedirect(shouldRedirect, "/pick-set");

  if (!currentCardSet) return null;

  const outOfDeckCards = currentCardSet.cards.filter(
    (card) => !playerDeck.some((deckCard) => deckCard._id === card._id)
  );

  const isDeckCompleted = playerDeck.length >= CARDS_IN_HAND;
  const handleStartGameButton = () => {
    if (!isDeckCompleted)
      throw new Error(`You should have at least ${CARDS_IN_HAND} cards in your deck.`);

    setSelectedCardSetName(currentCardSet.cardSetName);
    navigate("/play");
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

  if (isLoading) return <p>Loading</p>;
  if (isError) return <ErrorComponent unspecifiedErrorMessage={error?.message} />;

  return (
    <ManageDeckStyled>
      <TitleStyled>{currentCardSet?.cardSetName}</TitleStyled>
      <SubtitleStyled>Manage deck</SubtitleStyled>
      <DecksContainerStyled>
        {renderCardRow(outOfDeckCards, "add")}
        {renderCardRow(playerDeck, "remove")}
      </DecksContainerStyled>
      <Button
        onClick={handleStartGameButton}
        disabled={!isDeckCompleted}
        style={{ margin: "40px auto 0 auto" }}>
        Play with this card set
      </Button>
    </ManageDeckStyled>
  );
};
