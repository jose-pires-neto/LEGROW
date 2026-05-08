import React from "react";
import { FooterMinimal, type FooterMinimalProps } from "@legrow/sections";

export type FooterProps = 
  | ({ variant: "minimal" } & FooterMinimalProps);

export function Footer(props: FooterProps) {
  const { variant, ...rest } = props;
  return <FooterMinimal {...rest} />;
}
