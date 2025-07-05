import { useEffect, useMemo, useState } from "react";

import { ContainerStyles, GamePageStyled, HandStyles } from "./styled";
import { ContainerStyled } from "src/styled";

import { Hand, PlayerBoard } from "src/components";

import { CardType, RowProps } from "src/types";

import { findCardSetByName } from "src/utils";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod, useRedirect } from "src/hooks";

const INITIAL_CARDS_ON_BOARD = [
  { type: "close" as CardType, cards: [] },
  { type: "range" as CardType, cards: [] },
  { type: "siege" as CardType, cards: [] }
];

export const Game = () => {
  const { cardSets, selectedCardSetName } = useCardSetsStore();
  const { fetchCardSets } = useCardSetHTTPMethod();
  const [cardsOnBoard, setCardsOnBoard] = useState<RowProps[]>(INITIAL_CARDS_ON_BOARD);

  useEffect(() => {
    fetchCardSets();
  }, []);

  const currentCardSet = useMemo(
    () => findCardSetByName(cardSets, selectedCardSetName),
    [cardSets, selectedCardSetName]
  );

  useRedirect(!currentCardSet, "/pick-set");

  return (
    <GamePageStyled>
      <ContainerStyled style={ContainerStyles}>
        <PlayerBoard cardsOnBoard={cardsOnBoard} />
        {currentCardSet && currentCardSet.cards.length > 0 && (
          <Hand outsideStyles={HandStyles} setCardsOnBoard={setCardsOnBoard} />
        )}
      </ContainerStyled>
    </GamePageStyled>
  );
};
