import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../utils';

const NavbarMenu = styled.ul`
  display: none;
  margin: 20px 0;
  @media ${device.tablet} {
    display: block;
  }
`;

const NavItem = styled(NavLink)`
  color: white;
  font-size: 1.1em;
  font-weight: 200;
  margin-right: 20px;
  &:hover {
    color: white;
    opacity: 0.8;
  }
`;

const routeMap = [
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
  return (
    <NavbarMenu>
      {routeMap.map((page) => (
        <NavItem
          key={page.id}
          activeStyle={{ borderBottom: `solid 2px white` }}
          exact
          to={page.path}
        >
          {page.label}
        </NavItem>
      ))}
    </NavbarMenu>
  );
};

export default Navbar;
