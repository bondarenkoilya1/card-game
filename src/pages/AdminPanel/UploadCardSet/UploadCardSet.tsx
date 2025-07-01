import { UploadCardSetStyled } from "./styled";

import { PreviewCardsToUpload, UploadCardSetForm } from "src/components";

import { useUploadCardSetStore } from "src/store";

export const UploadCardSet = () => {
  const { cardsToUpload } = useUploadCardSetStore();

  return (
    <UploadCardSetStyled>
      <UploadCardSetForm />
      <PreviewCardsToUpload cardsToUpload={cardsToUpload} />
    </UploadCardSetStyled>
  );
};
