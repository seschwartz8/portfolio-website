import React from 'react';
import { NavbarMenu, NavItem } from '../styledComponents/index';

export const routeMap = [
  {
    label: 'About',
    id: 1,
    path: '/about/',
  },
  {
    label: 'Projects',
    id: 2,
    path: '/projects/',
  },
  {
    label: 'Contact',
    id: 3,
    path: '/contact/',
  },
];

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
