import { FC, useEffect } from "react";

import { BoardStyled } from "./styled";

import { CardRowList } from "src/components";
import { Score } from "src/components/ui/Score";

import { CardProps, CardsOnBoardArray } from "src/types";

export const Board: FC<CardsOnBoardArray> = ({ cardsOnBoard, score, setScore, boardType }) => {
  const getCardPoints = (card: CardProps) => card.points || 0;

  useEffect(() => {
    const allCards: CardProps[] = cardsOnBoard.flatMap((row) => row.cards);
    const currentScore = allCards.reduce((total, card) => total + getCardPoints(card), 0);

    if (currentScore !== score) setScore(currentScore);
  }, [cardsOnBoard, setScore]);

  const scoreOwner = boardType === "player" ? "You" : "Bot";
  // todo: rename, bring types out
  const sortParam: "normal" | "reverse" = boardType === "player" ? "normal" : "reverse";

  return (
    <BoardStyled>
      <CardRowList sort={sortParam} rows={cardsOnBoard} />
      <Score owner={scoreOwner} score={score} />
    </BoardStyled>
  );
};
