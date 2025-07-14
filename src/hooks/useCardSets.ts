import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { transferMinutesToMs } from "src/utils";

import { fetchCardSets } from "src/api";

export const useCardSets = () => {
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
