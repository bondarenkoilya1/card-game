import { CardType, NavigationProps } from "src/types";

export const CARDS_IN_HAND = 10;
export const CARDS_IN_DECK = 15;

export const CARD_TYPES: CardType[] = ["close", "range", "siege"];

export const NAVIGATION_ITEMS: NavigationProps = {
  adminPanel: [
    {
      title: "Card management",
      items: [
        // TODO: url is temporarily empty
        { title: "Manage Card Sets", url: "" },
        { title: "Upload Card Sets", url: "upload" }
      ]
    }
  ]
};
