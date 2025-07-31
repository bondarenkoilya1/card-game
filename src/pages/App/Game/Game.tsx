import { ContainerStyles, GamePageStyled } from "./styled";
import { ContainerStyled } from "src/styled";

import { Board, ErrorComponent, Hand } from "src/components";

import { findCardSetByName } from "src/utils";

import {
  useBotBoardCards,
  useBotCardSetName,
  useBotScore,
  usePlayerBoardCards,
  usePlayerCardSetName,
  usePlayerScore,
  useScoresActions
} from "src/store";

import { useBotCards, useCardSets, useDefineWinner, useRedirect } from "src/hooks";

export const Game = () => {
  const playerCardSetName = usePlayerCardSetName();
  const botCardSetName = useBotCardSetName();
  const playerScore = usePlayerScore();
  const botScore = useBotScore();
  const { setPlayerScore, setBotScore } = useScoresActions();
  const playerBoardCards = usePlayerBoardCards();
  const botBoardCards = useBotBoardCards();
  const { cardSets, isLoading, isError, error } = useCardSets();

  const currentCardSet = findCardSetByName(cardSets || [], playerCardSetName);
  useBotCards(cardSets ?? []);

  const shouldRedirect = !isLoading && !isError && !currentCardSet;
  useRedirect(
    shouldRedirect,
    "/pick-set",
    "You should pick existing card set and set up your deck firstly."
  );

  useDefineWinner();

  if (isLoading) return <p>Loading</p>;
  if (isError) return <ErrorComponent unspecifiedErrorMessage={error?.message} />;

  return (
    <GamePageStyled>
      <ContainerStyled style={ContainerStyles}>
        <Board
          boardCards={botBoardCards}
          score={botScore}
          setScore={setBotScore}
          boardType="bot"
          cardSetName={botCardSetName}
        />
        <Board
          boardCards={playerBoardCards}
          score={playerScore}
          setScore={setPlayerScore}
          boardType="player"
          cardSetName={playerCardSetName}
        />
        {currentCardSet && currentCardSet.cards.length > 0 && <Hand />}
      </ContainerStyled>
    </GamePageStyled>
  );
};
