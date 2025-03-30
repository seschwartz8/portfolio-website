import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsSmOrBelow } from "../../hooks/useIsSmOrBelow";
import { appRoutes, navBarRoutes } from "../../routes";
import { NavBarHeight } from "../../utils/constants";
import { HamburgerMenu } from "../HamburgerMenu";
import { NavItem } from "./NavItem";

export function NavBar() {
  const isMobile = useIsSmOrBelow();
  const { pathname } = useLocation();
  const selectedRoute = pathname.split("/")[1];
  const isLandingPage = selectedRoute === appRoutes.landing;
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      sx={(theme) => ({
        height: NavBarHeight,
        backgroundColor:
          isLandingPage && !hamburgerOpen
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
              onClick={() => setHamburgerOpen(false)}
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
          <Grid item container spacing={3}>
            {isMobile ? (
              <Grid item>
                <HamburgerMenu
                  open={hamburgerOpen}
                  setOpen={setHamburgerOpen}
                />
              </Grid>
            ) : (
              <>
                {navBarRoutes.map((page) => (
                  <Grid item key={page}>
                    <NavItem page={page} selectedRoute={selectedRoute} />
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
