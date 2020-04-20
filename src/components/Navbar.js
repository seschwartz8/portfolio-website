import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { fadeIn } from '../utils';
import { NavbarMenu } from '../styledComponents/index';

const NavItem = styled(NavLink)`
  opacity: 0;
  animation: 1s ${fadeIn} 0.3s forwards;
  animation-delay: 0.5s;
  color: white;
  font-size: 1.2em;
  font-weight: 200;
  margin-right: 20px;
`;

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
