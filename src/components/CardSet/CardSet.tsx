import React, { FC, useState } from "react";

import { CardList } from "src/components";

import { CardSetWrapperProps } from "src/types";

// TODO: This component can even be brought out to the UI folder in the future

export const CardSet: FC<CardSetWrapperProps> = ({ set, deleteCardSet, updateCardSet }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  const handleSubmit = () => {
    inputValue && updateCardSet(set._id, "cardSetName", inputValue);
  };

  return (
    <div
      style={{
        padding: "35px",
        backgroundColor: "rgba(23,98,206,0.2)",
        borderRadius: "6px",
        width: "20%"
      }}>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(event) => handleInputValueChange(event)}
          type="text"
          placeholder="Avalonians"
        />
        <button
          type="submit"
          onClick={() => {
            console.log("Updating card set:", set._id);
          }}>
          Change name
        </button>
      </form>
      <li style={{ fontSize: "24px", marginBottom: "10px", display: "flex", alignItems: "center" }}>
        <span style={{ textTransform: "uppercase", fontWeight: 700 }}>{set.cardSetName}</span>
        <span
          onClick={() => deleteCardSet(set._id)}
          style={{
            color: "red",
            fontSize: "12px",
            cursor: "pointer",
            userSelect: "none",
            marginLeft: "12px"
          }}>
          [DELETE]
        </span>
      </li>
      <span style={{ textTransform: "uppercase", fontWeight: 700 }}>{set._id}</span>
      <CardList cards={set.cards} />
    </div>
  );
};
