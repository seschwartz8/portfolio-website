import { useMediaQuery, useTheme } from "@mui/material";

/**
 * True below the `md` breakpoint (<900px) — the point at which two-column
 * layouts collapse to a single column and mobile spacing/type kicks in.
 */
export const useIsMobile = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
};
