import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { FormDataProps, UploadCardSetStoreProps } from "./types";

const initialFormData: FormDataProps = {
  cardSetName: "",
  cardName: "",
  cardType: "close",
  cardPoints: 0
};

// TODO: bring error and loading functionality to utils to avoid repeating
export const useUploadCardSetStore = create<UploadCardSetStoreProps>()(
  devtools(
    (set) => ({
      isLoading: false,
      error: null,
      cardsToUpload: [],
      formData: initialFormData,
      setIsLoading: (loadingStatus: boolean) => set({ isLoading: loadingStatus }),
      setError: (errorMessage: string | null) => set({ error: errorMessage }),
      setCardsToUpload: (cards) => set({ cardsToUpload: cards }),
      clearCardsToUpload: () => set({ cardsToUpload: [] }),
      // TODO: prevent from wrong types
      setSpecificFormDataField: (field, newValue) =>
        set((state) => ({
          formData: {
            ...state.formData,
            [field]: newValue
          }
        })),
      clearSpecificFormDataField: (field) =>
        set((state) => ({
          formData: {
            ...state.formData,
            [field]: initialFormData[field]
          }
        }))
    }),
    { name: "CardSetsStore" }
  )
);
