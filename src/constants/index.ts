import { CardType, NavigationProps } from "src/types";

export const CARDS_IN_HAND = 10;
export const CARD_TYPES: CardType[] = ["close", "range", "siege"];

// TODO: temporary as json file, in the future - move to a real database
export const NORTHERN_REALMS_CARDS_ARRAY = "./northernRealms.json";

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
