import { Box, Typography } from "@mui/material";
import { riseIn, slideInAnim } from "../../../theme/animations";
import { colors, fonts } from "../../../theme/tokens";
import type { ProjectGroup as ProjectGroupData } from "../data";
import { MediaTile } from "./MediaTile";

/**
 * Renders a single project group: title + role tag, intro paragraph, and the
 * alternating media/text sub-sections. Rendered with a `key` on the active tab
 * so switching tabs remounts it and replays the slide-in entrance.
 */
export function ProjectGroup({ group }: { group: ProjectGroupData }) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          gap: "14px",
          flexWrap: "wrap",
          mt: "20px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 30, md: "clamp(34px,3.6vw,52px)" },
            lineHeight: 1.05,
            m: 0,
            animation: slideInAnim(),
          }}
        >
          {group.title}
        </Typography>
        <Typography
          component="span"
          sx={{
            fontFamily: fonts.mono,
            fontSize: 12,
            letterSpacing: "0.12em",
            color: colors.accent,
            animation: slideInAnim(0.05),
          }}
        >
          {group.role}
        </Typography>
      </Box>

      <Typography
        sx={{
          maxWidth: "70ch",
          fontSize: { xs: 16, md: 18 },
          lineHeight: 1.65,
          color: colors.muted,
          mt: "16px",
          animation: slideInAnim(0.1),
        }}
      >
        {group.intro}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "38px", md: "48px" },
          mt: "30px",
          pb: "10px",
        }}
      >
        {group.sections.map((section, i) => (
          <Box
            key={section.heading}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: i % 2 === 1 ? "row-reverse" : "row",
              },
              alignItems: "center",
              gap: { xs: "22px", md: "56px" },
              animation: riseIn(0.16 + i * 0.06, "0.55s"),
              "& > *": { flex: 1, width: "100%", minWidth: 0 },
            }}
          >
            <MediaTile section={section} />

            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                  mb: "10px",
                }}
              >
                <Box
                  component="span"
                  sx={{ fontFamily: fonts.mono, fontSize: 12, color: colors.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </Box>
                <Typography
                  variant="h3"
                  sx={{ fontSize: 22, lineHeight: 1.15, m: 0 }}
                >
                  {section.heading}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: 16,
                  lineHeight: 1.62,
                  color: colors.muted,
                }}
              >
                {section.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
