import { Box } from "@mui/material";
import { NavBarHeight } from "../../utils/constants";
import { Footer } from "../Footer";

export default function PageView({ children }: { children: React.ReactNode }) {
  return (
    <Box
      //test
      style={{
        flex: 1,
        height: "100vh",
        overflowY: "auto",
        border: "1px solid red",
      }}
    >
      <Box
        border="1px solid blue"
        height={`calc(100vh - ${NavBarHeight}px)`}
        p={3}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
