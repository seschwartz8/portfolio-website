import { Typography, type TypographyProps } from "@mui/material";
import { fonts } from "../../theme/tokens";

interface EyebrowProps extends TypographyProps {
  /** Label color. Defaults to terracotta; footer uses gold. */
  color?: string;
}

/**
 * The small monospaced, wide-tracked, uppercase label that opens most
 * sections ("LEAD SOFTWARE ENGINEER", "ABOUT", "SELECTED WORK").
 */
export function Eyebrow({
  color = "#B15C3F",
  sx,
  children,
  ...props
}: EyebrowProps) {
  return (
    <Typography
      component="p"
      sx={{
        fontFamily: fonts.mono,
        fontSize: 13,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
