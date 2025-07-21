import { useEffect, useState } from "react";

import { ButtonStyled, DeckCollectorStyled, TextStyled, TitleStyled } from "./styled";

import { CARDS_IN_HAND } from "src/constants";

import { pickUniqueRandomNumbers } from "src/utils";

import { useDecksStore } from "src/store";

import { useManageDeck } from "src/hooks";

export const DeckCollector = () => {
  const { playerDeck, setPlayerDeck } = useDecksStore();
  const { currentCardSet, startGame } = useManageDeck();
  const [shouldStart, setShouldStart] = useState(false);

  const pickRandomCards = () => {
    if (!currentCardSet) return;

    const cards = currentCardSet.cards;
    const cardsQuantity = cards.length;
    const arrayOfUniqueNumbers = pickUniqueRandomNumbers(10, cardsQuantity);

    const selectedCards = arrayOfUniqueNumbers.map((index) => cards[index]);
    return selectedCards;
  };

  const collectDeck = async () => {
    const generatedCards = pickRandomCards();
    if (!generatedCards) return;

    setPlayerDeck(generatedCards);
    setShouldStart(true);
  };

  useEffect(() => {
    if (shouldStart && playerDeck.length >= CARDS_IN_HAND) {
      startGame();
      setShouldStart(false);
    }
  }, [playerDeck, shouldStart]);

  return (
    <DeckCollectorStyled>
      <TitleStyled>Don't wanna waste time?</TitleStyled>
      <TextStyled>Collect deck automatically and start game</TextStyled>
      <ButtonStyled variant="secondary" onClick={collectDeck}>
        Let's go
      </ButtonStyled>
    </DeckCollectorStyled>
  );
};
