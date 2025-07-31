import { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { HandStyled, LoadingMessageStyled, TitleStyled } from "./styled";

import { CARDS_IN_HAND } from "src/constants";

import { Card, CardRow, ErrorComponent } from "src/components";

import { CardProps } from "src/types";

import { useDecksStore, usePlayerHand } from "src/store";

import { useHandGenerator, useMove } from "src/hooks";

export const Hand: FC = () => {
  const { playerDeck } = useDecksStore();
  const playerHand = usePlayerHand();
  const { loading, error, generateHand } = useHandGenerator("player");
  // TODO: Choose first turn owner randomly
  const { makeMove } = useMove("player");

  useEffect(() => {
    if (playerDeck.length >= CARDS_IN_HAND && playerHand.length === 0) generateHand();
  }, [playerDeck]);

  return (
    <HandStyled>
      {error && <ErrorComponent unspecifiedErrorMessage={error} />}

      <TitleStyled>Your Hand</TitleStyled>
      <CardRow type="hand">
        {loading && !playerHand && <LoadingMessageStyled>Loading...</LoadingMessageStyled>}
        {playerHand &&
          playerHand.map((card: CardProps) => (
            <Card card={card} location="board" onClick={() => makeMove(card)} key={uuidv4()} />
          ))}
      </CardRow>
    </HandStyled>
  );
};
