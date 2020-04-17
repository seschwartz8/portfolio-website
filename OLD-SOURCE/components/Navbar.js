import React from 'react';
import routeMap from '../data/routeMap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className='navbar'>
      {routeMap.map((page) => (
        <div className='tab-animate'>
          <NavLink
            key={page.id}
            className='tab'
            activeClassName='active-tab'
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
