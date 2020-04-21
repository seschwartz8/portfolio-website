import React, { useState } from 'react';
import Modal from './Modal';
import routeMap from '../routeMap';
import {
  HamburgerMenu,
  HamburgerTopLine,
  HamburgerMiddleLine,
  HamburgerBottomLine,
  NavItem,
} from '../styledComponents/index';
import { colors } from '../utils';

const Hamburger = ({ size }) => {
  const [open, setOpen] = useState(false);

  const onModalDismiss = () => {
    setOpen(false);
  };

  const renderModalContents = () => {
    return routeMap.map((page) => (
      <NavItem
        key={page.id}
        activeStyle={{ borderBottom: `solid 2px ${colors.darkerAqua}` }}
        exact
        to={page.path}
        color={colors.darkerAqua}
        onClick={onModalDismiss}
      >
        <h2>{page.label}</h2>
      </NavItem>
    ));
  };

  return (
    <>
      <HamburgerMenu size={size} onClick={() => setOpen((open) => !open)}>
        <HamburgerTopLine open={open}></HamburgerTopLine>
        <HamburgerMiddleLine open={open}></HamburgerMiddleLine>
        <HamburgerBottomLine open={open}></HamburgerBottomLine>
      </HamburgerMenu>
      {open ? <Modal contents={renderModalContents()} /> : null}
    </>
  );
};

export default Hamburger;
