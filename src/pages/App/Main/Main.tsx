import { SectionPrimary } from "src/components";

export const Main = () => {
  return (
    <>
      <div
        style={{
          height: "100px",
          color: "#000",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: "62px",
          borderBottom: "2px solid #000"
        }}>
        CARD GAME
      </div>
      <SectionPrimary />
    </>
  );
};
