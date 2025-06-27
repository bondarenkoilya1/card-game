export type CardType = "close" | "range" | "siege";
type Speciality = "multiplier";
type CardLocation = "hand" | "adminPanel";

export type CardProps = {
  _id: string;
  name: string;
  description?: string;
  type: CardType;
  // TODO: check if such card is not already in a row
  speciality?: Speciality;
  points?: number;
  onClick?: () => void;
};

export type CardListProps = {
  cards: CardProps[];
};

export type CardWrapperProps = {
  card: CardProps;
  location?: CardLocation;
  onClick?: () => void;
};
