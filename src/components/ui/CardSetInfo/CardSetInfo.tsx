import React, { FC, useState } from "react";

import { Button } from "src/components";

import { CardSetInfoProps } from "src/types";

export const CardSetInfo: FC<CardSetInfoProps> = ({
  name,
  id,
  deleteCardSet,
  updateCardSet,
  cardsQuantity
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const handleSubmit = () => {
    inputValue && updateCardSet(id, "cardSetName", inputValue);
  };

  return (
    <div style={{ padding: "20px", background: "#d0e1f5", border: "1px solid #000" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p>{name}</p>
        <span
          style={{
            fontSize: "10px",
            textTransform: "uppercase",
            color: "grey",
            marginLeft: "10px"
          }}>
          {id}
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(event) => handleInputValueChange(event)}
          type="text"
          placeholder="Avalonians"
        />
        <Button variant="secondary" type="submit">
          Change name
        </Button>
      </form>
      <Button variant="secondary" onClick={deleteCardSet}>
        Delete card set
      </Button>
      {renderCardsQuantity(cardsQuantity)}
    </div>
  );
};

function renderCardsQuantity(cardsQuantity: number) {
  if (cardsQuantity === 0) return <p>No cards in this set</p>;
  const label = cardsQuantity === 1 ? "card" : "cards";

  return (
    <p>
      {cardsQuantity} {label} in this set
    </p>
  );
}
