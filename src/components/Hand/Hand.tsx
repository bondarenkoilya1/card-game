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
  const { playerHand, removeCardFromPlayerHand } = useHandsStore();
  const { addPlayerBoardCard } = useBoardCardsStore();
  const { loading, error, generateHand } = useHandGenerator();

  useEffect(() => {
    if (playerDeck.length >= CARDS_IN_HAND && playerHand.length === 0) {
      generateHand();
    }
  }, [playerDeck, generateHand]);

  if (loading) return <LoadingMessageStyled>Loading...</LoadingMessageStyled>;

  const makeMove = (card: CardProps) => {
    addPlayerBoardCard(card);
    removeCardFromPlayerHand(card._id);
  };

  return (
    <HandStyled>
      {error && <Error unspecifiedErrorMessage={error} />}

      <TitleStyled>Your Hand</TitleStyled>
      <CardRow type="hand">
        {playerHand &&
          playerHand.map((card: CardProps) => (
            <Card card={card} location="board" onClick={() => makeMove(card)} key={uuidv4()} />
          ))}
      </CardRow>
    </HandStyled>
  );
};
