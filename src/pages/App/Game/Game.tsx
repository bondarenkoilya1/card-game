import { useEffect, useState } from "react";

import { ContainerStyles, GamePageStyled, HandStyles } from "./styled";
import { ContainerStyled } from "src/styled";

import { Hand, PlayerBoard } from "src/components";

import { CardSetProps, CardType, RowProps } from "src/types";

import { findCardSetByName } from "src/utils";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

const INITIAL_CARDS_ON_BOARD = [
  { type: "close" as CardType, cards: [] },
  { type: "range" as CardType, cards: [] },
  { type: "siege" as CardType, cards: [] }
];

export const Game = () => {
  const [cardsOnBoard, setCardsOnBoard] = useState<RowProps[]>(INITIAL_CARDS_ON_BOARD);
  const [currentScore, setCurrentScore] = useState(0);

  // todo: temporarily here
  const { fetchCardSets } = useCardSetHTTPMethod();
  const { cardSets, selectedCardSetName } = useCardSetsStore();

  useEffect(() => {
    fetchCardSets();
  }, []);

  // TODO: Watch github planning table
  const currentCardSet: CardSetProps =
    findCardSetByName(cardSets, selectedCardSetName) || cardSets[0];

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
            cards={currentCardSet.cards}
          />
        )}
      </ContainerStyled>
    </GamePageStyled>
  );
};
