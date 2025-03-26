import { FC } from "react";

import { CardList } from "src/components";

import { CardSetWrapperProps } from "src/types";

// zustand for deleteCardSet
// This component can even be brought out to the UI folder in the future

export const CardSet: FC<CardSetWrapperProps> = ({ set, deleteCardSet, updateCardSet }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <button
        onClick={() => {
          console.log("Updating card set:", set._id);
          updateCardSet(set._id, "cardSetName", String(prompt("Enter new card set name")));
        }}>
        Change name
      </button>
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
          [DELETE THIS CARD SET]
        </span>
      </li>
      <span style={{ textTransform: "uppercase", fontWeight: 700 }}>{set._id}</span>
      <CardList cards={set.cards} />
    </div>
  );
};
