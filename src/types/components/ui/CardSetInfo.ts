export type CardSetInfoProps = {
  name: string;
  id: string;
  deleteCardSet: () => void;
  updateCardSet: (
    cardId: string,
    nameOfItemToUpdate: "cardSetName" | "cardData",
    newCardSetName?: string | undefined
  ) => void;
  cardsQuantity: number;
};
