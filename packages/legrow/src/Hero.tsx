import React from "react";
import { HeroStartup, HeroSaaS, type HeroStartupProps, type HeroSaaSProps } from "@legrow/sections";

export type HeroProps = 
  | ({ variant: "startup" } & HeroStartupProps)
  | ({ variant: "saas" } & HeroSaaSProps);

export function Hero(props: HeroProps) {
  if (props.variant === "saas") {
    const { variant, ...rest } = props;
    return <HeroSaaS {...rest} />;
  }
  
  const { variant, ...rest } = props;
  return <HeroStartup {...rest} />;
}
