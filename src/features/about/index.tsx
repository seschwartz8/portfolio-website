import { Box, Typography } from "@mui/material";
import { ActionIcons } from "../../components/ActionIcons.tsx/ActionIcons";
import PageView from "../../components/PageView";

export default function AboutPage() {
  return (
    <PageView>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography variant="h3">About</Typography>
        <ActionIcons />

        <Box display="flex" flexDirection="column" gap={6} mt={2}>
          <Box
            display="flex"
            alignItems="center"
            gap={8}
            sx={{ maxWidth: 800 }}
          >
            <Box>
              <Box
                sx={{ height: 250, width: 400, backgroundColor: "red" }}
              ></Box>
            </Box>
            <Box>
              <Typography variant="h6">
                I am a Lead Software Engineer with experience developing web
                applications in React Typescript. I particularly enjoy building
                apps that are modular, scalable, maintainable, and delightful to
                use.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={8}
            sx={{ maxWidth: 800 }}
          >
            <Box>
              <Box
                sx={{ height: 250, width: 400, backgroundColor: "red" }}
              ></Box>
            </Box>
            <Box>
              <Typography variant="h6">
                I have years of experience mentoring junior developers,
                architecting and managing large-scale projects, and creating a
                team culture that fosters excitement about the product.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={8}
            sx={{ maxWidth: 800 }}
          >
            <Box>
              <Box
                sx={{ height: 250, width: 400, backgroundColor: "red" }}
              ></Box>
            </Box>
            <Box>
              <Typography variant="h6">
                When I'm not coding? I'm probably writing or performing music,
                perfecting my sourdough skills, or with some friends at a
                boardgame cafe.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </PageView>
  );
}
