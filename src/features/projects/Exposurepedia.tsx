import { Box, Typography } from "@mui/material";
import { useIsSmOrBelow } from "../../hooks/useIsSmOrBelow";

export function Exposurepedia() {
  const isMobile = useIsSmOrBelow();

  return (
    <Box gap={5} display="flex" flexDirection="column">
      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h4" gutterBottom>
          Exposurepedia{" "}
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          As the the Principal Frontend Engineer of Exposurepedia, I built the
          entire frontend application and the associated backend APIs.
          Exposurepedia is a website intended to help Psychology professionals
          find and organize resources for conducting exposure therapy.
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h5" gutterBottom>
          Search engine
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" gap={5}>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: 300,
          }}
        >
          img or something
          {/* <ProjImg src={ia_homepage} /> */}
        </Box>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: 300,
            display: isMobile ? "none" : "block",
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
          Admin portal
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" gap={5}>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: 300,
          }}
        >
          {/* <ProjImg src={ia_homepage} /> */}
          img or something
        </Box>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: 300,
            display: isMobile ? "none" : "block",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            This portal allows admin users to approve or deny new user requests
            and review or edit new exposure submissions before adding them to
            the database.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h5" gutterBottom>
          Authorization
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" gap={5}>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: 300,
          }}
        >
          {/* <ProjImg src={ia_homepage} /> */}
          img or something
        </Box>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: 300,
            display: isMobile ? "none" : "block",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            I built an authorization system that includes authorizing via
            Google, registration, protected routing, and granting of multiple
            types of user roles.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
