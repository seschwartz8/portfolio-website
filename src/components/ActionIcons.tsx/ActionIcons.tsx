import { Box } from "@mui/material";
import { GitHubButton } from "../GitHubButton";
import { LinkedInButton } from "../LinkedInButton";
import { ResumeButton } from "../ResumeButton";

export const ActionIcons = ({
  light = false,
  large = false,
}: {
  light?: boolean;
  large?: boolean;
}) => {
  return (
    <Box display="flex" gap={1}>
      <LinkedInButton light={light} large={large} />
      <GitHubButton light={light} large={large} />
      <ResumeButton light={light} large={large} />
      {/* Leaving email out for now */}
      {/* <EmailMeButton light={light} large={large} /> */}
    </Box>
  );
};
