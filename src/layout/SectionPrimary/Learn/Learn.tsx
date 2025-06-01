import { BsFillLightningChargeFill as LightningIcon } from "react-icons/bs";
import { Link } from "react-router-dom";

import { LearnButtonStyles, LearnDescriptionStyled, LearnStyled, LearnTitleStyled } from "./styled";
import styled from "@emotion/styled";

import { Button } from "src/components";

// TODO: Transfer this to styled file
const ButtonStyled = styled(Button)(LearnButtonStyles);

export const Learn = () => {
  return (
    <LearnStyled>
      <LearnTitleStyled>Train</LearnTitleStyled>
      <LearnDescriptionStyled>
        Discover your skill level by starting with easy bots. <br />
        Master the game and challenge the veterans!
      </LearnDescriptionStyled>
      {/*url is temporarily changed*/}
      <Link to="/admin-panel">
        <ButtonStyled hasIcon="onLeft" icon={LightningIcon}>
          Choose your card set
        </ButtonStyled>
      </Link>
    </LearnStyled>
  );
};
