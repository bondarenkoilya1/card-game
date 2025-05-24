import { Outlet } from "react-router-dom";

import { Global } from "@emotion/react";

import { AdminPanelStyled, AdminPanelTitleStyled } from "./styled";
import { GlobalStyle } from "src/styled.ts";

import { NAVIGATION_ITEMS } from "src/constants";

import { Sidebar } from "src/components";

export const AdminPanel = () => {
  return (
    <>
      <Sidebar title="Card game" components={NAVIGATION_ITEMS.adminPanel} />
      <AdminPanelStyled>
        <AdminPanelTitleStyled>Admin panel</AdminPanelTitleStyled>
      </AdminPanelStyled>
      {/**/}
      <Global styles={GlobalStyle} />
      <Outlet />
    </>
  );
};
