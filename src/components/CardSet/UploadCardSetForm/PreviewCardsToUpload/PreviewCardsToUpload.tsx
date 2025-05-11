import { FC } from "react";

import { CardProps } from "src/types";

type PreviewCardsToUploadProps = {
  cardsToUpload: CardProps[];
};

export const PreviewCardsToUpload: FC<PreviewCardsToUploadProps> = ({ cardsToUpload }) => {
  return (
    <div
      style={{
        marginLeft: "100px",
        backgroundColor: "lightgrey",
        padding: "30px",
        borderRadius: "12px",
        width: "30%"
      }}>
      <h2 style={{ fontSize: "24px" }}>Preview cards to upload</h2>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "20px",
          gap: "12px"
        }}>
        {cardsToUpload.map((card: CardProps) => (
          <li
            key={card._id}
            style={{
              width: "24%",
              backgroundColor: "#fff",
              borderRadius: "4px",
              padding: "10px"
            }}>
            <p>{card.name}</p>
            <p>
              <span style={{ fontWeight: 600 }}>{card.points}</span> points
            </p>
            <p>
              <span style={{ fontWeight: 600 }}>{card.type}</span> unit
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
