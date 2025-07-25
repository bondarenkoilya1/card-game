import { ContainerStyles, GamePageStyled } from "./styled";
import { ContainerStyled } from "src/styled";

import { Board, ErrorComponent, Hand } from "src/components";

import { findCardSetByName } from "src/utils";

import { useBoardCardsStore, useDecksStore, useScoresStore } from "src/store";

import { useBotCards, useCardSets, useRedirect } from "src/hooks";

export const Game = () => {
  const { selectedCardSetName } = useDecksStore();
  const { playerScore, setPlayerScore, botScore, setBotScore } = useScoresStore();
  const { playerBoardCards, botBoardCards } = useBoardCardsStore();
  const { cardSets, isLoading, isError, error } = useCardSets();

  const currentCardSet = findCardSetByName(cardSets || [], selectedCardSetName);
  useBotCards(cardSets ?? []);

  const shouldRedirect = !isLoading && !isError && !currentCardSet;
  useRedirect(
    shouldRedirect,
    "/pick-set",
    "You should pick existing card set and set up your deck firstly."
  );

  if (isLoading) return <p>Loading</p>;
  if (isError) return <ErrorComponent unspecifiedErrorMessage={error?.message} />;

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
