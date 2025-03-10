import { Box, Typography } from "@mui/material";
import { useIsSmOrBelow } from "../../../hooks/useIsSmOrBelow";
import portfolio from "../assets/portfolio_color.png";

export function ClearBlade() {
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
          Intelligent Assets
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          During my time as the Lead Applications Engineer at ClearBlade, I have
          contributed to a variety of projects for the Intelligent Assets
          ecosystem. My work has enabled customers to monitor and control their
          equipment remotely, customize how they visualize their data, and
          receive useful alerts when important events occur. While it's
          impossible to describe every feature I implemented, I have included a
          few key projects that highlight the variety of my work.
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h5" gutterBottom>
          Asset tracking
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          home map page with live updates, dashboards
        </Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" gap={5}>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: 300,
          }}
        >
          <div
            style={{
              backgroundImage: `url(${portfolio})`,
              backgroundRepeat: "no-repeat",
              height: "100%",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            width: isMobile ? "100%" : "50%",
            height: 300,
            display: isMobile ? "none" : "block",
          }}
        >
          <Typography variant="h6">details</Typography>
        </Box>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h5" gutterBottom>
          Dashboards
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          line graphs, bar, pie charts, building a widget, filtering etc
          (include a video)
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h5" gutterBottom>
          Roles and permissions architecture
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          custom roles page, database tables, constraints, cacheing and handling
          of permissions on backend and frontend
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h5" gutterBottom>
          AI chatbot
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          show custom-built chatbot
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h5" gutterBottom>
          E-commerce store
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          show cart, checkout, and payment processing, stripe, etc
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography align="center" variant="h5" gutterBottom>
          Microfrontends
        </Typography>
        <Typography align="center" variant="body1" color="text.secondary">
          show example of microfrontends (dashboards, widgets, etc)
        </Typography>
      </Box>
    </Box>
  );
}
