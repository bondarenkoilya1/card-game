import { FC } from "react";

import { ErrorProps } from "src/types";

import { UnspecifiedError } from "./UnspecifiedError";

export const Error: FC<ErrorProps> = ({ errorCode, unspecifiedErrorMessage }) => {
  switch (errorCode) {
    // case "404":
    //   return <></>;
    default:
      return <UnspecifiedError errorMessage={unspecifiedErrorMessage} />;
  }
};
