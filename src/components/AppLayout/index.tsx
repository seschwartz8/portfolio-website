import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { colors } from "../../theme/tokens";
import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

/**
 * The persistent app shell: a full-height column with a fixed nav and footer
 * bracketing a single scrollable <main>. Only the main region scrolls, which
 * keeps the "Get in touch" footer in view and gives every page a calm, framed
 * feel. Scroll position resets when the route changes.
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
        position: "relative",
        overflow: "hidden",
        backgroundColor: colors.cream,
        color: colors.ink,
      }}
    >
      {/* Ambient warm glow bleeding in from the top-right corner. */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: "-160px",
          right: "-160px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, rgba(177,92,63,0.07), transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <NavBar />

      <Box
        component="main"
        ref={mainRef}
        sx={{
          flex: 1,
          position: "relative",
          overflowY: "auto",
          zIndex: 1,
          // Hide the scrollbar for a cleaner canvas without disabling scroll.
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { width: 0, height: 0 },
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
