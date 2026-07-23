import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { colors } from "../../theme/tokens";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

/**
 * The persistent app shell: a full-height column with a fixed nav above a
 * single scrollable region. The footer lives at the end of that region, so it
 * only comes into view once the page is scrolled to the bottom. Scroll position
 * resets when the route changes.
 */
export function AppLayout() {
  const mainRef = useRef<HTMLElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <Box
      sx={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: colors.cream,
        color: colors.ink,
      }}
    >
      <NavBar />

      {/* Definite-height block scroller: pages fill it via `height: 100%`,
          and the footer sits just below the fold until scrolled to. */}
      <Box
        component="main"
        ref={mainRef}
        sx={{
          flex: 1,
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { width: 0, height: 0 },
        }}
      >
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
}
