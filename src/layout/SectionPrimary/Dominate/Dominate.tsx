import { ContainerStyled, DescriptionStyled, DominateStyled, TitleStyled } from "./styled";

export const Dominate = () => {
  return (
    <DominateStyled>
      <ContainerStyled>
        <TitleStyled>Dominate</TitleStyled>
        <DescriptionStyled>
          Face the strongest. <br />
          Try to stay in the top 10 for at least two days!
        </DescriptionStyled>
      </ContainerStyled>
    </DominateStyled>
  );
};
