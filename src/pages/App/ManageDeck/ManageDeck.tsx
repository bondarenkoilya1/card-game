import {
  CardRowStyles,
  DecksContainerStyled,
  ManageDeckStyled,
  SubtitleStyled,
  TitleStyled
} from "./styled";

import { Button, Card, CardRow, ErrorComponent } from "src/components";

import { CardProps } from "src/types";

import { useDecksStore } from "src/store";

import { useManageDeck } from "src/hooks";

export const ManageDeck = () => {
  const { playerDeck, addCardToPlayerDeck, removeCardFromPlayerDeck } = useDecksStore();
  const { currentCardSet, outOfDeckCards, isDeckCompleted, isLoading, isError, error, startGame } =
    useManageDeck();

  const renderCardRow = (cards: CardProps[], action: "add" | "remove") => (
    <CardRow type="deck" outsideStyles={CardRowStyles}>
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

  if (isLoading || !currentCardSet) return <p>Loading</p>;
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
        onClick={startGame}
        disabled={!isDeckCompleted}
        style={{ margin: "40px auto 0 auto" }}>
        Play with this card set
      </Button>
    </ManageDeckStyled>
  );
};
