import { SectionUploadCardSetStyled } from "./styled";

import { PreviewCardsToUpload, UploadCardSetForm } from "src/components";

import { useUploadCardSetStore } from "src/store";

export const SectionUploadCardSet = () => {
  const { cardsToUpload } = useUploadCardSetStore();

  return (
    <SectionUploadCardSetStyled>
      <UploadCardSetForm />
      <PreviewCardsToUpload cardsToUpload={cardsToUpload} />
    </SectionUploadCardSetStyled>
  );
};
