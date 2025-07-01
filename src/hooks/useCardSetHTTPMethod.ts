import { CardSetNameProp, CardSetsType, ServerErrorProps } from "src/types";

import { validateError } from "src/utils";

import { fetchItem } from "src/api";

import { useCardSetsStore } from "src/store";

export const useCardSetHTTPMethod = () => {
  const { setCardSets, setIsLoading, setError } = useCardSetsStore();

  const fetchCardSets = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const sets = await fetchItem<CardSetsType>("/card-sets");
      setCardSets(sets);
    } catch (error) {
      const errorMessage = validateError(error);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCardSet = async (cardSetId: string) => {
    setIsLoading(true);
    setError(null);

    const options = {
      method: "DELETE"
    };

    try {
      await fetchItem<ServerErrorProps>(`/card-sets/${cardSetId}`, options);
      await fetchCardSets();
    } catch (error) {
      const errorMessage = validateError(error);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCardSet = async (
    cardId: string,
    nameOfItemToUpdate: "cardSetName" | "cardData",
    newCardSetName?: string | undefined
  ) => {
    // TODO: maybe create separate functions to update each item (set, its data)
    if (nameOfItemToUpdate === "cardSetName") {
      setIsLoading(true);
      setError(null);

      if (newCardSetName === null || newCardSetName?.trim() === "") {
        const errorMessage = "You didn't enter any card set name. It will remain as it was";
        setError(errorMessage);
        setIsLoading(false);
        return;
      }

      if (newCardSetName && newCardSetName.length > 30) {
        const errorMessage =
          "Card set name shouldn't be so long. Try something less than 30 characters";
        setError(errorMessage);
        setIsLoading(false);
        return;
      }

      const requestHeaders = new Headers();
      requestHeaders.set("Content-Type", "application/json");

      const requestOptions = {
        headers: requestHeaders,
        method: "PATCH",
        body: JSON.stringify({ cardSetName: newCardSetName })
      };

      try {
        // TODO: If it has completed, I should show its response as a notification to the user
        await fetchItem<CardSetNameProp>(`/card-sets/${cardId}`, requestOptions);
        await fetchCardSets();
      } catch (error) {
        const errorMessage = validateError(error);
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }

      return;
    }
  };
  /* TODO: When I use PATCH it should ensure that the data matches the model and types. If invalid - reject
     Card Set Patch: This method should only update card set name. Abandon updating cards[] to prevent an erasing data
     Create a new method to change data for a single specific card */

  return { fetchCardSets, deleteCardSet, updateCardSet };
};
