import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { router } from "src/router";

import { defaultTheme } from "src/themes";

const queryClient = new QueryClient();

export const Providers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
