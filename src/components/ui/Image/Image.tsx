import { FC } from "react";

import { ImageStyled } from "./styled";

import { ImageProps } from "./types";

export const Image: FC<ImageProps> = ({ src = "https://placehold.co/100x100", alt, loading }) => {
  return <ImageStyled src={src} alt={alt} loading={loading} />;
};
