import { Button, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../../hooks';
import { AppRouteLabels, appRoutes, navBarRoutes } from '../../routes';
import { NavBarHeight } from '../../utils';
import { HamburgerMenu } from '../HamburgerMenu';

export function NavBar() {
  const isMobile = useIsMobile();

  return (
    <AppBar
      position='sticky'
      sx={{ height: NavBarHeight, backgroundColor: '#646253' }}
    >
      <Grid
        container
        wrap='nowrap'
        justifyContent='space-between'
        alignItems='center'
        sx={{ height: '100%', py: 1, px: 3 }}
      >
        <Grid item>
          <Link to={`${appRoutes.landing}/`}>
            <Typography variant='h5' sx={{ color: 'white' }}>
              Sasa Pettyjohn
            </Typography>
          </Link>
        </Grid>

        <Grid item>
          <Grid item container sx={{ mr: 2 }} spacing={3}>
            {isMobile ? (
              <Grid item>
                <HamburgerMenu />
              </Grid>
            ) : (
              <>
                {navBarRoutes.map((page) => (
                  // WOULD LIKE TO GET THIS BUTTON HOVER WORKING
                  // ALSO EXTRACT THIS TO BE SHARED WITH HAMBURGER MENU
                  <Grid item key={page}>
                    <Link to={`${page}/`}>
                      <Button>
                        <Typography
                          variant='h6'
                          sx={{ color: 'white', textTransform: 'none' }}
                        >
                          {AppRouteLabels[page]}
                        </Typography>
                      </Button>
                    </Link>
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}
