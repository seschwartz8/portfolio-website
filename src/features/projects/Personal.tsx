import { Box, Typography } from "@mui/material";
import { useIsSmOrBelow } from "../../hooks/useIsSmOrBelow";
import portfolio from "./assets/portfolio_color.png";

export function Personal() {
  const isMobile = useIsSmOrBelow();
  return (
    <Box
      gap={8}
      display="flex"
      flexDirection="column"
      sx={{ maxWidth: 1200, margin: "auto" }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h4" gutterBottom>
          My portfolio website
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          The website you are currently looking at was built by me from scratch!
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" gap={5}>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: 300,
          }}
        >
          <div
            style={{
              backgroundImage: `url(${portfolio})`,
              backgroundRepeat: "no-repeat",
              height: "100%",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: 300,
            display: isMobile ? "none" : "block",
          }}
        >
          <Typography variant="h6">
            I built this website using React, Typescript, and MUI. It is
            deployed using Firebase, and the source code is available on my
            GitHub. It's not terribly complex as web development goes, but I
            hope it helps you get a better sense of who I am and what I've
            worked on.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
