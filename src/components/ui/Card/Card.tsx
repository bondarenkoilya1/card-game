import { FC } from "react";

import { CardWrapperProps } from "src/types";

import { AdminPanelCard } from "./AdminPanelCard";
import { HandCard } from "./HandCard";

/* In future there will be one more location of the card.
   At the place, where player will choose his deck to play */
export const Card: FC<CardWrapperProps> = ({ card, location = "board" }) => {
  switch (location) {
    case "hand":
      return <HandCard card={card} />;
    case "adminPanel":
      return <AdminPanelCard card={card} />;
    default:
      console.error(`Card has necessary param "location". It was not specified. \n`);
      return <p>Card variant was not specified (e.g "board")</p>;
  }
};
