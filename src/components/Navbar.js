import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../utils';

const NavbarMenu = styled.ul`
  display: none;
  @media ${device.tablet} {
    display: block;
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
        <NavLink
          key={page.id}
          className='nav-item'
          activeClassName='nav-item active'
          exact
          to={page.path}
        >
          {page.label}
        </NavLink>
      ))}
    </NavbarMenu>
  );
};

export default Navbar;
