import styled from "@emotion/styled";

import oldManPhoto from "../../../assets/photos/sectionPrimary/old-man.webp";

export const DominateStyled = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  padding-top: 100px;
  background: url(${oldManPhoto}) no-repeat center left -450px;
  background-size: contain;
  background-color: #000;
`;

export const ContainerStyled = styled.div`
  margin-left: 150px;
`;

export const TitleStyled = styled.h2`
  color: ${({ theme }) => theme.colors.red["400"]};
  font-size: 102px;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
`;

export const DescriptionStyled = styled.p`
  color: #c0c0c0;
  font-size: 24px;
  text-align: center;
  margin: 20px auto 0 auto;
`;
