import React from "react";
import { NavItemContainer } from "./NavItem.styles";
import { INavItem } from "./NavItem.types";
import NavLink from "../../../../widgets/nav-link";

const NavItem = ({ item }: INavItem) => {
  const { Icon, name, tooltip, url, exact } = item;
  return (
    <NavItemContainer data-testid="navitem">
      <NavLink href={url} exact={exact} className="feature-item nav-link">
        <div className="item-icon">
          <Icon />
        </div>
        <div className="item-text">{name}</div>
        <div className="item-tooltip">{tooltip}</div>
      </NavLink>
    </NavItemContainer>
  );
};

export default NavItem;
