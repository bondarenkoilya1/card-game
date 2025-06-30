import { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { HandStyled, LoadingMessageStyled, TitleStyled } from "./styled";

import { CARDS_IN_HAND } from "src/constants";

import { Card, CardRow, Error } from "src/components";

import { CardProps, CardsOnBoardUpdater } from "src/types";

import { useGameDeckStore } from "src/store";

import { useCardSetup } from "src/hooks";

export const Hand: FC<CardsOnBoardUpdater> = ({ outsideStyles, setCardsOnBoard, currentScore }) => {
  const { selectedDeck } = useGameDeckStore();
  const { cardsInHand, loading, error, setCardsInHand, generateHand } = useCardSetup(selectedDeck);

  useEffect(() => {
    if (selectedDeck.length >= CARDS_IN_HAND && cardsInHand.length === 0) {
      generateHand();
    }
  }, [selectedDeck, generateHand]);

  if (loading) return <LoadingMessageStyled>Loading...</LoadingMessageStyled>;

  const removeCardFromHand = (cardId: string) => {
    setCardsInHand((prevHand: CardProps[]) =>
      prevHand.filter((handCard) => handCard._id !== cardId)
    );
  };

  const addCardToBoard = (card: CardProps) => {
    const selectedRowType = card.type;

    setCardsOnBoard((prevState) =>
      prevState.map((row) =>
        row.type === selectedRowType
          ? {
              ...row,
              cards: [...row.cards, card]
            }
          : row
      )
    );

    removeCardFromHand(card._id);
  };

  return (
    <HandStyled css={outsideStyles}>
      {error && <Error unspecifiedErrorMessage={error} />}
      <div>Score: {currentScore}</div>

      <TitleStyled>Your Hand</TitleStyled>
      <CardRow type="hand">
        {cardsInHand &&
          cardsInHand.map((card: CardProps) => (
            <Card card={card} location="hand" onClick={() => addCardToBoard(card)} key={uuidv4()} />
          ))}
      </CardRow>
    </HandStyled>
  );
};
