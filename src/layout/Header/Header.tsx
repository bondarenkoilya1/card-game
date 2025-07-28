import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { HeaderStyled, ListItemStyled, ListLinkStyled, ListStyled, NavStyled } from "./styled";

import { NAVIGATION_ITEMS } from "src/constants";

import { BackToGameDialog } from "src/components";

export const Header = () => {
  // Kinda temporarily decision with location, but it seems to work well
  // TODO: The only problem is I see this dialog for a second on game start
  const location = useLocation();

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
      {location.pathname !== "/play" && <BackToGameDialog />}
    </HeaderStyled>
  );
};
