export type CardType = "close" | "range" | "siege";
type Speciality = "multiplier";
type CardLocation = "hand" | "adminPanel";

export type CardProps = {
  // TODO: fix these mess with ids. I guess i should not set id myself, because i already have _id from mongo
  _id?: string;
  id?: string;
  name: string;
  description?: string;
  type?: CardType;
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
