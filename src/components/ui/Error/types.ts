export type ErrorCodes = "404";

export type ErrorProps = {
  errorCode?: ErrorCodes;
  unspecifiedErrorMessage?: string;
};

export type UnspecifiedErrorProps = {
  errorMessage?: string;
};
