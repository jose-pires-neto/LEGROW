import React from "react";
import { FeaturesGrid, FeaturesCards, type FeaturesGridProps, type FeaturesCardsProps } from "@legrow/sections";

export type FeaturesProps = 
  | ({ variant: "grid" } & FeaturesGridProps)
  | ({ variant: "cards" } & FeaturesCardsProps);

export function Features(props: FeaturesProps) {
  if (props.variant === "cards") {
    const { variant, ...rest } = props;
    return <FeaturesCards {...rest} />;
  }
  
  const { variant, ...rest } = props;
  return <FeaturesGrid {...rest} />;
}
