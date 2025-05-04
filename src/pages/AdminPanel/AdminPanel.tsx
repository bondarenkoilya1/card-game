import { useEffect } from "react";

import {
  AdminPanelButtonStyles,
  AdminPanelCardSetsStyled,
  AdminPanelErrorStyled,
  AdminPanelStyled,
  AdminPanelTitleStyled
} from "./styled";
import styled from "@emotion/styled";

import { Button } from "src/components";
import { CardSet } from "src/components/CardSet";

import { CardSetNameProp, CardSetProps, CardSets } from "src/types";

import { validateError } from "src/utils";

import { fetchItem } from "src/api";

import { useCardSetsStore } from "src/store";

// In future this will be brought out to different components

type ErrorFromServerProps = {
  message: string;
};

const AdminPanelButtonStyled = styled(Button)(AdminPanelButtonStyles);

export const AdminPanel = () => {
  const { cardSets, isLoading, error, setCardSets, setIsLoading, setError } = useCardSetsStore();

  /* JOIN SOMEHOW. MAYBE HOOK */
  const fetchCardSets = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // (JSON.stringify(prev) === JSON.stringify(sets) ? prev : sets));
      const sets: CardSets = await fetchItem<CardSets>("/card-sets");
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
      await fetchItem<ErrorFromServerProps>(`/card-sets/${cardSetId}`, options);
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
    // maybe create separate functions to update each item (set, its data)
    if (nameOfItemToUpdate === "cardSetName") {
      setIsLoading(true);
      setError(null);

      // When I press cancel in my prompt window it doesn't work as expected
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
        // If it has completed, I should show its response as a notification to the user
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
  // When I use PATCH it should ensure that the data matches the model and types. If invalid - reject
  // Card Set Patch: This method should only update card set name. Abandon updating cards[] to prevent an erasing data
  // Create a new method to change data for a single specific card

  /* JOIN SOMEHOW. MAYBE HOOK */

  useEffect(() => {
    fetchCardSets();
  }, []);

  const renderError = (error: string | null) =>
    error && <AdminPanelErrorStyled>Error occurred. {error}</AdminPanelErrorStyled>;

  return (
    <AdminPanelStyled>
      <AdminPanelTitleStyled>Admin panel</AdminPanelTitleStyled>
      <AdminPanelButtonStyled onClick={fetchCardSets}>Update</AdminPanelButtonStyled>
      {renderError(error)}
      {isLoading ? (
        "Loading..."
      ) : (
        <AdminPanelCardSetsStyled>
          {cardSets &&
            cardSets.map((set: CardSetProps) => (
              <CardSet
                set={set}
                deleteCardSet={deleteCardSet}
                updateCardSet={updateCardSet}
                key={set._id}
              />
            ))}
        </AdminPanelCardSetsStyled>
      )}
    </AdminPanelStyled>
  );
};
