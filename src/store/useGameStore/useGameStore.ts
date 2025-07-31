import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { GameStoreProps } from "./types";

const useGameStore = create<GameStoreProps>()(
  devtools(
    (set) => ({
      isPlaying: false,
      actions: {
        setIsPlaying: (newStatus) => set({ isPlaying: newStatus })
      }
    }),
    { name: "DecksStore" }
  )
);

export const useGameStatus = () => useGameStore((state) => state.isPlaying);
export const useGameActions = () => useGameStore((state) => state.actions);
