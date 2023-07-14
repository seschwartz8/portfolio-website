import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useIsSmallScreen } from '../../hooks';
import { Grid } from '@mui/material';
import { HamburgerMenu } from '../HamburgerMenu';
import { Link } from 'react-router-dom';
import { AppRouteLabels, appRoutes } from '../../routes';

export function NavBar() {
  const isSmallScreen = useIsSmallScreen();
  const navBarRoutes = [appRoutes.about, appRoutes.projects, appRoutes.contact];

  return (
    <AppBar position='sticky'>
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
                <Typography sx={{ color: 'white' }}>Sasa Pettyjohn</Typography>
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
                      <Grid item key={page}>
                        <Link to={`${page}/`}>
                          <Typography sx={{ color: 'white' }}>
                            {AppRouteLabels[page]}
                          </Typography>
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
