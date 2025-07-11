import { useEffect } from "react";
import { Link } from "react-router-dom";

import { ContainerStyles, GamePageStyled } from "./styled";
import { ContainerStyled } from "src/styled";

import { CARDS_IN_HAND } from "src/constants";

import { Board, Hand } from "src/components";

import { findCardSetByName } from "src/utils";

import {
  useBoardCardsStore,
  useCardSetsStore,
  useDecksStore,
  useHandsStore,
  useScoresStore
} from "src/store";

import { useCardSetHTTPMethod, useHandGenerator, useRedirect } from "src/hooks";

export const Game = () => {
  const { cardSets, selectedCardSetName } = useCardSetsStore();
  const { playerScore, setPlayerScore, botScore, setBotScore } = useScoresStore();
  const { playerBoardCards, botBoardCards } = useBoardCardsStore();
  const { botDeck, setBotDeck } = useDecksStore();
  const { botHand } = useHandsStore();
  const { fetchCardSets } = useCardSetHTTPMethod();
  const { generateHand } = useHandGenerator("bot");

  useEffect(() => {
    fetchCardSets();
  }, []);

  const currentCardSet = findCardSetByName(cardSets, selectedCardSetName);

  useRedirect(!currentCardSet, "/pick-set");

  useEffect(() => {
    if (cardSets.length > 0 && botDeck.length === 0) setBotDeck(cardSets[0].cards);
  }, [cardSets]);

  useEffect(() => {
    if (botDeck.length >= CARDS_IN_HAND && botHand.length === 0) generateHand();
  }, [botDeck]);

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
