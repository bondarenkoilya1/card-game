import { Link } from "react-router-dom";

import { ContainerStyles, GamePageStyled } from "./styled";
import { ContainerStyled } from "src/styled";

import { Board, ErrorComponent, Hand } from "src/components";

import { findCardSetByName } from "src/utils";

import { useBoardCardsStore, useCardSetsStore, useScoresStore } from "src/store";

import { useBotCards, useCardSets, useRedirect } from "src/hooks";

export const Game = () => {
  const { selectedCardSetName } = useCardSetsStore();
  const { playerScore, setPlayerScore, botScore, setBotScore } = useScoresStore();
  const { playerBoardCards, botBoardCards } = useBoardCardsStore();

  const { cardSets, isLoading, isError, error } = useCardSets();

  const currentCardSet = findCardSetByName(cardSets || [], selectedCardSetName);

  useBotCards(cardSets ?? []);

  const shouldRedirect = !isLoading && !isError && !currentCardSet;
  useRedirect(shouldRedirect, "/pick-set");

  if (isLoading) return <p>Loading</p>;
  if (isError) return <ErrorComponent unspecifiedErrorMessage={error?.message} />;

  return (
    <GamePageStyled>
      <ContainerStyled style={ContainerStyles}>
        <Link to="/" style={{ marginTop: "20px", textTransform: "uppercase", fontWeight: "700" }}>
          Home page
        </Link>
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
