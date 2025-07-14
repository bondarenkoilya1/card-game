export type CardType = "close" | "range" | "siege";
export type CardLocation = "deck" | "board" | "adminPanel";
type CardSpeciality = "multiplier";

export type CardProps = {
  _id: string;
  name: string;
  description?: string;
  type: CardType;
  speciality?: CardSpeciality;
  points: number;
  onClick?: () => void;
};

export type CardWrapperProps = {
  card: CardProps;
  location: CardLocation;
  onClick?: () => void;
};
