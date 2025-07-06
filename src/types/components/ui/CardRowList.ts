import { RowProps } from "src/types";

export type SortVariants = "normal" | "reverse";

export type CardRowListProps = {
  sort: SortVariants;
  rows: RowProps[];
};
