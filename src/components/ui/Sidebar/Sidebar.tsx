import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { SidebarProps, SidebarSectionProps } from "src/types";

export const Sidebar: FC<SidebarProps> = ({ title, components }) => {
  return (
    <div
      style={{
        // todo: create a special variable for sidebar width
        width: "25%",
        height: "100vh",
        backgroundColor: "#b7b0b0",
        position: "fixed",
        left: "0",
        top: "0",
        display: "flex",
        flexDirection: "column"
      }}>
      <h1 style={{ color: "#000", fontSize: "18px" }}>{title}</h1>
      {components &&
        components.map((section: SidebarSectionProps) => <li key={uuidv4()}>{section.title}</li>)}
    </div>
  );
};
