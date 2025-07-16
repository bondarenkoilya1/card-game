import { FC, useEffect } from "react";

import { BoardStyled } from "./styled";

import { Score } from "src/components";

import { CardProps, SortVariants } from "src/types";
import { BoardProps } from "./types";

import { CardRowList } from "./CardRowList";

const getCardPoints = (card: CardProps) => card.points || 0;

export const Board: FC<BoardProps> = ({ boardCards, score, setScore, boardType }) => {
  useEffect(() => {
    const allCards: CardProps[] = boardCards.flatMap((row) => row.cards);
    const currentScore = allCards.reduce((total, card) => total + getCardPoints(card), 0);

    if (currentScore !== score) setScore(currentScore);
  }, [boardCards, setScore]);

  const settings: Record<"player" | "bot", { participant: string; sort: SortVariants }> = {
    player: { participant: "You", sort: "normal" },
    bot: { participant: "Bot", sort: "reverse" }
  };
  const { participant, sort } = settings[boardType];

  return (
    <BoardStyled>
      <CardRowList sort={sort} boardCards={boardCards} />
      <Score participant={participant} score={score} />
    </BoardStyled>
  );
};
