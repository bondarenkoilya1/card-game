import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Card, CardRow } from "src/components";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

export const ManageDeck = () => {
  const { cardSetSlug } = useParams();
  const { cardSets, setSelectedCardSetName } = useCardSetsStore();
  const { fetchCardSets } = useCardSetHTTPMethod();

  useEffect(() => {
    fetchCardSets();
  }, []);

  const currentCardSet = cardSets.find((cardSet) => cardSet.slug === cardSetSlug);
  const currentCardSetCards = currentCardSet?.cards;

  // TODO: Maybe rename
  const saveSelectedCardSetName = () => {
    if (currentCardSet) {
      setSelectedCardSetName(currentCardSet.cardSetName);
    }
  };

  return (
    <div style={{ color: "#000", marginTop: "40px", textAlign: "center" }}>
      <p>Manage deck</p>
      <CardRow type="close">
        {currentCardSetCards &&
          currentCardSetCards.map((card) => <Card location="hand" key={card._id} card={card} />)}
      </CardRow>
      <Link style={{ margin: "20px auto 0 auto" }} to="/play" onClick={saveSelectedCardSetName}>
        Play with this card set
      </Link>
    </div>
  );
};
