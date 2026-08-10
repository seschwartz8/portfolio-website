import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { navBarRoutes, AppRouteLabels } from "../../routes";
import { colors, fonts, layout } from "../../theme/tokens";
import { SocialIcons } from "../common/SocialIcons";
import { NavLink } from "./NavLink";

/**
 * Fixed top navigation. The wordmark returns home; the links animate an
 * underline on hover and mark the active route; and a compact social-icon
 * cluster keeps LinkedIn / GitHub / résumé one click away on every page.
 * The icons collapse on the smallest screens (where the landing hero and
 * footer carry them) to keep the bar uncluttered.
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
        gap: "16px",
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
          whiteSpace: "nowrap",
          // Space Mono only ships 400/700, so nudge weight subtly with a stroke.
          WebkitTextStroke: "0.4px currentColor",
        }}
      >
        SASA PETTYJOHN
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "20px", md: "28px" },
        }}
      >
        {navBarRoutes.map((route) => (
          <NavLink key={route} to={route} label={AppRouteLabels[route]} />
        ))}

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: "none", sm: "block" },
            borderColor: colors.hairline,
            my: 0.5,
          }}
        />
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <SocialIcons size="small" gap={2} />
        </Box>
      </Box>
    </Box>
  );
}
