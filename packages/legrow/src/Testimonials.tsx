import React from "react";
import { TestimonialsCarousel, type TestimonialsCarouselProps } from "@legrow/sections";

export type TestimonialsProps = 
  | ({ variant: "carousel" } & TestimonialsCarouselProps);

export function Testimonials(props: TestimonialsProps) {
  const { variant, ...rest } = props;
  return <TestimonialsCarousel {...rest} />;
}
