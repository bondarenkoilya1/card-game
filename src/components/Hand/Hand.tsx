import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { HandStyled, LoadingMessageStyled, TitleStyled } from "./styled";

import { CARDS_IN_HAND } from "src/constants";

import { Card, CardRow, Error } from "src/components";

import { CardProps } from "src/types";

import { useBoardCardsStore, useDecksStore, useHandsStore } from "src/store";

import { useHandGenerator } from "src/hooks";

export const Hand: FC = () => {
  const { playerDeck } = useDecksStore();
  const { playerHand, removeCardFromPlayerHand, botHand, removeCardFromBotHand } = useHandsStore();
  const { addPlayerBoardCard, addBotBoardCard } = useBoardCardsStore();
  const { loading, error, generateHand } = useHandGenerator("player");

  // Should be true on every game start so it's not in the store
  const [isMoving, setIsMoving] = useState(true);

  useEffect(() => {
    if (playerDeck.length >= CARDS_IN_HAND && playerHand.length === 0) generateHand();
  }, [playerDeck]);

  if (loading) return <LoadingMessageStyled>Loading...</LoadingMessageStyled>;

  // TODO: Bring out everything below
  const makeMove = (card: CardProps) => {
    if (isMoving) {
      addPlayerBoardCard(card);
      removeCardFromPlayerHand(card._id);
      setIsMoving(false);
    }
  };

  // TODO: Artificial timeout
  useEffect(() => {
    if (!isMoving) {
      addBotBoardCard(botHand[0]);
      removeCardFromBotHand(botHand[0]._id);
      setIsMoving(true);
    }
  }, [isMoving]);

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
