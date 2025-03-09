import { useMediaQuery, useTheme } from "@mui/material";

export const useIsSmOrBelow = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
};
