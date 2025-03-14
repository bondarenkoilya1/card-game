import styled from "@emotion/styled";

export const HandCardStyled = styled.li`
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 12px;
  padding: 4px;
  width: 75px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  user-select: none;
  cursor: pointer;
`;

export const HandCardNameStyled = styled.h3`
  font-weight: 400;
  font-size: 12px;
  color: #000;
`;

export const HandCardDescriptionStyled = styled.p`
  color: darkred;
`;

export const HandCardTypeStyled = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const HandCardPointsStyled = styled.p`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const HandCardTextHighlighted = styled.span`
  font-weight: 600;
  color: darkred;
`;
