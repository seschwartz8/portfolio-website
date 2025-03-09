import { Box } from "@mui/material";
import { NavBarHeight } from "../../utils/constants";
import { Footer } from "../Footer";

export default function PageView({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        flex: 1,
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Box height={`calc(100vh - ${NavBarHeight}px)`} p={3} pb={10}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
