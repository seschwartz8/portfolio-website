import { Box, Typography } from "@mui/material";

export function Exposurepedia() {
  return (
    <Box gap={3} display="flex" flexDirection="column">
      <Box sx={{ border: "1px solid red", width: "100%" }}>
        <Typography align="center" variant="h4" gutterBottom>
          Exposurepedia
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          Exposurepedia content here, with an overview of the business, my role,
          listing a few key project with descriptions, videos, images
          {/* // */}
          Home and about pages, exposurepedia search with tree filters, admin
          portal, OIDC
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" gap={3}>
        <Box sx={{ border: "1px solid red", width: "50%", height: 300 }}>
          one
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
    </Box>
  );
}
