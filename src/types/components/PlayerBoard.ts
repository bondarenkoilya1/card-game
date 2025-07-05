import React from "react";

import { CSS } from "src/types";

import { CardProps, CardType } from "./ui/Card.ts";

export type RowProps = {
  type: CardType;
  cards: CardProps[];
};

export type CardsOnBoardArray = {
  cardsOnBoard: RowProps[];
};

export type CardsOnBoardUpdater = {
  outsideStyles?: CSS;
  setCardsOnBoard: React.Dispatch<React.SetStateAction<RowProps[]>>;
};
