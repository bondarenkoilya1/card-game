import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { CardRowListStyled } from "./styled";

import { CARD_TYPES } from "src/constants";

import { Card, CardRow } from "src/components";
import { CardRowStyles } from "src/components/Board/styled.ts";

import { CardRowListProps, CardType } from "src/types";

export const CardRowList: FC<CardRowListProps> = ({ sort, rows }) => {
  return (
    <CardRowListStyled sort={sort}>
      {CARD_TYPES.map((type: CardType, index) => (
        <CardRow outsideStyles={CardRowStyles} type={type} key={uuidv4()}>
          {rows[index].cards.map((card) => (
            <Card card={card} location="board" key={card._id} />
          ))}
        </CardRow>
      ))}
    </CardRowListStyled>
  );
};
