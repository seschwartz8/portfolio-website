import { Box } from "@mui/material";
import { NavBarHeight } from "../../utils/constants";
import { Footer } from "../Footer";

export default function PageView({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={(theme) => ({
        height: `calc(100vh - ${NavBarHeight}px)`,
        position: "relative",
        zIndex: theme.zIndex.appContainer,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.default,
      })}
    >
      <Box
        sx={{
          flex: 1,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <Box minHeight={`calc(100vh - ${NavBarHeight}px)`} p={3} pb={10}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
