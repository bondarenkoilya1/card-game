import { Outlet } from "react-router-dom";

import { Global } from "@emotion/react";

import { AdminPanelStyled, ContainerStyled, TitleStyled } from "./styled";
import { GlobalStyle } from "src/styled";

import { SIDEBAR_NAVIGATION_ITEMS } from "src/constants";

import { Sidebar } from "src/components";

export const AdminPanel = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      {/**/}
      <Sidebar title="Card game" components={SIDEBAR_NAVIGATION_ITEMS.adminPanel} />
      <AdminPanelStyled>
        <ContainerStyled>
          <TitleStyled>Admin panel</TitleStyled>
          <Outlet />
        </ContainerStyled>
      </AdminPanelStyled>
    </>
  );
};
