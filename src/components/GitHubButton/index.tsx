import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Link, Tooltip } from "@mui/material";

export const GitHubButton = ({
  light = false,
  large = false,
}: {
  light?: boolean;
  large?: boolean;
}) => {
  return (
    <Tooltip title="GitHub" enterDelay={300}>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/seschwartz8"
      >
        <IconButton
          sx={(theme) => ({
            color: light
              ? theme.palette.secondary.light
              : theme.palette.text.primary,
          })}
        >
          <GitHubIcon fontSize={large ? "large" : "medium"} />
        </IconButton>
      </Link>
    </Tooltip>
  );
};
