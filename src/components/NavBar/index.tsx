import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { navBarRoutes, AppRouteLabels } from "../../routes";
import { colors, fonts, layout } from "../../theme/tokens";
import { NavLink } from "./NavLink";

/**
 * Fixed top navigation. The wordmark returns home; the links animate an
 * underline on hover and mark the active route. Sits on the cream canvas
 * above all page content.
 */
export function NavBar() {
  return (
    <Box
      component="nav"
      sx={(theme) => ({
        flex: "0 0 auto",
        zIndex: theme.zIndex.nav,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: layout.navPad,
      })}
    >
      <Box
        component={Link}
        to="/"
        sx={{
          fontFamily: fonts.mono,
          fontSize: { xs: 13, md: 15 },
          letterSpacing: "0.2em",
          color: colors.ink,
          textDecoration: "none",
        }}
      >
        SASA PETTYJOHN
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "20px", md: "36px" },
        }}
      >
        {navBarRoutes.map((route) => (
          <NavLink key={route} to={route} label={AppRouteLabels[route]} />
        ))}
      </Box>
    </Box>
  );
}
