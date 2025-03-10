import { Box, Typography } from "@mui/material";
import portfolio from "../assets/portfolio.png";

export function Personal() {
  return (
    <Box gap={3} display="flex" flexDirection="column">
      <Box sx={{ border: "1px solid red", width: "100%" }}>
        <Typography align="center" variant="h4" gutterBottom>
          My portfolio website
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          The website you are currently looking at was built by me from scratch
          using React, Typescript, and MUI.
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" gap={3}>
        <Box sx={{ border: "1px solid red", width: "50%", height: 300 }}>
          Personal content, specifically mentioning this portfolio website!
          Maybe list a few key other projects with descriptions, videos, images
        </Box>
        <Box sx={{ border: "1px solid blue", width: "50%", height: 300 }}>
          two
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" gap={3}>
        <Box sx={{ border: "1px solid red", width: "33%", height: 300 }}>
          one
        </Box>
        <Box sx={{ border: "1px solid blue", width: "33%", height: 300 }}>
          two
        </Box>
        <Box sx={{ border: "1px solid blue", width: "33%", height: 300 }}>
          three
        </Box>
      </Box>

      <Box sx={{ border: "1px solid red", width: "100%" }}>
        <Typography align="center" variant="h4" gutterBottom>
          Full width title/description box
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          This is a full width title/description box. It is a box that is full
          width of the page and contains a title and description.
        </Typography>
      </Box>
      <div
        style={{
          backgroundImage: `url(${portfolio})`,
          backgroundRepeat: "no-repeat",
          height: 400,
          width: 600,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
}
