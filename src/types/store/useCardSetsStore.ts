import { CardSets } from "src/types";

export type CardSetStoreProps = {
  cardSets: CardSets;
  isLoading: boolean;
  error: string | null;
  setIsLoading: (loadingStatus: boolean) => void;
  setError: (errorMessage: string | null) => void;
  setCardSets: (newCardSets: CardSets) => void;
};
