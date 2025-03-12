import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useIsSmOrBelow } from "../../hooks/useIsSmOrBelow";
import ia_dashboard_threshold_mapping_movie from "../assets/ia_dashboard_threshold_mappings.mov";
import ia_dashboard_widget_filters_movie from "../assets/ia_dashboard_widget_filters.mov";
import ia_homepage from "../assets/ia_homepage.png";
import { ImageZoomModal } from "./components/ImageZoomModal";
import { ProjVideo } from "./components/ProjVideo";

export function ClearBlade() {
  const isMobile = useIsSmOrBelow();
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);

  return (
    <>
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
            During my time as the Lead Applications Engineer at ClearBlade, I
            have contributed to a variety of projects for the Intelligent Assets
            ecosystem. My work has enabled customers to monitor and control
            their equipment remotely, customize how they visualize their data,
            and receive useful alerts when important events occur. While it's
            impossible to describe every feature I implemented, I have included
            a few key projects that highlight the variety of my work.
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography align="center" variant="h5" gutterBottom>
            Asset tracking
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
              onClick={() => setZoomedImg(ia_homepage)}
              style={{
                backgroundImage: `url(${ia_homepage})`,
                backgroundRepeat: "no-repeat",
                height: "100%",
                backgroundSize: "contain",
                backgroundPosition: "center",
                cursor: "pointer",
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
            <Typography variant="body1" color="text.secondary">
              The home page of Intelligent Assets leverages Mapbox to give users
              live updates as their assets move in real-time. It also provides
              color and icon indicators to alert the user if any assets require
              their attention. This map display allows searching, filtering,
              live-location-following, and more for thousands of assets.
            </Typography>
          </Box>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography align="center" variant="h5" gutterBottom>
            Dashboards
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The Dashboards page allows users to build custom widgets for
            displaying and filtering data. My work allows users to view
            categorical data or trends over time via line graphs, bar graphs,
            gauges, pie charts, and other visualizations. Behind the scenes I
            worked on a complex, generic service for creating the many possible
            SQL queries that result from each widget.
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" gap={5}>
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              height: 300,
              display: isMobile ? "none" : "block",
            }}
          >
            <ProjVideo
              src={ia_dashboard_threshold_mapping_movie}
              onClick={() => setZoomedImg(ia_dashboard_threshold_mapping_movie)}
            />
          </Box>
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              height: 300,
              display: isMobile ? "none" : "block",
            }}
          >
            <ProjVideo
              src={ia_dashboard_widget_filters_movie}
              onClick={() => setZoomedImg(ia_dashboard_widget_filters_movie)}
            />
          </Box>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography align="center" variant="h5" gutterBottom>
            Roles and permissions architecture
          </Typography>
          <Typography align="center" variant="body1" color="text.secondary">
            Intelligent Assets supports many kinds of users, and therefore
            requires a complex roles and permissions architecture. Users must be
            able to build custom roles and add optional constraints to
            permissions. I architected the data structures necessary to achieve
            these business needs, as well as the UI that goes with it.
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography align="center" variant="h5" gutterBottom>
            AI chatbot
          </Typography>
          <Typography align="center" variant="body1" color="text.secondary">
            I collaborated with ClearBlade's AI team to construct a chat bot
            that would guide a user through our set up process. It can assist
            you in creating virtual assets to represent your hardware, as well
            as creating rules that trigger alerts when the right conditions are
            met.
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography align="center" variant="h5" gutterBottom>
            E-commerce store
          </Typography>
          <Typography align="center" variant="body1" color="text.secondary">
            I built the Intelligent Assets store, which allows customers to
            purchase IoT hardware individually or in bundles. My work included
            constructing the complete shopping experience, the cart display, the
            checkout process, and payment processing using Stripe, as well as a
            billing page for admin users to view and manage subscriptions.
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography align="center" variant="h5" gutterBottom>
            Microfrontends
          </Typography>
          <Typography align="center" variant="body1" color="text.secondary">
            While Intelligent Assets typically serves as a generic platform that
            can map to any customer's needs, occasionally customers required
            entirely custom parts of the UI. To solve this elegantly, I
            pioneered a plug-in architecture within the app, using Single-Spa's
            microfrontends. The microfrontends allow customers to drop custom
            applications into sections of the UI. For example, if a customer
            requires unique dashboard configurations, they can skip the built-in
            widgets and connect their own microfrontend dashboard instead, while
            still accessing all of the utilities and data that Intelligent
            Assets offers.
          </Typography>
        </Box>
      </Box>
      <ImageZoomModal
        isVideo={zoomedImg?.endsWith(".mov")}
        imageUrl={zoomedImg}
        isOpen={!!zoomedImg}
        onClose={() => setZoomedImg(null)}
      />
    </>
  );
}
