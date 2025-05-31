import styled from "@emotion/styled";

export const AdminPanelCardStyled = styled.li`
  max-width: 100%;
  border-radius: 6px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
`;

export const AdminPanelCardPropertiesStyled = styled.ul``;

export const AdminPanelCardTitleStyled = styled.h3`
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

export const AdminPanelCardPointsStyled = styled.li`
  & > span {
    font-weight: 700;
  }
`;

export const AdminPanelCardTypeStyled = styled.li`
  & > span {
    text-transform: capitalize;
    font-weight: 700;
  }
`;
