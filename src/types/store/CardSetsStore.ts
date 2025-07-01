import { CardSetsProp, CardSetsType } from "src/types";

export type CardSetStoreProps = CardSetsProp & {
  selectedCardSetName: string;
  isLoading: boolean;
  error: string | null;
  setCardSets: (newCardSets: CardSetsType) => void;
  setSelectedCardSetName: (newCardSetName: string) => void;
  setIsLoading: (loadingStatus: boolean) => void;
  setError: (errorMessage: string | null) => void;
};
