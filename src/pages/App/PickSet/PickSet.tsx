import { useEffect } from "react";
import { Link } from "react-router-dom";

import { ContainerStyled } from "src/styled";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

// TODO: Transfer it to a separate component
export const PickSet = () => {
  const { cardSets } = useCardSetsStore();
  const { fetchCardSets } = useCardSetHTTPMethod();

  useEffect(() => {
    fetchCardSets();
  }, []);

  return (
    <div style={{ color: "#000", marginTop: "40px" }}>
      <ContainerStyled>
        <h1 style={{ textAlign: "center" }}>Pick your set</h1>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "40px",
            justifyContent: "center"
          }}>
          {cardSets &&
            cardSets.map((cardSet) => (
              <li key={cardSet.cardSetName}>
                <Link
                  to={cardSet.slug}
                  style={{
                    padding: "20px",
                    backgroundColor: "#9de2ec",
                    borderRadius: "4px"
                  }}>
                  {cardSet.cardSetName}
                </Link>
              </li>
            ))}
        </ul>
      </ContainerStyled>
    </div>
  );
};
