import { CardProps, CardType } from "src/types";

// TODO: label combine with cardProps
export type FormDataProps = {
  cardSetName: string;
  cardName: string;
  cardType: CardType;
  cardPoints: number;
};

type FieldType = "cardSetName" | "cardName" | "cardType" | "cardPoints";
type NewValueType = string | number;

export type UploadCardSetStoreProps = {
  isLoading: boolean;
  error: string | null;
  cardsToUpload: CardProps[];
  formData: FormDataProps;
  setIsLoading: (loadingStatus: boolean) => void;
  setError: (errorMessage: string | null) => void;
  setCardsToUpload: (cards: CardProps[]) => void;
  clearCardsToUpload: () => void;
  setSpecificFormDataField: (field: FieldType, newValue: NewValueType) => void;
  clearSpecificFormDataField: (field: FieldType) => void;
};
