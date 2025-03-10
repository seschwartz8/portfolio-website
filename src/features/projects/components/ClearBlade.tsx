import { Box, Typography } from "@mui/material";

export function ClearBlade() {
  return (
    <Box gap={3} display="flex" flexDirection="column">
      <Box sx={{ border: "1px solid red", width: "100%" }}>
        <Typography align="center" variant="h4" gutterBottom>
          ClearBlade's Intelligent Assets
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          ClearBlade content here, with an overview of the business, my roles,
          listing a few key project with descriptions, videos, images
          {/* // */}
          Overview of some IA features (home map page with live updates,
          dashboards, AI chatbot,custom roles and perms, store checkout,
          microfrontends)
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

      <Box display="flex" justifyContent="space-between" gap={3}>
        <Box sx={{ border: "1px solid red", width: "50%", height: 300 }}>
          one
        </Box>
        <Box sx={{ border: "1px solid blue", width: "50%", height: 300 }}>
          two
        </Box>
      </Box>
    </Box>
  );
}
