import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BackToGameDialogStyled,
  BigButtonStyled,
  ButtonContainerStyled,
  ButtonStyled,
  TextStyled
} from "./styled";

export const BackToGameDialog = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // TODO: Here toggle dialog on game status change; But not on the game page

  useEffect(() => {
    const closeDialogOnEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDialogOpen(false);
        // TODO: And functionality to abandon the game
      }
    };

    window.addEventListener("keydown", closeDialogOnEsc);

    return () => {
      window.removeEventListener("keydown", closeDialogOnEsc);
    };
  }, []);

  const reconnectToGame = () => navigate("/play");

  if (!isDialogOpen) return null;

  return (
    <BackToGameDialogStyled>
      <TextStyled>You were disconnected from the game.</TextStyled>
      <ButtonContainerStyled>
        <BigButtonStyled onClick={reconnectToGame}>Reconnect</BigButtonStyled>
        <ButtonStyled variant="tertiary">Abandon</ButtonStyled>
      </ButtonContainerStyled>
    </BackToGameDialogStyled>
  );
};
