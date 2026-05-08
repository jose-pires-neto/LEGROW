import React from "react";
import { HeaderMinimal, HeaderGlass, type HeaderMinimalProps, type HeaderGlassProps } from "@legrow/sections";

export type HeaderProps = 
  | ({ variant: "minimal" } & HeaderMinimalProps)
  | ({ variant: "glass" } & HeaderGlassProps);

export function Header(props: HeaderProps) {
  if (props.variant === "glass") {
    const { variant, ...rest } = props;
    return <HeaderGlass {...rest} />;
  }
  
  const { variant, ...rest } = props;
  return <HeaderMinimal {...rest} />;
}
