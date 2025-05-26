import "@emotion/react";
declare module "@emotion/react" {
  export interface Theme {
    colors: {
      blue: {
        400: string;
      };
      red: {
        400: string;
        700: string;
      };
    };
    elementsSizes: {
      sidebarWidth: number;
      sidebarHeight: number;
    };
  }
}
