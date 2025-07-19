import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useRedirect = (condition: boolean, redirectUrl: string, warning?: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (condition) {
      if (warning) toast.warning(warning);
      navigate(redirectUrl);
    }
  }, [condition, redirectUrl]);
};
