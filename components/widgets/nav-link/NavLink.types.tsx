import { ReactElement } from "react";

export interface INavLink {
  href: string;
  exact: boolean;
  children?: ReactElement[] | JSX.Element | string;
  [key: string]: any;
}
