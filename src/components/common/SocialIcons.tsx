import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, IconButton, Tooltip } from "@mui/material";
import { colors, motion } from "../../theme/tokens";
import { socialLinks } from "../../utils/contact";

const ICONS: Record<string, typeof GitHubIcon> = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Resume: DescriptionOutlinedIcon,
};

interface SocialIconsProps {
  /** Icon size. */
  size?: "small" | "medium";
  /** Base icon color (defaults to ink). */
  color?: string;
  /** Gap between icons, in px. */
  gap?: number;
}

/**
 * Compact row of icon links to LinkedIn, GitHub and the résumé — the persistent
 * "reach me" affordance carried in the nav and on the landing hero, echoing the
 * original site's per-page social icons. Each lifts and warms to terracotta on
 * hover.
 */
export function SocialIcons({
  size = "medium",
  color = colors.ink,
  gap = 4,
}: SocialIconsProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: `${gap}px` }}>
      {socialLinks.map((link) => {
        const Icon = ICONS[link.label];
        return (
          <Tooltip key={link.label} title={link.label} enterDelay={300}>
            <IconButton
              component="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              size={size}
              sx={{
                color,
                transition: `color ${motion.duration.hover} ease, transform ${motion.duration.hover} ease`,
                "&:hover": {
                  color: colors.accent,
                  transform: "translateY(-2px)",
                  backgroundColor: "transparent",
                },
              }}
            >
              <Icon fontSize={size} />
            </IconButton>
          </Tooltip>
        );
      })}
    </Box>
  );
}
