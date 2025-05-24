export type SidebarItemProps = {
  title: string;
  url: string;
};

export type SidebarSectionProps = {
  title: string;
  items: SidebarItemProps[];
};

export type SidebarProps = {
  title: string;
  components?: SidebarSectionProps[];
};
