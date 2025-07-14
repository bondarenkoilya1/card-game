import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { ScoresStoreProps } from "./types";

export const useScoresStore = create<ScoresStoreProps>()(
  devtools(
    (set) => ({
      playerScore: 0,
      setPlayerScore: (newScore) => set({ playerScore: newScore }),
      botScore: 0,
      setBotScore: (newScore) => set({ botScore: newScore })
    }),
    { name: "ScoresStore" }
  )
);
