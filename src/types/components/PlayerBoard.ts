import React from "react";

import { CSS } from "src/types";

import { CardProps, CardType } from "./ui/Card.ts";

export type RowProps = {
  type: CardType;
  cards: CardProps[];
};

export type CardsOnBoardArray = {
  cardsOnBoard: RowProps[];
  currentScore: number;
  setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
};

export type CardsOnBoardUpdater = {
  outsideStyles?: CSS;
  setCardsOnBoard: React.Dispatch<React.SetStateAction<RowProps[]>>;
  currentScore: number;
  cards: CardProps[];
};
