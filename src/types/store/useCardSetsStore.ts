import { CardSets } from "src/types";

export type CardSetStoreProps = {
  cardSets: CardSets;
  selectedCardSetName: string;
  isLoading: boolean;
  error: string | null;
  setCardSets: (newCardSets: CardSets) => void;
  setSelectedCardSetName: (newCardSetName: string) => void;
  setIsLoading: (loadingStatus: boolean) => void;
  setError: (errorMessage: string | null) => void;
};
