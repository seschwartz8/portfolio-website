import { useMediaQuery, useTheme } from "@mui/material";

export const useIsXlOrBelow = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("xl"), { noSsr: true });
};
