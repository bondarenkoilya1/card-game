import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  padding: 20px 0;
  color: #000;
  border-bottom: 1px solid #000;
  background-color: #e3f3ff;
`;

export const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListItemStyled = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const ListLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;

  &.active {
    color: crimson;
  }
`;
