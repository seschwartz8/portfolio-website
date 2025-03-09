import { Box } from "@mui/material";
import { GitHubButton } from "../GitHubButton";
import { LinkedInButton } from "../LinkedInButton";
import { ResumeButton } from "../ResumeButton";

export const ActionIcons = ({ light = false }: { light?: boolean }) => {
  return (
    <Box display="flex" gap={1}>
      <LinkedInButton light={light} />
      <GitHubButton light={light} />
      <ResumeButton light={light} />
    </Box>
  );
};
