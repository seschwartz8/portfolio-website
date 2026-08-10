import { Box, Typography } from "@mui/material";
import clearbladeTeam from "../../assets/clearblade_team.jpg";
import playingGuitar from "../../assets/playing_guitar.png";
import typing from "../../assets/typing.avif";
import { Eyebrow } from "../../components/common/Eyebrow";
import { fadeInAnim, riseIn } from "../../theme/animations";
import { colors, fonts, radii, shadows } from "../../theme/tokens";
import { yearsOfExperience } from "../../utils/experience";

/** The three alternating photo/text rows. Copy preserved from the original site. */
const rows = [
  {
    img: typing,
    alt: "Sasa's hands typing on a laptop",
    text: `I am a Lead Software Engineer with ${yearsOfExperience()} of experience developing web applications in React Typescript. I particularly enjoy building apps that are modular, scalable, maintainable, and delightful to use.`,
  },
  {
    img: clearbladeTeam,
    alt: "Sasa with the ClearBlade team",
    text: "I excel at mentoring junior developers, architecting and managing large-scale projects, and creating a team culture that fosters excitement about the product.",
  },
  {
    img: playingGuitar,
    alt: "Sasa playing guitar",
    text: "When I'm not coding? I'm probably writing or performing music, perfecting my sourdough skills, or with some friends at a boardgame cafe.",
  },
];

export default function AboutPage() {
  return (
    <Box
      sx={{
        minHeight: "100%",
        padding: { xs: "28px 24px 40px", md: "10px 60px 44px" },
      }}
    >
      <Eyebrow sx={{ animation: riseIn(0, "0.6s") }}>About</Eyebrow>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "40px", md: "56px" },
          mt: { xs: "32px", md: "44px" },
        }}
      >
        {rows.map((row, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: i % 2 === 1 ? "row-reverse" : "row",
              },
              alignItems: "center",
              gap: { xs: "20px", md: "56px" },
              "& > *": { flex: 1, width: "100%" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: { xs: 220, md: 300 },
                borderRadius: radii.mediaLarge,
                overflow: "hidden",
                boxShadow: shadows.media,
                animation: fadeInAnim(),
              }}
            >
              <Box
                component="img"
                src={row.img}
                alt={row.alt}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Warm wash so photos settle into the cream palette. */}
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: colors.tint,
                  opacity: 0.15,
                  pointerEvents: "none",
                }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: fonts.body,
                fontSize: { xs: 17, md: 20 },
                lineHeight: 1.65,
                color: colors.ink,
                animation: riseIn(0.1 + i * 0.06),
              }}
            >
              {row.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
