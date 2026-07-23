import { Box, Link as MuiLink } from "@mui/material";
import { colors, fonts, motion, radii, layout } from "../../theme/tokens";
import { EMAIL, socialLinks } from "../../utils/contact";
import { Eyebrow } from "../common/Eyebrow";

/**
 * The persistent dark "Get in touch" footer shown on every view: a mailto link
 * set in Playfair italic, plus pill buttons to LinkedIn, GitHub and the résumé.
 * Stacks and centers on mobile.
 */
export function Footer() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        flex: "0 0 auto",
        zIndex: theme.zIndex.footer,
        backgroundColor: colors.footer,
        color: colors.onDark,
        padding: layout.footerPad,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "stretch", md: "center" },
        gap: "18px",
      })}
    >
      <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Eyebrow color={colors.gold} sx={{ fontSize: 12, mb: 1 }}>
          Get in touch
        </Eyebrow>
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
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "10px",
          justifyContent: { xs: "center", md: "flex-end" },
          flexWrap: "wrap",
        }}
      >
        {socialLinks.map((link) => (
          <MuiLink
            key={link.label}
            href={link.href}
            download={"download" in link ? link.download : undefined}
            target={"download" in link ? undefined : "_blank"}
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
