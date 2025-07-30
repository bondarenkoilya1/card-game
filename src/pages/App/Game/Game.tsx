import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { ContainerStyles, GamePageStyled } from "./styled";
import { ContainerStyled } from "src/styled";

import { Board, ErrorComponent, Hand } from "src/components";

import { findCardSetByName } from "src/utils";

import { useBoardCardsStore, useDecksStore, useHandsStore, useScoresStore } from "src/store";

import { useBotCards, useCardSets, useRedirect } from "src/hooks";

export const Game = () => {
  const { playerCardSetName, botCardSetName } = useDecksStore();
  const { playerScore, setPlayerScore, botScore, setBotScore } = useScoresStore();
  const { playerBoardCards, botBoardCards } = useBoardCardsStore();
  const { cardSets, isLoading, isError, error } = useCardSets();
  const { playerHand, botHand } = useHandsStore();
  const [hasGameEnded, setHasGameEnded] = useState(false);

  const currentCardSet = findCardSetByName(cardSets || [], playerCardSetName);
  useBotCards(cardSets ?? []);

  const shouldRedirect = !isLoading && !isError && !currentCardSet;
  useRedirect(
    shouldRedirect,
    "/pick-set",
    "You should pick existing card set and set up your deck firstly."
  );

  useEffect(() => {
    const playerBoardHasCards = playerBoardCards.some(({ cards }) => cards.length > 0);

    if (playerHand.length === 0 && botHand.length === 0 && playerBoardHasCards && !hasGameEnded) {
      setHasGameEnded(true);
    }
  }, [playerHand, botHand, playerBoardCards, hasGameEnded]);

  useEffect(() => {
    if (hasGameEnded) {
      defineWinner(playerScore, botScore);
    }
  }, [hasGameEnded]);

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

function defineWinner(playerScore: number, botScore: number) {
  const playerName = "You";
  const botName = "Bot";

  if (playerScore > botScore)
    return toast.success(`${playerName} won with a total of ${playerScore} points!`);

  if (botScore > playerScore) return toast.info(`${botName} won this time. Try again!`);

  toast.warning("It's a draw! Give it another shot.");
}
