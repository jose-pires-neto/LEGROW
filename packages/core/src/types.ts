import React from "react";

export interface BaseSectionProps {
  /**
   * Optional CSS classes to override or extend the default section styling.
   */
  className?: string;
  /**
   * Optional custom content to be rendered within the section.
   */
  children?: React.ReactNode;
}
