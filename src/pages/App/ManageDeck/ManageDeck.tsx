import {
  ButtonStyled,
  CardRowStyles,
  DecksContainerStyled,
  ManageDeckStyled,
  SubtitleStyled,
  TitleStyled
} from "./styled";

import { Card, CardRow, DeckCollector, ErrorComponent } from "src/components";

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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          width: "100%"
        }}>
        <div></div> {/* Empty element for layout balance */}
        <div>
          <TitleStyled>{currentCardSet?.cardSetName}</TitleStyled>
          <SubtitleStyled>Manage deck</SubtitleStyled>
        </div>
        <div style={{ justifySelf: "start", marginLeft: "100px" }}>
          <DeckCollector />
        </div>
      </div>

      <DecksContainerStyled>
        {renderCardRow(outOfDeckCards, "add")}
        {renderCardRow(playerDeck, "remove")}
      </DecksContainerStyled>
      <ButtonStyled
        onClick={startGame}
        disabled={!isDeckCompleted}
        style={{ margin: "40px auto 0 auto" }}>
        Play
      </ButtonStyled>
    </ManageDeckStyled>
  );
};
