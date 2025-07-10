import { css } from "@emotion/react";

import styled from "@emotion/styled";

export const UploadCardSetFormStyled = styled.form``;

export const ContainerStyled = styled.div`
  border: 2px solid #4b6ef5;
  border-radius: 12px;
  width: 22%;
  overflow: hidden;
`;

export const MainBlockStyled = styled.div`
  padding: 20px;
`;

export const AdditionalBlockStyled = styled.div`
  margin-top: 20px;
  width: 100%;
  background-color: rgba(75, 110, 245, 0.25);
  padding: 20px;
`;

export const TitleStyled = styled.form`
  font-size: 24px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px 20px 0 20px;
`;

export const TextStyled = styled.p`
  font-size: 18px;
`;

export const OptionBlockStyled = styled.div`
  background-color: #fdfdfd;
  border: 2px solid #4b6ef5;
  border-radius: 12px;
  padding: 20px;
  color: #333;
  margin-top: 20px;
  text-align: center;
`;

export const ButtonStyles = css`
  background-color: #5c7aff;
  color: #fff;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1.2px;
  border: 0;
  width: 100%;
  padding: 12px 0;
  border-radius: 0;
`;

export const BlockWithMarginTopStyled = styled.div<{ marginTop: number }>`
  margin-top: ${({ marginTop }) => `${marginTop}px`};
`;
