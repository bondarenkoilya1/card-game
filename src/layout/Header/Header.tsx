import { v4 as uuidv4 } from "uuid";

import { HeaderStyled, ListItemStyled, ListLinkStyled, ListStyled, NavStyled } from "./styled";

import { NAVIGATION_ITEMS } from "src/constants";

import { BackToGameDialog } from "src/components/BackToGameDialog";

export const Header = () => {
  return (
    <HeaderStyled>
      <NavStyled>
        <ListStyled>
          {NAVIGATION_ITEMS &&
            NAVIGATION_ITEMS.map(({ title, url }) => (
              <ListItemStyled key={uuidv4()}>
                <ListLinkStyled to={url}>{title}</ListLinkStyled>
              </ListItemStyled>
            ))}
        </ListStyled>
      </NavStyled>
      {/* only if the game is started and page is not game */}
      <BackToGameDialog />
    </HeaderStyled>
  );
};
