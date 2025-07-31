import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  useBoardCardsStore,
  useBotHand,
  useBotScore,
  usePlayerHand,
  usePlayerScore
} from "src/store";

export const useDefineWinner = () => {
  const playerHand = usePlayerHand();
  const botHand = useBotHand();
  const { playerBoardCards } = useBoardCardsStore();
  const playerScore = usePlayerScore();
  const botScore = useBotScore();
  const [hasGameEnded, setHasGameEnded] = useState(false);

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
};

function defineWinner(playerScore: number, botScore: number) {
  const playerName = "You";
  const botName = "Bot";

  if (playerScore > botScore)
    return toast.success(`${playerName} won with a total of ${playerScore} points!`);

  if (botScore > playerScore) return toast.info(`${botName} won this time. Try again!`);

  toast.warning("It's a draw! Give it another shot.");
}
