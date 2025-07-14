import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import {
  InternalListItemStyled,
  InternalListStyled,
  ListStyled,
  SectionStyled,
  SectionTitleStyled,
  SidebarStyled,
  TitleStyled
} from "./styled";

import { NavigationItemProps, NavigationSectionProps } from "src/types";

import { SidebarProps } from "./types";

export const Sidebar: FC<SidebarProps> = ({ title, components }) => {
  return (
    <SidebarStyled>
      {/* todo: temporarily here */}
      <Link to="/" style={{ textAlign: "center" }}>
        [back home]
      </Link>
      <TitleStyled>{title}</TitleStyled>
      <ListStyled>
        {components &&
          components.map((section: NavigationSectionProps) => (
            <SectionStyled key={uuidv4()}>
              <SectionTitleStyled>{section.title}</SectionTitleStyled>
              <InternalListStyled>
                {section.items.map((item: NavigationItemProps) => (
                  <InternalListItemStyled key={uuidv4()}>
                    <NavLink to={item.url} key={uuidv4()}>
                      {item.title}
                    </NavLink>
                  </InternalListItemStyled>
                ))}
              </InternalListStyled>
            </SectionStyled>
          ))}
      </ListStyled>
    </SidebarStyled>
  );
};
