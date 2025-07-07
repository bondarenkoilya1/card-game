import { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { HandStyled, LoadingMessageStyled, TitleStyled } from "./styled";

import { CARDS_IN_HAND } from "src/constants";

import { Card, CardRow, Error } from "src/components";

import { CardProps } from "src/types";

import { useBoardCardsStore, useDecksStore, useHandsStore } from "src/store";

import { useHandGenerator } from "src/hooks";

export const Hand: FC = () => {
  const { playerDeck } = useDecksStore();
  const { hand, removeCardFromHand } = useHandsStore();
  const { addPlayerBoardCard } = useBoardCardsStore();
  const { loading, error, generateHand } = useHandGenerator(playerDeck);

  useEffect(() => {
    if (playerDeck.length >= CARDS_IN_HAND && hand.length === 0) {
      generateHand();
    }
  }, [playerDeck, generateHand]);

  if (loading) return <LoadingMessageStyled>Loading...</LoadingMessageStyled>;

  const addCardToBoard = (card: CardProps) => {
    addPlayerBoardCard(card);
    removeCardFromHand(card._id);
  };

  return (
    <HandStyled>
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
