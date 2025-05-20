import { CardProps } from "src/types";

export type UploadCardSetStoreProps = {
  cardsToUpload: CardProps[];
  isLoading: boolean;
  error: string | null;
  setCardsToUpload: (cards: CardProps[]) => void;
  clearCardsToUpload: () => void;
  setIsLoading: (loadingStatus: boolean) => void;
  setError: (errorMessage: string | null) => void;
};
