import { FC } from "react";

import {
  AdminPanelCardStyled,
  PointsStyled,
  PropertiesStyled,
  TitleStyled,
  TypeStyled
} from "./styled";

import { CardWrapperProps } from "src/types";

export const AdminPanelCard: FC<CardWrapperProps> = ({ card, onClick }) => {
  const { name, type, points } = card;

  return (
    <AdminPanelCardStyled onClick={onClick}>
      <PropertiesStyled>
        <TitleStyled>{name}</TitleStyled>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <PointsStyled>
            <span>{points}</span> points
          </PointsStyled>
          <TypeStyled>
            <span>{type}</span> unit
          </TypeStyled>
        </div>
      </PropertiesStyled>
    </AdminPanelCardStyled>
  );
};
