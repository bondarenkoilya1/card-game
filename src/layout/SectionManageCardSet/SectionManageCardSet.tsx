import { useEffect } from "react";

import {
  ManageCardSetListStyled,
  ManageCardSetSupportButtonStyled,
  ManageCardSetSupportContainerStyled,
  ManageCardSetSupportTextStyled,
  SectionManageCardSetStyled
} from "./styled";

import { Error } from "src/components";
import { CardSet } from "src/components/CardSet";

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

  // TODO: Later make it more noticeable
  const renderSupportSection = () => (
    <ManageCardSetSupportContainerStyled>
      <ManageCardSetSupportTextStyled>Card set did not load?</ManageCardSetSupportTextStyled>
      <ManageCardSetSupportButtonStyled variant="tertiary" onClick={() => fetchCardSets()}>
        Try again
      </ManageCardSetSupportButtonStyled>
    </ManageCardSetSupportContainerStyled>
  );

  return (
    <SectionManageCardSetStyled>
      {error && renderSupportSection()}
      {error && <Error unspecifiedErrorMessage={`${error}. Try again or contact support`} />}
      {isLoading ? "Loading..." : renderCardSetList()}
    </SectionManageCardSetStyled>
  );
};
