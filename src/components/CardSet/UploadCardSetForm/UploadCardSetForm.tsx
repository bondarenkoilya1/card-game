import React, { useState } from "react";

export const UploadCardSetForm = () => {
  const [hasCardsOnStart, setHasCardsOnStart] = useState(true);

  const handleSetHasCardsOnStart = (event: React.ChangeEvent<HTMLInputElement>) =>
    setHasCardsOnStart(event.currentTarget.value === "yes");

  return (
    <div
      style={{ padding: "20px", border: "2px solid #4b6ef5", borderRadius: "12px", width: "26%" }}>
      <h2 style={{ fontSize: "24px", textTransform: "uppercase" }}>Upload card set</h2>
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px"
          }}>
          <label htmlFor="card-set-name__input" style={{ fontSize: "12px" }}>
            Card set name
          </label>
          <input
            type="text"
            id="card-set-name__input"
            placeholder="Chemicals"
            style={{ width: "170px", padding: "5px", marginTop: "5px" }}
          />
        </div>
        <div
          style={{
            backgroundColor: "#fdfdfd",
            border: "2px solid #4b6ef5",
            borderRadius: "12px",
            padding: "20px",
            color: "#333",
            maxWidth: "350px",
            marginTop: "20px",
            textAlign: "center"
          }}>
          <p style={{ fontSize: "18px" }}>Do you want to add some cards on start?</p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginTop: "12px"
            }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="has-cards__radio--yes">Yes</label>
              <input
                type="radio"
                name="hasCards"
                value="yes"
                id="has-cards__radio--yes"
                checked={hasCardsOnStart}
                onChange={handleSetHasCardsOnStart}
                style={{ marginTop: "5px", accentColor: "#4b6ef5", cursor: "pointer" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="has-cards__radio--no">No</label>
              <input
                type="radio"
                name="hasCards"
                value="no"
                id="has-cards__radio--no"
                checked={!hasCardsOnStart}
                onChange={handleSetHasCardsOnStart}
                style={{ marginTop: "5px", accentColor: "#4b6ef5", cursor: "pointer" }}
              />
            </div>
          </div>
        </div>

        {hasCardsOnStart && (
          <div style={{ marginTop: "20px" }}>
            I want to add a card with the following properties:
          </div>
        )}
      </form>
    </div>
  );
};
