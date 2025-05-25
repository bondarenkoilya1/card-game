import { SectionPrimaryStyled } from "./styled";

import { Dominate } from "./Dominate";
import { Learn } from "./Learn";

export const SectionPrimary = () => {
  return (
    <SectionPrimaryStyled>
      <Learn />
      <Dominate />
    </SectionPrimaryStyled>
  );
};
