import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { INavLink } from "./NavLink.types";

const NavLink = ({ href, exact, children, ...props }: INavLink) => {
  const router = useRouter();
  const pathname = router?.pathname;

  const isActive = exact ? pathname === href : pathname?.startsWith(href);
  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

export default NavLink;
