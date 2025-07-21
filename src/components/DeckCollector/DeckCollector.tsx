import { ButtonStyled, DeckCollectorStyled, TextStyled, TitleStyled } from "./styled";

export const DeckCollector = () => {
  return (
    <DeckCollectorStyled>
      <TitleStyled>Don't wanna waste time?</TitleStyled>
      <TextStyled>Collect deck automatically and start game</TextStyled>
      <ButtonStyled variant="secondary">Let's go</ButtonStyled>
    </DeckCollectorStyled>
  );
};
