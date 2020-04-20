import React from 'react';
import { routeMap } from './Navbar';
import { Modal, NavItem } from '../styledComponents/index';
import { colors } from '../utils';

const HamburgerModal = () => {
  const color = colors.darkerAqua;

  return (
    <Modal>
      <ul
        style={{
          display: 'flex',
          height: '40%',
          width: '40%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {routeMap.map((page) => (
          <NavItem
            key={page.id}
            activeStyle={{ borderBottom: `solid 2px ${color}` }}
            exact
            to={page.path}
            color={color}
          >
            <h2>{page.label}</h2>
          </NavItem>
        ))}
      </ul>
    </Modal>
  );
};

export default HamburgerModal;
