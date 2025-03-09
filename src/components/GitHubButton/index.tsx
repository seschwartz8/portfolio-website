import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Link, Tooltip } from "@mui/material";

export const GitHubButton = ({ light = false }: { light?: boolean }) => {
  return (
    <Tooltip title="GitHub">
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
          <GitHubIcon />
        </IconButton>
      </Link>
    </Tooltip>
  );
};
