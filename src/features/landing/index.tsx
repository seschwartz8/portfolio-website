import { Box, Typography, useTheme } from "@mui/material";
import landing from "../../assets/landing.jpeg";
import { ActionIcons } from "../../components/ActionIcons.tsx/ActionIcons";
import { useIsLgOrBelow } from "../../hooks/useIsLgOrBelow";
import { useIsMdOrBelow } from "../../hooks/useIsMdOrBelow";
import { useIsSmOrBelow } from "../../hooks/useIsSmOrBelow";
import { NavBarHeight } from "../../utils/constants";

export default function LandingPage() {
  const isLgOrBelow = useIsLgOrBelow();
  const isMdOrBelow = useIsMdOrBelow();
  const isMobile = useIsSmOrBelow();
  const theme = useTheme();

  const textMaxWidth = isMobile
    ? 200
    : isMdOrBelow
    ? 300
    : isLgOrBelow
    ? 400
    : "auto";

  const textPaddingLeft = isMdOrBelow ? 6 : 12;

  return (
    <>
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
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: theme.palette.tint,
            opacity: 0.05,
            zIndex: theme.zIndex.landingImgOverlay,
          }}
        />
        <Box
          height="100vh"
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          zIndex={theme.zIndex.landingImg}
        >
          <Typography
            sx={{
              mt: isMobile ? 5 : 20,
              pl: textPaddingLeft,
              maxWidth: textMaxWidth,
              zIndex: theme.zIndex.landingImgText,
            }}
            variant="h2"
            fontWeight={700}
          >
            Hi, I'm Sasa Pettyjohn
          </Typography>
          <Typography
            sx={{
              pl: textPaddingLeft,
              maxWidth: isMdOrBelow ? 100 : "auto",
              zIndex: theme.zIndex.landingImgText,
            }}
            variant="h4"
            fontWeight={700}
          >
            Lead Software Engineer
          </Typography>
          <Box
            sx={{
              pl: textPaddingLeft,
              mt: 2,
              maxWidth: isMdOrBelow ? 100 : "auto",
              zIndex: theme.zIndex.landingImgText,
            }}
          >
            <ActionIcons large />
          </Box>
        </Box>
      </div>
    </>
  );
}
