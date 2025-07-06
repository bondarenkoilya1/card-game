import { useEffect, useMemo } from "react";

import { ContainerStyles, GamePageStyled, HandStyles } from "./styled";
import { ContainerStyled } from "src/styled";

import { Board, Hand } from "src/components";

import { findCardSetByName } from "src/utils";

import { useCardSetsStore, useScoresStore } from "src/store";
import { useCardsOnBoardStore } from "src/store/useCardsOnBoardStore.ts";

import { useCardSetHTTPMethod, useRedirect } from "src/hooks";

export const Game = () => {
  const { cardSets, selectedCardSetName } = useCardSetsStore();
  const { playerScore, setPlayerScore, botScore, setBotScore } = useScoresStore();
  const { playerBoardCards, botBoardCards } = useCardsOnBoardStore();
  const { fetchCardSets } = useCardSetHTTPMethod();

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
        <Board cardsOnBoard={botBoardCards} score={botScore} setScore={setBotScore} type="bot" />
        <Board
          cardsOnBoard={playerBoardCards}
          score={playerScore}
          setScore={setPlayerScore}
          type="player"
        />
        {currentCardSet && currentCardSet.cards.length > 0 && <Hand outsideStyles={HandStyles} />}
      </ContainerStyled>
    </GamePageStyled>
  );
};
