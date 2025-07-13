import { PickSetStyled, TitleStyled } from "./styled";
import { ContainerStyled } from "src/styled";

import { CardSetOptionList, ErrorComponent } from "src/components";

import { useCardSets } from "src/hooks";

export const PickSet = () => {
  const { cardSets, isLoading, isError, error } = useCardSets();

  if (isLoading) return <p>Loading</p>;

  return (
    <PickSetStyled>
      <ContainerStyled>
        <TitleStyled>Pick your set</TitleStyled>
        {isError && <ErrorComponent unspecifiedErrorMessage={error?.message} />}
        <CardSetOptionList cardSets={cardSets ?? []} />
      </ContainerStyled>
    </PickSetStyled>
  );
};
