import { FC } from "react";

import {
  AdminPanelCardPointsStyled,
  AdminPanelCardPropertiesStyled,
  AdminPanelCardStyled,
  AdminPanelCardTitleStyled,
  AdminPanelCardTypeStyled
} from "./styled";

import { CardWrapperProps } from "src/types";

export const AdminPanelCard: FC<CardWrapperProps> = ({ card, onClick }) => {
  const { name, type, points } = card;

  return (
    <AdminPanelCardStyled onClick={onClick}>
      <AdminPanelCardPropertiesStyled>
        <AdminPanelCardTitleStyled>{name}</AdminPanelCardTitleStyled>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <AdminPanelCardPointsStyled>
            <span>{points}</span> points
          </AdminPanelCardPointsStyled>
          <AdminPanelCardTypeStyled>
            <span>{type}</span> unit
          </AdminPanelCardTypeStyled>
        </div>
      </AdminPanelCardPropertiesStyled>
    </AdminPanelCardStyled>
  );
};
