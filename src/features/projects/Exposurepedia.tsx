import { Box, Typography } from "@mui/material";
import { useIsSmOrBelow } from "../../hooks/useIsSmOrBelow";
import exposurepedia_about from "./assets/exposurepedia_about.png";
import exposurepedia_admin from "./assets/exposurepedia_admin.mov";
import exposurepedia_homepage from "./assets/exposurepedia_home.png";
import exposurepedia_register from "./assets/exposurepedia_register.png";
import exposurepedia_search_movie from "./assets/exposurepedia_search.mov";
import { ProjImg } from "./components/ProjImg";
import { ProjVideo } from "./components/ProjVideo";

export function Exposurepedia() {
  const isMobile = useIsSmOrBelow();

  return (
    <Box
      gap={5}
      display="flex"
      flexDirection="column"
      sx={{ maxWidth: 1200, margin: "auto" }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h4" gutterBottom>
          Exposurepedia{" "}
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          As the Principal Frontend Engineer of Exposurepedia, I built the
          entire frontend application and the associated backend APIs.
          Exposurepedia is a website intended to help Psychology professionals
          find and organize resources for conducting exposure therapy.
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        gap={5}
        flexWrap={isMobile ? "wrap" : "nowrap"}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: isMobile ? 150 : 300,
          }}
        >
          <ProjImg src={exposurepedia_homepage} />
        </Box>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: isMobile ? 150 : 300,
          }}
        >
          <ProjImg src={exposurepedia_about} />
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h5" gutterBottom>
          Search engine
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        gap={5}
        flexWrap={isMobile ? "wrap" : "nowrap"}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: isMobile ? 150 : 300,
          }}
        >
          <ProjVideo src={exposurepedia_search_movie} />
        </Box>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            display: "block",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            This search engine style page allows users to search, filter, and
            bookmark exposure ideas. They can also select exposures and add them
            to custom hierarchy plans, used for treating individual patients.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h5" gutterBottom>
          Authorization
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        gap={5}
        flexWrap={isMobile ? "wrap" : "nowrap"}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            display: "block",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            I built an authorization system that includes authorizing via
            Google, registration, protected routing, and granting of multiple
            types of user roles.
          </Typography>
        </Box>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: isMobile ? 150 : 300,
          }}
        >
          <ProjImg src={exposurepedia_register} />
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h5" gutterBottom>
          Admin portal
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        gap={5}
        flexWrap={isMobile ? "wrap" : "nowrap"}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: isMobile ? 150 : 300,
          }}
        >
          <ProjVideo src={exposurepedia_admin} />
        </Box>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            display: "block",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            This portal allows admin users to approve or deny new user requests
            and review or edit new exposure submissions before adding them to
            the database.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
