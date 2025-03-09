import { Box, Typography } from "@mui/material";
import landing from "../../assets/landing.jpeg";
import { useIsLgOrBelow } from "../../hooks/useIsLgOrBelow";
import { useIsMdOrBelow } from "../../hooks/useIsMdOrBelow";
import { useIsSmOrBelow } from "../../hooks/useIsSmOrBelow";
import { useIsXlOrBelow } from "../../hooks/useIsXlOrBelow";
import { NavBarHeight } from "../../utils/constants";

export default function LandingPage() {
  const isXlOrBelow = useIsXlOrBelow();
  const isLgOrBelow = useIsLgOrBelow();
  const isMdOrBelow = useIsMdOrBelow();
  const isMobile = useIsSmOrBelow();

  const textMaxWidth = isMobile
    ? 200
    : isMdOrBelow
    ? 300
    : isLgOrBelow
    ? 400
    : "auto";

  const textPaddingLeft = isMdOrBelow ? 6 : 12;

  return (
    <div
      style={{
        backgroundImage: `url(${landing})`,
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: `-${NavBarHeight}px`,
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Box
        height="100vh"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Typography
          sx={{
            mt: isMobile ? 5 : 20,
            pl: textPaddingLeft,
            maxWidth: textMaxWidth,
          }}
          variant="h2"
          fontWeight={700}
        >
          Hi, I'm Sasa Pettyjohn
        </Typography>
        <Typography
          sx={{ pl: textPaddingLeft, maxWidth: isMdOrBelow ? 100 : "auto" }}
          variant="h4"
          fontWeight={700}
        >
          Lead Software Engineer
        </Typography>
      </Box>
    </div>
  );
}
