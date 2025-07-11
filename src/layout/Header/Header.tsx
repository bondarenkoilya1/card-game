import { v4 as uuidv4 } from "uuid";

import { HeaderStyled, ListItemStyled, ListLinkStyled, ListStyled } from "./styled";

import { NAVIGATION_ITEMS } from "src/constants";

export const Header = () => {
  return (
    <HeaderStyled>
      <nav>
        <ListStyled>
          {NAVIGATION_ITEMS &&
            NAVIGATION_ITEMS.map(({ title, url }) => (
              <ListItemStyled key={uuidv4()}>
                <ListLinkStyled to={url}>{title}</ListLinkStyled>
              </ListItemStyled>
            ))}
        </ListStyled>
      </nav>
    </HeaderStyled>
  );
};
