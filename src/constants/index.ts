import { CardType, NavigationItemProps, SidebarNavigationProps } from "src/types";

export const CARDS_IN_HAND = 10;
export const CARDS_IN_DECK = 15;

export const CARD_TYPES: CardType[] = ["close", "range", "siege"];

export const NAVIGATION_ITEMS: NavigationItemProps[] = [
  { title: "Home", url: "/" },
  { title: "Pick set", url: "/pick-set" },
  { title: "Play", url: "/play" }
];

export const SIDEBAR_NAVIGATION_ITEMS: SidebarNavigationProps = {
  adminPanel: [
    {
      title: "Card management",
      items: [
        { title: "Manage Card Sets", url: "" },
        { title: "Upload Card Sets", url: "upload" }
      ]
    }
  ]
};
