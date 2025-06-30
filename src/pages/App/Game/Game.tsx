import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ContainerStyles, GamePageStyled, HandStyles } from "./styled";
import { ContainerStyled } from "src/styled";

import { Hand, PlayerBoard } from "src/components";

import { CardType, RowProps } from "src/types";

import { findCardSetByName } from "src/utils";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

const INITIAL_CARDS_ON_BOARD = [
  { type: "close" as CardType, cards: [] },
  { type: "range" as CardType, cards: [] },
  { type: "siege" as CardType, cards: [] }
];

export const Game = () => {
  const { cardSets, selectedCardSetName } = useCardSetsStore();
  const { fetchCardSets } = useCardSetHTTPMethod();
  const [cardsOnBoard, setCardsOnBoard] = useState<RowProps[]>(INITIAL_CARDS_ON_BOARD);
  const [currentScore, setCurrentScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCardSets();
  }, []);

  const currentCardSet = useMemo(
    () => findCardSetByName(cardSets, selectedCardSetName),
    [cardSets, selectedCardSetName]
  );

  useEffect(() => {
    if (!currentCardSet) {
      navigate("/pick-set");
    }
  }, [currentCardSet]);

  return (
    <GamePageStyled>
      <ContainerStyled style={ContainerStyles}>
        <PlayerBoard
          cardsOnBoard={cardsOnBoard}
          currentScore={currentScore}
          setCurrentScore={setCurrentScore}
        />
        {currentCardSet && currentCardSet.cards.length > 0 && (
          <Hand
            outsideStyles={HandStyles}
            setCardsOnBoard={setCardsOnBoard}
            currentScore={currentScore}
          />
        )}
      </ContainerStyled>
    </GamePageStyled>
  );
};
