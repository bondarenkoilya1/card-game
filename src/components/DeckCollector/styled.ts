import styled from "@emotion/styled";

import { Button } from "src/components";

export const DeckCollectorStyled = styled.div`
  padding: 20px;
  width: 360px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 12px;
`;

export const TitleStyled = styled.h5`
  font-weight: 700;
  text-transform: uppercase;
`;

export const TextStyled = styled.p`
  margin-top: 20px;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 20px;
  width: 100%;
`;
