import React from 'react';
import { NavbarMenu, NavItem } from '../styledComponents/index';
import routeMap from '../routeMap';

const Navbar = () => {
  const color = 'white';

  return (
    <NavbarMenu>
      {routeMap.map((page) => (
        <NavItem
          key={page.id}
          activeStyle={{ borderBottom: `solid 2px ${color}` }}
          exact
          to={page.path}
          color={color}
        >
          {page.label}
        </NavItem>
      ))}
    </NavbarMenu>
  );
};

export default Navbar;
