// This function is not universal, but you can see use of it in a few places
import { CardSetProps, CardSetsType } from "src/types";

export const findCardSetByName = (cardSets: CardSetsType, name: string): CardSetProps | null =>
  cardSets.find(({ cardSetName }) => cardSetName === name) ?? null;
