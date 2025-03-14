import { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { CardRowStyles, PlayerBoardStyled } from "./styled";

import { CARD_TYPES } from "../../constants";
import { CardProps, CardsOnBoardArray, CardType } from "../../types";
import { saveCurrentScore } from "../../utils";
import { Card, CardRow } from "../ui";

export const PlayerBoard: FC<CardsOnBoardArray> = ({
  cardsOnBoard,
  currentScore,
  setCurrentScore
}) => {
  const getCardPoints = (card: CardProps) => Number(card.points) || 0;

  useEffect(() => {
    const allCards: CardProps[] = cardsOnBoard.flatMap((row) => row.cards);
    const currentScore = allCards.reduce((total, card) => total + getCardPoints(card), 0);

    setCurrentScore((prevScore) => (prevScore !== currentScore ? currentScore : prevScore));
  }, [cardsOnBoard, setCurrentScore]);

  saveCurrentScore(currentScore);

  const renderRowsByCardTypes = () =>
    CARD_TYPES.map((type: CardType, index) => (
      <CardRow outsideStyles={CardRowStyles} type={type} key={uuidv4()}>
        {cardsOnBoard[index].cards.map((card) => (
          <Card card={card} key={card._id} />
        ))}
      </CardRow>
    ));

  return <PlayerBoardStyled>{renderRowsByCardTypes()}</PlayerBoardStyled>;
};
