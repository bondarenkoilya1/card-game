import { FC, useEffect } from "react";

import { BoardStyled } from "./styled";

import { CardRowList } from "src/components";
import { Score } from "src/components/ui/Score";

import { CardProps, CardsOnBoardArray, SortVariants } from "src/types";

const getCardPoints = (card: CardProps) => card.points || 0;

export const Board: FC<CardsOnBoardArray> = ({ cardsOnBoard, score, setScore, boardType }) => {
  useEffect(() => {
    const allCards: CardProps[] = cardsOnBoard.flatMap((row) => row.cards);
    const currentScore = allCards.reduce((total, card) => total + getCardPoints(card), 0);

    if (currentScore !== score) setScore(currentScore);
  }, [cardsOnBoard, setScore]);

  const settings: Record<"player" | "bot", { owner: string; sort: SortVariants }> = {
    player: { owner: "You", sort: "normal" },
    bot: { owner: "Bot", sort: "reverse" }
  };
  const { owner, sort } = settings[boardType];

  return (
    <BoardStyled>
      <CardRowList sort={sort} rows={cardsOnBoard} />
      <Score owner={owner} score={score} />
    </BoardStyled>
  );
};
