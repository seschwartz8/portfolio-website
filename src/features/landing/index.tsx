import { Box, Typography } from "@mui/material";
import landingPhoto from "../../assets/landing_color.jpeg";
import { CTAButton } from "../../components/common/CTAButton";
import { Eyebrow } from "../../components/common/Eyebrow";
import { SocialIcons } from "../../components/common/SocialIcons";
import { useIsMobile } from "../../hooks/useIsMobile";
import { riseIn, zoomIn } from "../../theme/animations";
import { colors, fonts } from "../../theme/tokens";
import { appRoutes } from "../../routes";
import { yearsOfExperience } from "../../utils/experience";

/** Horizontal cream scrim (desktop only) so left-aligned text reads over the photo. */
const desktopScrim =
  "linear-gradient(90deg,rgba(237,234,225,0.92) 0%,rgba(237,234,225,0.6) 32%,rgba(237,234,225,0) 62%)";

/** The intro copy + CTAs, shared by both hero layouts. */
function HeroContent() {
  return (
    <>
      <Eyebrow sx={{ mb: 3, animation: riseIn() }}>Lead Software Engineer</Eyebrow>

      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "clamp(44px,13vw,60px)", md: "clamp(48px,6vw,88px)" },
          lineHeight: 1.02,
          maxWidth: "15ch",
          m: 0,
        }}
      >
        <Box component="span" sx={{ display: "block", animation: riseIn(0.08) }}>
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
          mt: "24px",
          animation: riseIn(0.3),
        }}
      >
        A Lead Software Engineer with {yearsOfExperience()} of experience building
        web apps.
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          mt: "32px",
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
    </>
  );
}

/** The portrait, with a slow settle-in zoom on load. `blendTop` fades the top
 *  edge into the cream canvas so the mobile stack has no hard seam. */
function HeroPhoto({ blendTop = false }: { blendTop?: boolean }) {
  return (
    <>
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
      {blendTop && (
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg,#EDEAE1 0%,rgba(237,234,225,0) 22%)",
            pointerEvents: "none",
          }}
        />
      )}
    </>
  );
}

/**
 * The "Ambient" landing hero (the chosen default).
 *
 * - Desktop: a full-bleed portrait with a horizontal cream scrim; the intro
 *   sits over the light left side.
 * - Mobile: the intro sits on the cream canvas above the portrait, which fills
 *   the rest of the view and blends up into the canvas — so the photo is fully
 *   visible while the text stays perfectly legible.
 */
export default function LandingPage() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Box
        sx={{
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ padding: "28px 24px 20px" }}>
          <HeroContent />
        </Box>
        <Box
          sx={{
            position: "relative",
            flex: 1,
            minHeight: "42vh",
            overflow: "hidden",
          }}
        >
          <HeroPhoto blendTop />
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        minHeight: "520px",
        overflow: "hidden",
      }}
    >
      <HeroPhoto />

      <Box
        aria-hidden
        sx={(theme) => ({
          position: "absolute",
          inset: 0,
          background: desktopScrim,
          pointerEvents: "none",
          zIndex: theme.zIndex.scrim,
        })}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px 60px 44px",
          maxWidth: "54%",
          pointerEvents: "none",
        }}
      >
        <HeroContent />
      </Box>
    </Box>
  );
}
