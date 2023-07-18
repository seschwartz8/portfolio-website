import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { NavBarHeight, zIndexMap } from '../../utils';
import { navBarRoutes, AppRouteLabels } from '../../routes';
import { Link } from 'react-router-dom';

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        sx={{ zIndex: zIndexMap.hamburgerMenu }}
        size='small'
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <div id='hamburger' className={open ? 'open' : ''}>
          <span id='hamburgerLine'></span>
          <span id='hamburgerLine'></span>
          <span id='hamburgerLine'></span>
          <span id='hamburgerLine'></span>
        </div>
      </IconButton>
      {open && (
        <Dialog
          transitionDuration={600}
          sx={{ zIndex: zIndexMap.dialog }}
          fullScreen
          open={open}
          onClose={() => setOpen(false)}
        >
          <DialogContent sx={{ mt: `${NavBarHeight}px`, p: 10 }}>
            <Grid container direction='column' spacing={8} alignItems='center'>
              {navBarRoutes.map((page) => (
                <Grid item key={page}>
                  <Link to={`${page}/`}>
                    <Button>
                      <Typography variant='h5'>
                        {AppRouteLabels[page]}
                      </Typography>
                    </Button>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
