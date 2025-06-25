import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card } from "src/components";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

// TODO: Maybe reorganize params system. Current split and join doesn't look trustfully
export const ManageDeck = () => {
  const { cardSetName } = useParams();
  const { cardSets } = useCardSetsStore();
  const { fetchCardSets } = useCardSetHTTPMethod();

  useEffect(() => {
    fetchCardSets();
  }, []);

  const recoveredCardSetName = cardSetName?.split("-").join(" ");

  const currentCardSet = cardSets.find((cardSet) => cardSet.cardSetName === recoveredCardSetName);
  const currentCardSetCards = currentCardSet?.cards;

  return (
    <div style={{ color: "#000", marginTop: "40px" }}>
      <p>Manage deck</p>
      <ul>
        {currentCardSetCards &&
          currentCardSetCards.map((card) => <Card location="hand" key={card._id} card={card} />)}
      </ul>
    </div>
  );
};
