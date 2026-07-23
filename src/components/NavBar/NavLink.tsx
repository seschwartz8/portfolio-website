import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { colors, fonts, motion } from "../../theme/tokens";

interface NavLinkProps {
  /** Route path, e.g. "about". */
  to: string;
  label: string;
}

/**
 * A top-nav link with an underline that animates from 0 → full width on hover,
 * and stays full-width + terracotta while its route is active.
 */
export function NavLink({ to, label }: NavLinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname.replace(/^\//, "").split("/")[0] === to;

  return (
    <Box
      component={Link}
      to={`/${to}`}
      sx={{
        position: "relative",
        fontFamily: fonts.mono,
        fontSize: 13,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        textDecoration: "none",
        padding: "4px 0",
        color: isActive ? colors.accent : colors.ink,
        transition: `color ${motion.duration.hover} ease`,
        "&:hover": { color: colors.accent },
        "&:hover .nav-underline": { width: "100%" },
      }}
    >
      {label}
      <Box
        className="nav-underline"
        aria-hidden
        sx={{
          position: "absolute",
          left: 0,
          bottom: "-3px",
          height: "1.5px",
          backgroundColor: colors.accent,
          width: isActive ? "100%" : 0,
          transition: `width ${motion.duration.underline} ${motion.easing}`,
        }}
      />
    </Box>
  );
}
