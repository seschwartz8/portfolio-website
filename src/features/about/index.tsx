import { Box, Typography, useTheme } from "@mui/material";
import clearblade_team from "../../assets/clearblade_team.jpg";
import playing_guitar from "../../assets/playing_guitar.png";
import typing from "../../assets/typing.avif";
import { ActionIcons } from "../../components/ActionIcons.tsx/ActionIcons";
import PageView from "../../components/PageView";
import { useIsSmOrBelow } from "../../hooks/useIsSmOrBelow";

export default function AboutPage() {
  const theme = useTheme();
  const isSmOrBelow = useIsSmOrBelow();

  const yearsSince2020 =
    (new Date().getTime() - new Date("2020-05-01").getTime()) /
    (1000 * 60 * 60 * 24 * 365);
  const wholeYears = Math.floor(yearsSince2020);
  const fraction = yearsSince2020 - wholeYears;

  const yearsOfExp =
    fraction <= 0.25
      ? `${wholeYears} years`
      : fraction < 0.75
      ? `more than ${wholeYears} years`
      : `${wholeYears + 1} years`;

  return (
    <PageView>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Typography
          variant="h3"
          sx={(theme) => ({
            color: theme.palette.text.primary,
          })}
        >
          About
        </Typography>
        <ActionIcons />

        <Box display="flex" flexDirection="column" gap={6} mt={2}>
          <Box
            display="flex"
            alignItems="center"
            gap={4}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              "& > *": { flex: 1 },
            }}
          >
            <Box>
              <Box
                sx={{
                  height: 250,
                  width: isSmOrBelow ? "100vw" : 400,
                  backgroundImage: `url(${typing})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: theme.palette.tint,
                    opacity: 0.15,
                    zIndex: theme.zIndex.landingImgOverlay,
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  maxWidth: 400,
                  px: isSmOrBelow ? 2 : 0,
                }}
              >
                I am a Lead Software Engineer with {yearsOfExp} of experience
                developing web applications in React Typescript. I particularly
                enjoy building apps that are modular, scalable, maintainable,
                and delightful to use.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={4}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              "& > *": { flex: 1 },
            }}
          >
            <Box>
              <Box
                sx={{
                  height: 250,
                  width: isSmOrBelow ? "100vw" : 400,
                  backgroundImage: `url(${clearblade_team})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: theme.palette.tint,
                    opacity: 0.15,
                    zIndex: theme.zIndex.landingImgOverlay,
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  maxWidth: 400,
                  px: isSmOrBelow ? 2 : 0,
                }}
              >
                I excel at mentoring junior developers, architecting and
                managing large-scale projects, and creating a team culture that
                fosters excitement about the product.
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={4}
            sx={{
              flexDirection: { xs: "column", md: "row" },
              "& > *": { flex: 1 },
            }}
          >
            <Box>
              <Box
                sx={{
                  height: 250,
                  width: isSmOrBelow ? "100vw" : 400,
                  backgroundImage: `url(${playing_guitar})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: theme.palette.tint,
                    opacity: 0.15,
                    zIndex: theme.zIndex.landingImgOverlay,
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  maxWidth: 400,
                  px: isSmOrBelow ? 2 : 0,
                }}
              >
                When I'm not coding? I'm probably writing or performing music,
                perfecting my sourdough skills, or with some friends at a
                boardgame cafe.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </PageView>
  );
}
