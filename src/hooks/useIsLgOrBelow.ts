import { useMediaQuery, useTheme } from "@mui/material";

export const useIsLgOrBelow = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("lg"), { noSsr: true });
};
