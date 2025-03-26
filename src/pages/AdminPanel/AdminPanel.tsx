import { useEffect, useState } from "react";

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

// In future this will be brought out to different components

type ErrorFromServerProps = {
  message: string;
};

const AdminPanelButtonStyled = styled(Button)(AdminPanelButtonStyles);

export const AdminPanel = () => {
  const [cardSets, setCardSets] = useState<CardSets>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* JOIN SOMEHOW. MAYBE HOOK */
  const fetchCardSets = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const sets: CardSets = await fetchItem<CardSets>("/card-sets");
      setCardSets((prev) => (JSON.stringify(prev) === JSON.stringify(sets) ? prev : sets));
    } catch (error) {
      validateError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCardSet = async (cardSetId: string) => {
    setError(null);

    const options = {
      method: "DELETE"
    };

    try {
      await fetchItem<ErrorFromServerProps>(`/card-set/${cardSetId}`, options);
      await fetchCardSets();
    } catch (error) {
      validateError(error);
    }
  };

  const updateCardSet = async (
    cardId: string,
    nameOfItemToUpdate: "cardSetName" | "cardData",
    newCardSetName?: string | undefined
  ) => {
    if (nameOfItemToUpdate === "cardSetName") {
      if (newCardSetName && newCardSetName.length > 30) {
        console.error("Card set name shouldn't be so long");
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
        console.log(cardId);
        const response = await fetchItem<CardSetNameProp>(`/card-set/${cardId}`, requestOptions);
        console.log(response);
        await fetchCardSets();
      } catch (error) {
        validateError(error);
      }

      return;
    }
  };
  /* TODO/ IN GENERAL: FIRSTLY, WHEN PATCH IT SHOULD CHECK BY MODEL MY TYPES AND REQUEST IF I'M WRONG. THEN I HAVE PATCH METHOD FOR CARD SET IT WILL BE FOR
  TODO/ CHANGING NAME OF CARD SET. I SHOULD ABANDON CHANGING CARD BY THIS METHOD BECAUSE IT WILL ERASE ALL CARDS EXCEPT NEW DATA.
  TODO/ THEN I NEED TO CREATE METHOD TO CHANGE DATA FOR SINGLE SPECIFIED CARD */
  // Maybe allow to change cardSetName in code and if there was specified another property - throw new Error;
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
