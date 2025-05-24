import { AdminPanelStyled, AdminPanelTitleStyled } from "./styled";

import { ManageCardSet } from "./ManageCardSet";
import { UploadCardSet } from "./UploadCardSet";

export const AdminPanel = () => {
  return (
    <AdminPanelStyled>
      <AdminPanelTitleStyled>Admin panel</AdminPanelTitleStyled>
      <UploadCardSet />
      <ManageCardSet />
    </AdminPanelStyled>
  );
};
