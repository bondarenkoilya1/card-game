// This function is not universal, but you can see use of it in a few places
import { CardSetProps, CardSets } from "src/types";

export const findCardSetByName = (cardSets: CardSets, name: string): CardSetProps | null =>
  cardSets.find(({ cardSetName }) => cardSetName === name) ?? null;
