import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Link, Tooltip } from "@mui/material";

export const LinkedInButton = ({ light = false }: { light?: boolean }) => {
  return (
    <Tooltip title="LinkedIn">
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/sasa-schwartz/"
      >
        <IconButton
          sx={(theme) => ({
            color: light
              ? theme.palette.secondary.light
              : theme.palette.text.primary,
          })}
        >
          <LinkedInIcon />
        </IconButton>
      </Link>
    </Tooltip>
  );
};
