import { useEffect } from "react";

import { CARDS_IN_HAND } from "src/constants";

import { CardSetProps } from "src/types";

import { useDecksStore, useHandsStore } from "src/store";

import { useHandGenerator } from "src/hooks/useHandGenerator.ts";

export const useBotCards = (cardSets: CardSetProps[] | undefined) => {
  const { botDeck, setBotDeck } = useDecksStore();
  const { botHand } = useHandsStore();
  const { generateHand } = useHandGenerator("bot");

  useEffect(() => {
    if (cardSets && cardSets.length > 0 && botDeck.length === 0)
      setBotDeck(cardSets[0].cards || []);
  }, [cardSets]);

  useEffect(() => {
    if (botDeck.length >= CARDS_IN_HAND && botHand.length === 0) generateHand();
  }, [botDeck]);
};
