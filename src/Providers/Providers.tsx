import { RouterProvider } from "react-router-dom";
import { ToastContainer, ToastContainerProps } from "react-toastify";

import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { router } from "src/router";

import { defaultTheme } from "src/themes";

const queryClient = new QueryClient();

const toastContainerOptions: ToastContainerProps = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  newestOnTop: true
};

export const Providers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer {...toastContainerOptions} />
      <ReactQueryDevtools />
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
