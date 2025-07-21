import { PickSetStyled, TitleStyled } from "./styled";
import { ContainerStyled } from "src/styled";

import { CardSetOptionList, ErrorComponent } from "src/components";

import { useCardSets } from "src/hooks";

export const PickSet = () => {
  const { cardSets, isLoading, isError, error } = useCardSets();

  return (
    <PickSetStyled>
      <ContainerStyled>
        {isLoading && (
          <p>
            Loading... (The DataBase may be sleeping. Please, wait for 5 seconds and try to reload
            your page)
          </p>
        )}
        <TitleStyled>Pick your set</TitleStyled>
        {isError && <ErrorComponent unspecifiedErrorMessage={error?.message} />}
        <CardSetOptionList cardSets={cardSets ?? []} />
      </ContainerStyled>
    </PickSetStyled>
  );
};
