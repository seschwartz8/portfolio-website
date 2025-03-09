import ResumeIcon from "@mui/icons-material/Description";
import { IconButton, Link, Tooltip } from "@mui/material";
import resume from "../../assets/PLACEHOLDER_resume.pdf";

export const ResumeButton = ({ light = false }: { light?: boolean }) => {
  return (
    <Tooltip title="Resume">
      <Link href={resume} download sx={{ color: "inherit" }}>
        <IconButton
          sx={(theme) => ({
            color: light
              ? theme.palette.secondary.light
              : theme.palette.text.primary,
          })}
        >
          <ResumeIcon />
        </IconButton>
      </Link>
    </Tooltip>
  );
};
