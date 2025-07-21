import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { GameStoreProps } from "./types";

export const useGameStore = create<GameStoreProps>()(
  devtools(
    (set) => ({
      isPlaying: false,
      setIsPlaying: (newStatus) => set({ isPlaying: newStatus })
    }),
    { name: "DecksStore" }
  )
);
