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
            cardSets.map(({ cardSetName }) => {
              const currentSetUrl = cardSetName.split(" ").join("-").toLowerCase();

              return (
                <li key={cardSetName}>
                  <Link
                    to={currentSetUrl}
                    style={{
                      padding: "20px",
                      backgroundColor: "#9de2ec",
                      borderRadius: "4px"
                    }}>
                    {cardSetName}
                  </Link>
                </li>
              );
            })}
        </ul>
      </ContainerStyled>
    </div>
  );
};
