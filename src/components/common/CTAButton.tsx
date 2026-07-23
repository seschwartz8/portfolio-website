import { Button, type ButtonProps } from "@mui/material";
import { Link } from "react-router-dom";
import { colors, fonts, motion, radii } from "../../theme/tokens";

interface CTAButtonProps extends Omit<ButtonProps, "variant"> {
  /** Internal route to navigate to. */
  to: string;
  /** Visual weight: solid ink pill vs. bordered translucent pill. */
  emphasis?: "primary" | "secondary";
  /** Trailing gold arrow (used on the primary hero CTA). */
  arrow?: boolean;
}

/**
 * A pill-shaped call-to-action that routes internally. Primary is a solid ink
 * pill with a gold arrow; secondary is a bordered, translucent-cream pill.
 * Both lift slightly on hover.
 */
export function CTAButton({
  to,
  emphasis = "primary",
  arrow = false,
  children,
  sx,
  ...props
}: CTAButtonProps) {
  const isPrimary = emphasis === "primary";

  return (
    <Button
      component={Link}
      to={to}
      disableRipple
      sx={{
        fontFamily: fonts.mono,
        fontSize: 12,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        borderRadius: radii.pill,
        padding: "14px 24px",
        lineHeight: 1,
        transition: `transform ${motion.duration.hover} ease, border-color ${motion.duration.hover} ease`,
        ...(isPrimary
          ? {
              backgroundColor: colors.ink,
              color: colors.onDark,
              "&:hover": {
                backgroundColor: colors.ink,
                transform: "translateY(-3px)",
              },
            }
          : {
              backgroundColor: "rgba(237,234,225,0.7)",
              color: colors.ink,
              border: `1px solid ${colors.buttonBorder}`,
              "&:hover": {
                backgroundColor: "rgba(237,234,225,0.7)",
                borderColor: colors.accent,
                transform: "translateY(-3px)",
              },
            }),
        ...sx,
      }}
      {...props}
    >
      {children}
      {arrow && (
        <span style={{ color: colors.gold, marginLeft: 10 }} aria-hidden>
          →
        </span>
      )}
    </Button>
  );
}
