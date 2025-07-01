import { useEffect } from "react";

import { PickSetStyled, TitleStyled } from "./styled";
import { ContainerStyled } from "src/styled";

import { CardSetOptionsList } from "src/components";

import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

export const PickSet = () => {
  const { cardSets } = useCardSetsStore();
  const { fetchCardSets } = useCardSetHTTPMethod();

  useEffect(() => {
    fetchCardSets();
  }, []);

  return (
    <PickSetStyled>
      <ContainerStyled>
        <TitleStyled>Pick your set</TitleStyled>
        <CardSetOptionsList cardSets={cardSets} />
      </ContainerStyled>
    </PickSetStyled>
  );
};
