import React from "react";
import { PricingModern, type PricingModernProps } from "@legrow/sections";

export type PricingProps = 
  | ({ variant: "modern" } & PricingModernProps);

export function Pricing(props: PricingProps) {
  const { variant, ...rest } = props;
  return <PricingModern {...rest} />;
}
