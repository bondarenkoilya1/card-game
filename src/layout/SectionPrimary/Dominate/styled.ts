import styled from "@emotion/styled";

import oldManPhoto from "../../../assets/photos/sectionPrimary/old-man.png";

export const DominateStyled = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;
  padding-top: 100px;
  background: url(${oldManPhoto}) no-repeat center left -450px;
  background-size: contain;
  background-color: #000;
`;

export const DominateContainerStyled = styled.div`
  margin-left: 150px;
`;

export const DominateTitleStyled = styled.h2`
  color: ${({ theme }) => theme.colors.red["400"]};
  font-size: 102px;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
`;

export const DominateDescriptionStyled = styled.p`
  color: #c0c0c0;
  font-size: 24px;
  text-align: center;
  margin: 20px auto 0 auto;
`;
