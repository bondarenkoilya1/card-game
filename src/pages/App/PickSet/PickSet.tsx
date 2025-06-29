import { useEffect } from "react";

import { ContainerStyled } from "src/styled";

import { CardSetOptionsList } from "src/components";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

// TODO: Create SectionPickSet
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
        <CardSetOptionsList cardSets={cardSets} />
      </ContainerStyled>
    </div>
  );
};
