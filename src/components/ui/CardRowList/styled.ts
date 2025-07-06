import styled from "@emotion/styled";

export const CardRowListStyled = styled.div<{ sort: "normal" | "reverse" }>`
  display: flex;
  flex-direction: column;

  ${({ sort }) => sort === "reverse" && `flex-direction: column-reverse;`}
`;
