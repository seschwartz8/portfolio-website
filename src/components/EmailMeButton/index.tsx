import EmailIcon from "@mui/icons-material/Email";
import { IconButton, Link, Tooltip } from "@mui/material";

export const EmailMeButton = ({
  light = false,
  large = false,
}: {
  light?: boolean;
  large?: boolean;
}) => {
  return (
    <Tooltip title="Email me" enterDelay={300}>
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:sasapettyjohn@gmail.com"
      >
        <IconButton
          sx={(theme) => ({
            color: light
              ? theme.palette.secondary.light
              : theme.palette.text.primary,
          })}
        >
          <EmailIcon fontSize={large ? "large" : "medium"} />
        </IconButton>
      </Link>
    </Tooltip>
  );
};
