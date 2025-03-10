import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Link, Tooltip } from "@mui/material";

export const LinkedInButton = ({
  light = false,
  large = false,
}: {
  light?: boolean;
  large?: boolean;
}) => {
  return (
    <Tooltip title="LinkedIn" enterDelay={300}>
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
          <LinkedInIcon fontSize={large ? "large" : "medium"} />
        </IconButton>
      </Link>
    </Tooltip>
  );
};
