import { useEffect, useState } from "react";

import { ContainerStyles, GamePageStyled, HandStyles } from "./styled";
import { ContainerStyled } from "src/styled";

import { Hand, PlayerBoard } from "src/components";

import { RowProps } from "src/types";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

export const Game = () => {
  const [cardsOnBoard, setCardsOnBoard] = useState<RowProps[]>([
    { type: "close", cards: [] },
    { type: "range", cards: [] },
    { type: "siege", cards: [] }
  ]);
  const [currentScore, setCurrentScore] = useState(0);

  // todo: temporarily here
  const { fetchCardSets } = useCardSetHTTPMethod();
  const { cardSets } = useCardSetsStore();

  useEffect(() => {
    fetchCardSets();
  }, []);

  return (
    <GamePageStyled>
      <ContainerStyled style={ContainerStyles}>
        <PlayerBoard
          cardsOnBoard={cardsOnBoard}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
        {/* todo: temporarily give cardSet prop */}
        {cardSets.length > 0 && (
          <Hand
            outsideStyles={HandStyles}
            setCardsOnBoard={setCardsOnBoard}
            currentScore={currentScore}
            cards={cardSets[0].cards}
          />
        )}
      </ContainerStyled>
    </GamePageStyled>
  );
};
