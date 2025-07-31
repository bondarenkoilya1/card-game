import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { ScoresStoreProps } from "./types";

const useScoresStore = create<ScoresStoreProps>()(
  devtools(
    (set) => ({
      playerScore: 0,
      botScore: 0,
      actions: {
        setPlayerScore: (newScore) => set({ playerScore: newScore }),
        setBotScore: (newScore) => set({ botScore: newScore })
      }
    }),
    { name: "ScoresStore" }
  )
);

export const usePlayerScore = () => useScoresStore((state) => state.playerScore);
export const useBotScore = () => useScoresStore((state) => state.botScore);
export const useScoresActions = () => useScoresStore((state) => state.actions);
