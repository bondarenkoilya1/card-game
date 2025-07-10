import styled from "@emotion/styled";

export const AdminPanelCardStyled = styled.li`
  max-width: 100%;
  border-radius: 6px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
`;

export const PropertiesStyled = styled.ul``;

export const TitleStyled = styled.h3`
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

export const PointsStyled = styled.li`
  & > span {
    font-weight: 700;
  }
`;

export const TypeStyled = styled.li`
  & > span {
    text-transform: capitalize;
    font-weight: 700;
  }
`;
