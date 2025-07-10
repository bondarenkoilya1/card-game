import { css } from "@emotion/react";

import styled from "@emotion/styled";

import { CardLocation } from "src/types";

// Used only for Deck and Board cards because they're quite similar
export const CardStyled = styled.li<{ location: CardLocation }>`
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

  ${({ location }) => location === "deck" && DeckCardStyles}
`;

const DeckCardStyles = css`
  width: 200px;
  height: 300px;
`;

export const NameStyled = styled.h3`
  font-weight: 400;
  font-size: 12px;
  color: #000;
`;

export const DescriptionStyled = styled.p`
  color: darkred;
`;

export const TypeStyled = styled.p`
  position: absolute;

  bottom: 10px;
  left: 10px;
`;

export const PointsStyled = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const HighlightedTextStyled = styled.span`
  font-weight: 600;
  color: darkred;
`;
