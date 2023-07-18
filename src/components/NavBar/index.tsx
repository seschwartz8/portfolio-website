import { Button, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useIsSmallScreen } from '../../hooks';
import { AppRouteLabels, appRoutes, navBarRoutes } from '../../routes';
import { HamburgerMenu } from '../HamburgerMenu';
import { NavBarHeight } from '../../utils';

export function NavBar() {
  const isSmallScreen = useIsSmallScreen();

  return (
    <AppBar position='sticky' sx={{ height: NavBarHeight }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Grid
            container
            wrap='nowrap'
            justifyContent='space-between'
            alignItems='center'
          >
            <Grid item>
              <Link to={`${appRoutes.landing}/`}>
                <Typography variant='h4' sx={{ color: 'white' }}>
                  Sasa Pettyjohn
                </Typography>
              </Link>
            </Grid>

            <Grid item>
              <Grid item container sx={{ mr: 2 }} spacing={3}>
                {isSmallScreen ? (
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
                            <Typography variant='h6' sx={{ color: 'white' }}>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
