import { IconButton } from '@mui/material';
import { useState } from 'react';

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <IconButton size='small' onClick={() => setOpen((isOpen) => !isOpen)}>
      <div id='hamburger' className={open ? 'open' : ''}>
        <span id='hamburgerLine'></span>
        <span id='hamburgerLine'></span>
        <span id='hamburgerLine'></span>
        <span id='hamburgerLine'></span>
      </div>
    </IconButton>
  );
}
