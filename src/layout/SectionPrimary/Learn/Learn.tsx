import { Link } from "react-router-dom";

import { ButtonStyled, DescriptionStyled, LearnStyled, TitleStyled } from "./styled";

export const Learn = () => {
  return (
    <LearnStyled>
      <TitleStyled>Train</TitleStyled>
      <DescriptionStyled>
        Discover your skill level by starting with easy bots. <br />
        Master the game and challenge the veterans!
      </DescriptionStyled>
      <Link to="/pick-set">
        <ButtonStyled>Choose your card set</ButtonStyled>
      </Link>
    </LearnStyled>
  );
};
