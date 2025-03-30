import ResumeIcon from "@mui/icons-material/Description";
import { IconButton, Link, Tooltip } from "@mui/material";
import resume from "../../assets/resume.pdf";

export const ResumeButton = ({
  light = false,
  large = false,
}: {
  light?: boolean;
  large?: boolean;
}) => {
  return (
    <Tooltip title="Resume" enterDelay={300}>
      <Link
        href={resume}
        sx={{ color: "inherit" }}
        download="S_Pettyjohn_Resume.pdf"
      >
        <IconButton
          sx={(theme) => ({
            color: light
              ? theme.palette.secondary.light
              : theme.palette.text.primary,
          })}
        >
          <ResumeIcon fontSize={large ? "large" : "medium"} />
        </IconButton>
      </Link>
    </Tooltip>
  );
};
