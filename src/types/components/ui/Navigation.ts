import { SidebarSectionProps } from "src/types";

export type NavigationItemProps = {
  title: string;
  url: string;
};

export type SidebarNavigationProps = Record<string, SidebarSectionProps[]>;
