import styled from "@emotion/styled";

export const SidebarStyled = styled.aside`
  width: 25%;
  height: 100vh;
  background-color: #b7b0b0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  color: #000;
  padding: 60px 30px 30px 30px;
`;

export const SidebarTitleStyled = styled.h2`
  font-size: 48px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
`;

export const SidebarListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const SidebarSectionStyled = styled.li``;

export const SidebarSectionTitleStyled = styled.h4`
  font-size: 18px;
  border-bottom: 1px solid #605a5a;
  padding-bottom: 4px;
`;

export const SidebarInternalListStyled = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SidebarInternalListItemStyled = styled.li`
  margin-top: 10px;
`;
