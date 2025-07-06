import { FC, useEffect } from "react";

import { BoardStyled } from "./styled";

import { Score } from "src/components";

import { BoardProps, CardProps, SortVariants } from "src/types";

import { CardRowList } from "./CardRowList";

const getCardPoints = (card: CardProps) => card.points || 0;

export const Board: FC<BoardProps> = ({ boardCards, score, setScore, boardType }) => {
  useEffect(() => {
    const allCards: CardProps[] = boardCards.flatMap((row) => row.cards);
    const currentScore = allCards.reduce((total, card) => total + getCardPoints(card), 0);

    if (currentScore !== score) setScore(currentScore);
  }, [boardCards, setScore]);

  const settings: Record<"player" | "bot", { owner: string; sort: SortVariants }> = {
    player: { owner: "You", sort: "normal" },
    bot: { owner: "Bot", sort: "reverse" }
  };
  const { owner, sort } = settings[boardType];

  return (
    <BoardStyled>
      <CardRowList sort={sort} boardCards={boardCards} />
      <Score owner={owner} score={score} />
    </BoardStyled>
  );
};
