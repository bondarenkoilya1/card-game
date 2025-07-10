import styled from "@emotion/styled";

export const AdminPanelStyled = styled.section`
  color: #000;
  padding-top: 20px;
  margin-left: ${({ theme }) => theme.elementsSizes.sidebarWidth}%;
`;

export const TitleStyled = styled.h1`
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid lightgray;
  width: 500px;
  padding-bottom: 6px;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const ContainerStyled = styled.div`
  max-width: 95%;
  margin: 0 auto;
`;
