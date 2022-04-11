import React, { ReactElement } from "react";

export interface IButton {
  children?: ReactElement[] | JSX.Element | string;
  variant?: Variant;
  href?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: Size;
  color?: string;
  id?: string;
  className?: string;
  [x: string]: any;
}

export type Size = "small" | "medium" | "large";
export type Variant = "text" | "contained" | "outlined";
