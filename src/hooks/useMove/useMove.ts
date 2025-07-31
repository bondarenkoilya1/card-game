import { useEffect, useState } from "react";

import { CardProps, ParticipantType } from "src/types";

import { useBoardCardsStore, useBotHand, useHandsActions } from "src/store";

export const useMove = (firstTurn: ParticipantType) => {
  // temp comment
  const botHand = useBotHand();
  const { removeCardFromPlayerHand, removeCardFromBotHand } = useHandsActions();
  const { addPlayerBoardCard, addBotBoardCard } = useBoardCardsStore();
  const [currentTurn, setCurrentTurn] = useState<ParticipantType>(firstTurn);

  const makeMove = (card: CardProps) => {
    if (currentTurn !== "player") return;
    addPlayerBoardCard(card);
    removeCardFromPlayerHand(card._id);
    setCurrentTurn("bot");
  };

  useEffect(() => {
    if (currentTurn === "bot" && botHand.length > 0) {
      const botCard = botHand[0];

      addBotBoardCard(botCard);
      removeCardFromBotHand(botCard._id);
      setCurrentTurn("player");
    }
  }, [currentTurn, botHand]);

  return { makeMove };
};
