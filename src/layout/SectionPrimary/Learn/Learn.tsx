import { BsFillLightningChargeFill as LightningIcon } from "react-icons/bs";
import { Link } from "react-router-dom";

import { LearnButtonStyled, LearnDescriptionStyled, LearnStyled, LearnTitleStyled } from "./styled";

export const Learn = () => {
  return (
    <LearnStyled>
      <LearnTitleStyled>Train</LearnTitleStyled>
      <LearnDescriptionStyled>
        Discover your skill level by starting with easy bots. <br />
        Master the game and challenge the veterans!
      </LearnDescriptionStyled>
      <Link to="/pick-set">
        <LearnButtonStyled hasIcon="onLeft" icon={LightningIcon}>
          Choose your card set
        </LearnButtonStyled>
      </Link>
    </LearnStyled>
  );
};
