import { Box, Typography } from "@mui/material";
import { ActionIcons } from "../ActionIcons.tsx/ActionIcons";
import { footerHeight } from "./utils/footerHeight";

export function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={1}
      sx={(theme) => ({
        height: footerHeight,
        padding: 2,
        zIndex: theme.zIndex.appFooter,
        backgroundColor: theme.palette.text.primary,
      })}
    >
      <Typography variant="body1" sx={{ color: "white" }}>
        Created by Sasa Pettyjohn
      </Typography>
      <ActionIcons light />

      <Typography variant="caption" sx={{ color: "white" }}>
        &copy; March 2025
      </Typography>
    </Box>
  );
}
