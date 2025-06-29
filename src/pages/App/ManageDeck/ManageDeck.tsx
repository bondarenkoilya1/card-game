import { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Card, CardRow } from "src/components";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod, useCardSetup } from "src/hooks";

export const ManageDeck = () => {
  const { cardSetSlug } = useParams();
  const { cardSets, setSelectedCardSetName } = useCardSetsStore();
  const { fetchCardSets } = useCardSetHTTPMethod();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCardSets();
  }, []);

  const currentCardSet = useMemo(
    () => cardSets.find((cardSet) => cardSet.slug === cardSetSlug) || null,
    [cardSets, cardSetSlug]
  );

  useEffect(() => {
    if (!currentCardSet) {
      navigate("/pick-set");
    }
  }, [currentCardSet]);

  // To prevent execution of code below this statement
  if (!currentCardSet) {
    return null;
  }

  const { initialCards, cardsInDeck, addCardToDeck, removeCardFromDeck } = useCardSetup(
    currentCardSet?.cards ?? []
  );

  const saveSelectedCardSetName = () => {
    if (currentCardSet) {
      setSelectedCardSetName(currentCardSet.cardSetName);
    }
  };

  return (
    <div style={{ color: "#000", marginTop: "40px", textAlign: "center" }}>
      <p>Manage deck</p>
      <CardRow type="close">
        {initialCards &&
          initialCards.map((card) => (
            <Card
              location="hand"
              key={card._id}
              card={card}
              onClick={() => {
                addCardToDeck(card);
              }}
            />
          ))}
      </CardRow>
      <CardRow type="close">
        {cardsInDeck &&
          cardsInDeck.map((card) => (
            <Card
              location="hand"
              key={card._id}
              card={card}
              onClick={() => {
                removeCardFromDeck(card._id);
              }}
            />
          ))}
      </CardRow>
      <Link style={{ margin: "20px auto 0 auto" }} to="/play" onClick={saveSelectedCardSetName}>
        Play with this card set
      </Link>
    </div>
  );
};
