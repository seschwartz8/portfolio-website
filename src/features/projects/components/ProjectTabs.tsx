import { Box } from "@mui/material";
import { colors, fonts, motion } from "../../../theme/tokens";
import type { ProjectGroup } from "../data";

interface ProjectTabsProps {
  groups: ProjectGroup[];
  activeId: string;
  onSelect: (id: string) => void;
}

/**
 * Sticky project tab bar. Tabs are set in Playfair; the active one is italic
 * terracotta with a full-width underline, others are faint and darken on hover.
 * A cream gradient lets page content scroll cleanly beneath the bar.
 */
export function ProjectTabs({ groups, activeId, onSelect }: ProjectTabsProps) {
  return (
    <Box
      sx={(theme) => ({
        position: "sticky",
        top: 0,
        zIndex: theme.zIndex.tabBar,
        background: "linear-gradient(#EDEAE1 78%,rgba(237,234,225,0))",
        pt: { xs: "8px", md: "12px" },
        pb: "18px",
      })}
    >
      <Box sx={{ display: "flex", gap: { xs: "20px", md: "30px" }, flexWrap: "wrap" }}>
        {groups.map((group) => {
          const isActive = group.id === activeId;
          return (
            <Box
              component="button"
              key={group.id}
              onClick={() => onSelect(group.id)}
              sx={{
                position: "relative",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0 0 8px",
                fontFamily: fonts.display,
                fontSize: { xs: 22, md: 30 },
                lineHeight: 1.1,
                fontStyle: isActive ? "italic" : "normal",
                color: isActive ? colors.accent : colors.fainter,
                transition: `color ${motion.duration.hover} ease`,
                "&:hover": { color: isActive ? colors.accent : colors.ink },
                "&:hover .tab-underline": { width: isActive ? "100%" : "40%" },
              }}
            >
              {group.label}
              <Box
                className="tab-underline"
                aria-hidden
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  height: "2px",
                  backgroundColor: colors.accent,
                  width: isActive ? "100%" : 0,
                  transition: `width ${motion.duration.underline} ${motion.easing}`,
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
