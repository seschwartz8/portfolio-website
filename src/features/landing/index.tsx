import { Box, Typography } from "@mui/material";
import landingPhoto from "../../assets/landing_color.jpeg";
import { CTAButton } from "../../components/common/CTAButton";
import { Eyebrow } from "../../components/common/Eyebrow";
import { SocialIcons } from "../../components/common/SocialIcons";
import { riseIn, zoomIn } from "../../theme/animations";
import { colors, fonts } from "../../theme/tokens";
import { appRoutes } from "../../routes";
import { yearsOfExperience } from "../../utils/experience";

/**
 * Cream scrim over the photo so left-aligned text stays legible. On mobile the
 * text sits over the photo, so the wash stays heavy through the whole text zone
 * before opening up to reveal the portrait lower down.
 */
const scrim = {
  xs: "linear-gradient(180deg,rgba(237,234,225,0.96) 0%,rgba(237,234,225,0.9) 38%,rgba(237,234,225,0.62) 66%,rgba(237,234,225,0.2) 100%)",
  md: "linear-gradient(90deg,rgba(237,234,225,0.92) 0%,rgba(237,234,225,0.6) 32%,rgba(237,234,225,0) 62%)",
};

/**
 * The "Ambient" landing hero (the chosen default). A full-bleed portrait sits
 * under the whole hero and slowly zooms in on load; a cream scrim washes over
 * it — horizontal on desktop, top-to-bottom on mobile — so the left-aligned
 * intro reads clearly. Text and CTAs rise in with a gentle stagger.
 */
export default function LandingPage() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        minHeight: "520px",
        overflow: "hidden",
      }}
    >
      {/* Photo layer — slow settle-in zoom. */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${landingPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: `${zoomIn} 1.8s cubic-bezier(.2,.7,.2,1) both`,
        }}
      />

      {/* Legibility scrim. */}
      <Box
        aria-hidden
        sx={(theme) => ({
          position: "absolute",
          inset: 0,
          background: scrim,
          pointerEvents: "none",
          zIndex: theme.zIndex.scrim,
        })}
      />

      {/* Content. */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: { xs: "28px 24px 40px", md: "10px 60px 44px" },
          maxWidth: { xs: "100%", md: "54%" },
          pointerEvents: "none",
        }}
      >
        <Eyebrow sx={{ mb: 3, animation: riseIn() }}>
          Lead Software Engineer
        </Eyebrow>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "46px", md: "clamp(48px,6vw,88px)" },
            lineHeight: 1.02,
            maxWidth: "15ch",
            m: 0,
          }}
        >
          <Box
            component="span"
            sx={{ display: "block", animation: riseIn(0.08) }}
          >
            Hi, I'm Sasa
          </Box>
          <Box
            component="span"
            sx={{
              display: "block",
              fontStyle: "italic",
              color: colors.accent,
              animation: riseIn(0.16),
            }}
          >
            Pettyjohn.
          </Box>
        </Typography>

        <Typography
          sx={{
            fontFamily: fonts.body,
            maxWidth: 420,
            fontSize: { xs: 16, md: 18 },
            lineHeight: 1.65,
            color: colors.mutedSoft,
            mt: "26px",
            animation: riseIn(0.3),
          }}
        >
          A Lead Software Engineer with {yearsOfExperience()} of experience
          building web apps.
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            mt: "34px",
            flexWrap: "wrap",
            pointerEvents: "auto",
            animation: riseIn(0.42),
          }}
        >
          <CTAButton to={`/${appRoutes.projects}`} arrow>
            View Projects
          </CTAButton>
          <Box sx={{ ml: "-8px" }}>
            <SocialIcons />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
