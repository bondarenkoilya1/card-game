import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { Card, CardRow } from "src/components";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

export const ManageDeck = () => {
  const { cardSetSlug } = useParams();
  const { cardSets } = useCardSetsStore();
  const { fetchCardSets } = useCardSetHTTPMethod();

  useEffect(() => {
    fetchCardSets();
  }, []);

  const currentCardSet = cardSets.find((cardSet) => cardSet.slug === cardSetSlug);
  const currentCardSetCards = currentCardSet?.cards;

  return (
    <div style={{ color: "#000", marginTop: "40px", textAlign: "center" }}>
      <p>Manage deck</p>
      <CardRow type="close">
        {currentCardSetCards &&
          currentCardSetCards.map((card) => <Card location="hand" key={card._id} card={card} />)}
      </CardRow>
    </div>
  );
};
