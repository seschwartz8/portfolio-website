import { useMediaQuery, useTheme } from "@mui/material";

export const useIsMdOrBelow = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
};
