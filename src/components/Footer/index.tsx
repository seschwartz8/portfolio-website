import { Box, Link as MuiLink, Typography } from "@mui/material";
import { colors, fonts, motion, radii, layout } from "../../theme/tokens";
import { EMAIL, socialLinks } from "../../utils/contact";

/** When the current design went live. */
const CREATED = "August 2026";

/**
 * The persistent dark footer shown at the bottom of every view: a mailto link
 * set in Playfair italic, plus pill buttons to LinkedIn, GitHub and the résumé
 * (each opens in a new tab). Stacks and centers on mobile.
 */
export function Footer() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        zIndex: theme.zIndex.footer,
        backgroundColor: colors.footer,
        color: colors.onDark,
        padding: layout.footerPad,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: "18px",
      })}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          gap: "8px",
        }}
      >
        <MuiLink
          href={`mailto:${EMAIL}`}
          sx={{
            fontFamily: fonts.display,
            fontStyle: "italic",
            fontSize: { xs: 22, md: 26 },
            color: colors.onDark,
            textDecoration: "none",
            transition: `color ${motion.duration.hover} ease`,
            "&:hover": { color: colors.gold },
          }}
        >
          {EMAIL}
        </MuiLink>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "rgba(237,234,225,0.6)",
            fontFamily: fonts.mono,
          }}
        >
          <Box component="span" sx={{ fontSize: 16, lineHeight: 1 }}>
            &copy;
          </Box>
          <Typography
            component="span"
            sx={{ fontFamily: fonts.mono, fontSize: 12, letterSpacing: "0.1em" }}
          >
            {CREATED}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {socialLinks.map((link) => (
          <MuiLink
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontFamily: fonts.mono,
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.onDark,
              textDecoration: "none",
              border: "1px solid rgba(237,234,225,0.25)",
              borderRadius: radii.pill,
              padding: "10px 18px",
              transition: `border-color ${motion.duration.hover} ease, transform ${motion.duration.hover} ease`,
              "&:hover": {
                borderColor: colors.gold,
                transform: "translateY(-2px)",
              },
            }}
          >
            {link.label}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
}
