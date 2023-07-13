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

const pages = ['About', 'Projects', 'Contact'];

export function NavBar() {
  const isSmallScreen = useIsSmallScreen();

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
            <Grid item>Sasa Pettyjohn</Grid>

            <Grid item>
              <Grid item container sx={{ mr: 2 }} spacing={3}>
                {isSmallScreen ? (
                  <Grid item>
                    <HamburgerMenu />
                  </Grid>
                ) : (
                  <>
                    {pages.map((page) => (
                      <Grid item key={page} sx={{ color: 'white' }}>
                        {page}
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
