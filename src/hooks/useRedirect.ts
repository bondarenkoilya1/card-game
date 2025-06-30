import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirect = (condition: boolean, redirectUrl: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (condition) navigate(redirectUrl);
  }, [condition, redirectUrl]);
};
