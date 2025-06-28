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

  // TODO: Currently useless, but maybe useful later
  // const saveSelectedSetToLocalStorage = (event: React.MouseEvent<HTMLElement>) => {
  //   const cardSetName = event.currentTarget.getAttribute("cardsetname");
  //
  //   if (!cardSetName) {
  //     throw new Error("Attribute 'cardsetname' was not found on clicked element.");
  //   }
  //
  //   localStorage.setItem("selectedCardSet", cardSetName);
  // };

  return (
    <div style={{ color: "#000", marginTop: "40px" }}>
      <ContainerStyled>
        <h1 style={{ textAlign: "center" }}>Pick your set</h1>
        <CardSetOptionsList cardSets={cardSets} />
      </ContainerStyled>
    </div>
  );
};
