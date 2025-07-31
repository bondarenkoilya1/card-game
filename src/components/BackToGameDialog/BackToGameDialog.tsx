import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BackToGameDialogStyled,
  BigButtonStyled,
  ButtonContainerStyled,
  ButtonStyled,
  TextStyled
} from "./styled";

import { useGameActions, useGameStatus } from "src/store";

export const BackToGameDialog = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isPlaying = useGameStatus();
  const { setIsPlaying } = useGameActions();

  useEffect(() => setIsDialogOpen(isPlaying), [isPlaying]);

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

  const abandonGame = () => {
    setIsPlaying(false);
  };

  if (!isDialogOpen) return null;

  return (
    <BackToGameDialogStyled>
      <TextStyled>You were disconnected from the game.</TextStyled>
      <ButtonContainerStyled>
        <BigButtonStyled onClick={reconnectToGame}>Reconnect</BigButtonStyled>
        {/* Disabled because currently does nothing */}
        <ButtonStyled variant="tertiary" onClick={abandonGame} disabled>
          Abandon
        </ButtonStyled>
      </ButtonContainerStyled>
    </BackToGameDialogStyled>
  );
};
