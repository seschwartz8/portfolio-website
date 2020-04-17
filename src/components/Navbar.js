import React from 'react';
import { NavLink } from 'react-router-dom';

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
    <ul className='navbar'>
      {routeMap.map((page) => (
        <div>
          <NavLink
            key={page.id}
            className='nav-item'
            activeClassName='nav-item active'
            exact
            to={page.path}
          >
            {page.label}
          </NavLink>
        </div>
      ))}
    </ul>
  );
};

export default Navbar;
