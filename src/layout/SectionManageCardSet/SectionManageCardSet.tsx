import { useEffect } from "react";

import { Error } from "src/components";
import { CardSet } from "src/components/CardSet";

import { ManageCardSetListStyled } from "src/layout/SectionManageCardSet/styled";

// import { CardSetProps } from "src/types";
import { useCardSetsStore } from "src/store";

import { useCardSetHTTPMethod } from "src/hooks";

export const SectionManageCardSet = () => {
  const { cardSets, isLoading, error } = useCardSetsStore();
  const { fetchCardSets, deleteCardSet, updateCardSet } = useCardSetHTTPMethod();
  // const [cardSetNames, setCardSetNames] = useState<string[]>([]);

  useEffect(() => {
    fetchCardSets();
  }, []);

  // useEffect(() => setCardSetNames(cardSets.map((cardSet) => cardSet.cardSetName)), [cardSets]);
  // console.log(cardSetNames);

  // Here render list by current selected card set name

  const renderCardSetList = () => {
    const firstSet = cardSets?.[0];
    if (!firstSet) return <p>No card sets available.</p>;

    return (
      <ManageCardSetListStyled>
        <CardSet
          set={firstSet}
          deleteCardSet={deleteCardSet}
          updateCardSet={updateCardSet}
          key={firstSet._id}
        />
      </ManageCardSetListStyled>
    );
  };

  return (
    <>
      {error && <Error unspecifiedErrorMessage={`${error} Try again or contact support.`} />}
      {isLoading ? "Loading..." : renderCardSetList()}
    </>
  );
};
