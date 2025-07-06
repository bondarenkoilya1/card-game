import { useEffect, useMemo } from "react";

import { ContainerStyles, GamePageStyled } from "./styled";
import { ContainerStyled } from "src/styled";

import { Board, Hand } from "src/components";

import { findCardSetByName } from "src/utils";

import { useBoardCardsStore, useCardSetsStore, useScoresStore } from "src/store";

import { useCardSetHTTPMethod, useRedirect } from "src/hooks";

export const Game = () => {
  const { cardSets, selectedCardSetName } = useCardSetsStore();
  const { playerScore, setPlayerScore, botScore, setBotScore } = useScoresStore();
  const { playerBoardCards, botBoardCards } = useBoardCardsStore();
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
        <Board boardCards={botBoardCards} score={botScore} setScore={setBotScore} boardType="bot" />
        <Board
          boardCards={playerBoardCards}
          score={playerScore}
          setScore={setPlayerScore}
          boardType="player"
        />
        {currentCardSet && currentCardSet.cards.length > 0 && <Hand />}
      </ContainerStyled>
    </GamePageStyled>
  );
};
