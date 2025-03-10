import { Button, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Link, useLocation } from "react-router-dom";
import { useIsSmOrBelow } from "../../hooks/useIsSmOrBelow";
import { AppRouteLabels, appRoutes, navBarRoutes } from "../../routes";
import { NavBarHeight } from "../../utils/constants";
import { HamburgerMenu } from "../HamburgerMenu";

export function NavBar() {
  const isMobile = useIsSmOrBelow();
  const { pathname } = useLocation();
  const isLandingPage = pathname === `/${appRoutes.landing}`;

  return (
    <AppBar
      position="sticky"
      sx={(theme) => ({
        height: NavBarHeight,
        backgroundColor: isLandingPage
          ? "transparent"
          : theme.palette.background.default,
        boxShadow: "none",
        zIndex: theme.zIndex.appBar,
      })}
    >
      <Grid
        container
        wrap="nowrap"
        justifyContent={isLandingPage ? "flex-end" : "space-between"}
        alignItems="center"
        sx={{ height: "100%", py: 1, px: 3 }}
      >
        {!isLandingPage && (
          <Grid item>
            <Link
              to={`${appRoutes.landing}/`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant={"h5"}
                sx={(theme) => ({ color: theme.palette.text.primary })}
                fontWeight={700}
              >
                Sasa Pettyjohn
              </Typography>
            </Link>
          </Grid>
        )}

        <Grid item>
          <Grid item container sx={{ mr: 2 }} spacing={3}>
            {isMobile ? (
              <Grid item>
                <HamburgerMenu />
              </Grid>
            ) : (
              <>
                {navBarRoutes.map((page) => (
                  // EXTRACT THIS TO BE SHARED WITH HAMBURGER MENU
                  <Grid item key={page}>
                    <Link to={`${page}/`}>
                      <Button>
                        <Typography
                          variant="h5"
                          sx={(theme) => ({
                            color: theme.palette.text.primary,
                            textTransform: "none",
                          })}
                          fontWeight={700}
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
