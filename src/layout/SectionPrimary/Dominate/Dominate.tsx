import {
  DominateContainerStyled,
  DominateDescriptionStyled,
  DominateStyled,
  DominateTitleStyled
} from "./styled";

export const Dominate = () => {
  return (
    <DominateStyled>
      <DominateContainerStyled>
        <DominateTitleStyled>Dominate</DominateTitleStyled>
        <DominateDescriptionStyled>
          Face the strongest. <br />
          Try to stay in the top 10 for at least two days!
        </DominateDescriptionStyled>
      </DominateContainerStyled>
    </DominateStyled>
  );
};
