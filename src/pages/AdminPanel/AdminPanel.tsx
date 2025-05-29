import { Outlet } from "react-router-dom";

import { Global } from "@emotion/react";

import { AdminPanelContainerStyled, AdminPanelStyled, AdminPanelTitleStyled } from "./styled";
import { GlobalStyle } from "src/styled";

import { NAVIGATION_ITEMS } from "src/constants";

import { Sidebar } from "src/components";

export const AdminPanel = () => {
  return (
    <>
      <Global styles={GlobalStyle} />
      {/**/}
      <Sidebar title="Card game" components={NAVIGATION_ITEMS.adminPanel} />
      <AdminPanelStyled>
        <AdminPanelTitleStyled>Admin panel</AdminPanelTitleStyled>
        <AdminPanelContainerStyled>
          <Outlet />
        </AdminPanelContainerStyled>
      </AdminPanelStyled>
    </>
  );
};
