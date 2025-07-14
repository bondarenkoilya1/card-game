import React from "react";

type DefaultImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

export type ImageProps = DefaultImageProps &
  Omit<DefaultImageProps, "alt"> & {
    alt: string;
  };
