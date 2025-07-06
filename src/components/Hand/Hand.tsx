import { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { HandStyled, LoadingMessageStyled, TitleStyled } from "./styled";

import { CARDS_IN_HAND } from "src/constants";

import { Card, CardRow, Error } from "src/components";

import { CardProps, CardsOnBoardUpdater } from "src/types";

import { useCardsOnBoardStore, useGameDeckStore, useGameHandStore } from "src/store";

import { useCardSetup } from "src/hooks";

export const Hand: FC<CardsOnBoardUpdater> = ({ outsideStyles }) => {
  const { deck } = useGameDeckStore();
  const { hand, removeCardFromHand } = useGameHandStore();
  const { addPlayerBoardCard } = useCardsOnBoardStore();
  const { loading, error, generateHand } = useCardSetup(deck);

  useEffect(() => {
    if (deck.length >= CARDS_IN_HAND && hand.length === 0) {
      generateHand();
    }
  }, [deck, generateHand]);

  if (loading) return <LoadingMessageStyled>Loading...</LoadingMessageStyled>;

  const addCardToBoard = (card: CardProps) => {
    addPlayerBoardCard(card);
    removeCardFromHand(card._id);
  };

  return (
    <HandStyled css={outsideStyles}>
      {error && <Error unspecifiedErrorMessage={error} />}

      <TitleStyled>Your Hand</TitleStyled>
      <CardRow type="hand">
        {hand &&
          hand.map((card: CardProps) => (
            <Card
              card={card}
              location="board"
              onClick={() => addCardToBoard(card)}
              key={uuidv4()}
            />
          ))}
      </CardRow>
    </HandStyled>
  );
};
