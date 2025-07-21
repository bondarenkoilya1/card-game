import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  padding: 20px 0;
  color: #000;
  background-color: #fff;
  //  todo: temporarily
  width: 300px;
  margin: 0 auto;
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  position: absolute;
  z-index: 10;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 16px 16px;
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
