import { Theme } from "@emotion/react";

/* These names, like "blue" and "red" are temporary.
   In case a dark theme is needed, these names will be changed. */
export const defaultTheme: Theme = {
  colors: {
    blue: {
      400: "#146ee4"
    },
    red: {
      400: "#f21e1e",
      700: "#d62121"
    }
  },
  elementsSizes: {
    sidebarWidth: 20,
    sidebarHeight: 100
  }
};
