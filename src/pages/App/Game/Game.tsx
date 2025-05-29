import { useState } from "react";

import { ContainerStyles, GamePageStyled, HandStyles } from "./styled";
import { ContainerStyled } from "src/styled";

import { Hand, PlayerBoard } from "src/components";

import { RowProps } from "src/types";

export const Game = () => {
  const [cardsOnBoard, setCardsOnBoard] = useState<RowProps[]>([
    { type: "close", cards: [] },
    { type: "range", cards: [] },
    { type: "siege", cards: [] }
  ]);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <GamePageStyled>
      <ContainerStyled style={ContainerStyles}>
        <PlayerBoard
          cardsOnBoard={cardsOnBoard}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
        <Hand
          outsideStyles={HandStyles}
          setCardsOnBoard={setCardsOnBoard}
          currentScore={currentScore}
        />
      </ContainerStyled>
    </GamePageStyled>
  );
};
