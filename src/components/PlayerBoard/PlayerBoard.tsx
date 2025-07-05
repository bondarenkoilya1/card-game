import { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { CardRowStyles, PlayerBoardStyled } from "./styled";

import { CARD_TYPES } from "src/constants";

import { Card, CardRow } from "src/components";

import { CardProps, CardsOnBoardArray, CardType } from "src/types";

import { useScoresStore } from "src/store";

/* TODO: Probably two same components: Player and Bot board, only cards prop is different
    I guess that's okay to use fabric pattern here */
export const PlayerBoard: FC<CardsOnBoardArray> = ({ cardsOnBoard }) => {
  const { playerScore, setPlayerScore } = useScoresStore();

  const getCardPoints = (card: CardProps) => card.points || 0;

  useEffect(() => {
    const allCards: CardProps[] = cardsOnBoard.flatMap((row) => row.cards);
    const currentScore = allCards.reduce((total, card) => total + getCardPoints(card), 0);

    if (currentScore !== playerScore) setPlayerScore(currentScore);
  }, [cardsOnBoard, setPlayerScore]);

  const renderRowsByCardTypes = () =>
    CARD_TYPES.map((type: CardType, index) => (
      <CardRow outsideStyles={CardRowStyles} type={type} key={uuidv4()}>
        {cardsOnBoard[index].cards.map((card) => (
          <Card card={card} location="board" key={card._id} />
        ))}
      </CardRow>
    ));

  return <PlayerBoardStyled>{renderRowsByCardTypes()}</PlayerBoardStyled>;
};
