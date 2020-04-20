import React, { useState } from 'react';
import HamburgerModal from './HamburgerModal';
import {
  HamburgerMenu,
  HamburgerTopLine,
  HamburgerMiddleLine,
  HamburgerBottomLine,
} from '../styledComponents/index';

const Hamburger = ({ size }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HamburgerMenu size={size} onClick={() => setOpen((open) => !open)}>
        <HamburgerTopLine open={open}></HamburgerTopLine>
        <HamburgerMiddleLine open={open}></HamburgerMiddleLine>
        <HamburgerBottomLine open={open}></HamburgerBottomLine>
      </HamburgerMenu>
      {open ? <HamburgerModal /> : null}
    </>
  );
};

export default Hamburger;
