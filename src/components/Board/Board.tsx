import { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { BoardStyled, CardRowStyles } from "./styled";

import { CARD_TYPES } from "src/constants";

import { Card, CardRow } from "src/components";
import { Score } from "src/components/ui/Score";

import { CardProps, CardsOnBoardArray, CardType } from "src/types";

export const Board: FC<CardsOnBoardArray> = ({ cardsOnBoard, score, setScore, type }) => {
  const getCardPoints = (card: CardProps) => card.points || 0;

  useEffect(() => {
    const allCards: CardProps[] = cardsOnBoard.flatMap((row) => row.cards);
    const currentScore = allCards.reduce((total, card) => total + getCardPoints(card), 0);

    if (currentScore !== score) setScore(currentScore);
  }, [cardsOnBoard, setScore]);

  const renderRowsByCardTypes = () =>
    CARD_TYPES.map((type: CardType, index) => (
      <CardRow outsideStyles={CardRowStyles} type={type} key={uuidv4()}>
        {cardsOnBoard[index].cards.map((card) => (
          <Card card={card} location="board" key={card._id} />
        ))}
      </CardRow>
    ));

  const scoreOwner = type === "player" ? "You" : "Bot";

  return (
    <BoardStyled>
      {renderRowsByCardTypes()}
      <Score owner={scoreOwner} score={score} />
    </BoardStyled>
  );
};
