import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { transferMinutesToMs } from "src/utils";

import { useCardSetHTTPMethod } from "./useCardSetHTTPMethod";

export const useCardSets = () => {
  const { fetchCardSets } = useCardSetHTTPMethod();

  const {
    data: cardSets,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["cardSets"],
    queryFn: fetchCardSets,
    staleTime: transferMinutesToMs(3),
    placeholderData: keepPreviousData
  });

  return { cardSets, isLoading, isError, error };
};
