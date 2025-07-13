import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { PickSetStyled, TitleStyled } from "./styled";
import { ContainerStyled } from "src/styled";

import { CardSetOptionList } from "src/components";
import { Error } from "src/components";

import { useCardSetHTTPMethod } from "src/hooks";

export const PickSet = () => {
  const { fetchCardSets } = useCardSetHTTPMethod();

  useEffect(() => {
    fetchCardSets();
  }, []);

  const {
    data: cardSets,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["cardSets"],
    queryFn: fetchCardSets,
    staleTime: 1000 * 60 * 3
  });

  if (isLoading) return <p>Loading</p>;

  return (
    <PickSetStyled>
      <ContainerStyled>
        <TitleStyled>Pick your set</TitleStyled>
        {isError && <Error unspecifiedErrorMessage={error.message} />}
        <CardSetOptionList cardSets={cardSets ?? []} />
      </ContainerStyled>
    </PickSetStyled>
  );
};
