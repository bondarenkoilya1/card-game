import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import {
  SidebarInternalListItemStyled,
  SidebarInternalListStyled,
  SidebarListStyled,
  SidebarSectionStyled,
  SidebarSectionTitleStyled,
  SidebarStyled,
  SidebarTitleStyled
} from "src/components/ui/Sidebar/styled";

import { SidebarItemProps, SidebarProps, SidebarSectionProps } from "src/types";

export const Sidebar: FC<SidebarProps> = ({ title, components }) => {
  return (
    <SidebarStyled>
      {/* todo: temporarily here */}
      <Link to="/" style={{ textAlign: "center" }}>
        [back home]
      </Link>
      <SidebarTitleStyled>{title}</SidebarTitleStyled>
      <SidebarListStyled>
        {components &&
          components.map((section: SidebarSectionProps) => (
            <SidebarSectionStyled key={uuidv4()}>
              <SidebarSectionTitleStyled>{section.title}</SidebarSectionTitleStyled>
              <SidebarInternalListStyled>
                {section.items.map((item: SidebarItemProps) => (
                  <SidebarInternalListItemStyled key={uuidv4()}>
                    <NavLink to={item.url} key={uuidv4()}>
                      {item.title}
                    </NavLink>
                  </SidebarInternalListItemStyled>
                ))}
              </SidebarInternalListStyled>
            </SidebarSectionStyled>
          ))}
      </SidebarListStyled>
    </SidebarStyled>
  );
};
