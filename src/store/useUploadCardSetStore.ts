import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { UploadCardSetStoreProps } from "src/types";

// todo: bring error and loading functionality to utils to avoid repeating
// todo: maybe accept form data inside an array of objects
// todo: can be a single function to change card properties, not inside each object
export const useUploadCardSetStore = create<UploadCardSetStoreProps>()(
  devtools((set) => ({
    cardsToUpload: [{ name: "Val", points: 5, type: "close" }],
    isLoading: false,
    error: null,
    setCardsToUpload: (cards) => set({ cardsToUpload: cards }),
    clearCardsToUpload: () => set({ cardsToUpload: [] }),
    setIsLoading: (loadingStatus: boolean) => set({ isLoading: loadingStatus }),
    setError: (errorMessage: string | null) => set({ error: errorMessage })
  }))
);
