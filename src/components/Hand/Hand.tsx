import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { HandStyled, LoadingMessageStyled, TitleStyled } from "./styled";

import { NORTHERN_REALMS_CARDS_ARRAY } from "src/constants";

import { Card, CardRow, Error } from "src/components";

import { CardProps, CardsOnBoardUpdater } from "src/types";

import { useCardSetup } from "src/hooks";

export const Hand: FC<CardsOnBoardUpdater> = ({ outsideStyles, setCardsOnBoard, currentScore }) => {
  const { cardsInHand, setCardsInHand, loading, error } = useCardSetup(NORTHERN_REALMS_CARDS_ARRAY);

  if (loading) return <LoadingMessageStyled>Loading...</LoadingMessageStyled>;

  const removeCardFromHand = (cardId: string) => {
    setCardsInHand((prevHand: CardProps[]) =>
      prevHand.filter((handCard) => handCard.id !== cardId)
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

    removeCardFromHand(card.id);
  };

  return (
    <HandStyled css={outsideStyles}>
      {error && <Error unspecifiedErrorMessage={error} />}
      <div>Score: {currentScore}</div>

      <TitleStyled>Your Hand</TitleStyled>
      <CardRow type="hand">
        {cardsInHand.map((card: CardProps) => (
          <Card card={card} onClick={() => addCardToBoard(card)} key={uuidv4()} />
        ))}
      </CardRow>
    </HandStyled>
  );
};
