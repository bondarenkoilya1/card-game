import { CardSetNameProp, CardSetProps, ServerErrorProps } from "src/types";

import { fetchItem } from "./default";

export const fetchCardSets = () => fetchItem<CardSetProps[]>("/card-sets");

export const deleteCardSet = (cardSetId: string) => {
  const options = {
    method: "DELETE"
  };

  return fetchItem<ServerErrorProps>(`/card-sets/${cardSetId}`, options);
};

export const updateCardSetName = (cardId: string, newCardSetName: string) => {
  const requestHeaders = new Headers();
  requestHeaders.set("Content-Type", "application/json");

  const requestOptions = {
    headers: requestHeaders,
    method: "PATCH",
    body: JSON.stringify({ cardSetName: newCardSetName })
  };

  return fetchItem<CardSetNameProp>(`/card-sets/${cardId}`, requestOptions);
};

// Todo: Later use inside component [updateCardSetName function]

//  if (newCardSetName === null || newCardSetName?.trim() === "") {
//     const errorMessage = "You didn't enter any card set name. It will remain as it was";
//     return;
//   }
//
//   if (newCardSetName && newCardSetName.length > 30) {
//     const errorMessage =
//       "Card set name shouldn't be so long. Try something less than 30 characters";
//     return;
//   }
