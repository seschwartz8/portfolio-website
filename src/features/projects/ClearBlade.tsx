import { Box, Typography } from "@mui/material";
import { useIsSmOrBelow } from "../../hooks/useIsSmOrBelow";
import ia_chatbot2 from "./assets/ia_chatbot2.png";
import ia_chatbot_creating_assets_movie from "./assets/ia_chatbot_creating_assets.mov";
import ia_custom_roles_movie from "./assets/ia_creating_custom_role.mov";
import ia_dashboard_threshold_mapping_movie from "./assets/ia_dashboard_threshold_mappings.mov";
import ia_dashboard_widget_filters_movie from "./assets/ia_dashboard_widget_filters.mov";
import ia_homepage from "./assets/ia_homepage.png";
import ia_microfrontend_dashboard from "./assets/ia_microfrontend_dashboard.png";
import ia_store from "./assets/ia_store.png";
import ia_store_checkout from "./assets/ia_store_checkout.png";
import { ProjImg } from "./components/ProjImg";
import { ProjVideo } from "./components/ProjVideo";

export function ClearBlade() {
  const isMobile = useIsSmOrBelow();

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

        <Box
          display="flex"
          justifyContent="space-between"
          gap={5}
          flexWrap={isMobile ? "wrap" : "nowrap"}
        >
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              height: 300,
            }}
          >
            <ProjImg src={ia_homepage} />
          </Box>
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              display: "block",
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

        <Box
          display="flex"
          justifyContent="space-between"
          gap={5}
          flexWrap={isMobile ? "wrap" : "nowrap"}
        >
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              height: 300,
              display: "block",
            }}
          >
            <ProjVideo src={ia_dashboard_threshold_mapping_movie} />
          </Box>
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              height: 300,
              display: "block",
            }}
          >
            <ProjVideo src={ia_dashboard_widget_filters_movie} />
          </Box>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography align="center" variant="h5" gutterBottom>
            Roles and permissions
          </Typography>
          <Typography align="center" variant="body1" color="text.secondary">
            Intelligent Assets supports many kinds of users, and therefore
            requires a complex roles and permissions architecture. I architected
            the data structures necessary to achieve these business needs, as
            well as the UI that goes with it. Additionally, I designed the IAM
            architecture for two other ClearBlade applications, and implemented
            a system that allows roles from one application to map to the
            others.
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
              height: 300,
              display: "block",
            }}
          >
            <ProjVideo src={ia_custom_roles_movie} />
          </Box>
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              display: "block",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              Users must be able to build custom roles and add optional
              constraints to permissions. When creating a custom role you can
              use an existing role as a template, or start fresh. You can
              customize every permission that users with the role will have, and
              the UI will limit their access on the frontend and backend
              accordingly.
            </Typography>
          </Box>
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
        <Box
          display="flex"
          justifyContent="space-between"
          gap={5}
          flexWrap={isMobile ? "wrap" : "nowrap"}
        >
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              height: 300,
              display: "block",
            }}
          >
            <ProjVideo src={ia_chatbot_creating_assets_movie} />
          </Box>
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              height: 300,
              display: "block",
            }}
          >
            <ProjImg src={ia_chatbot2} />
          </Box>
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
        <Box
          display="flex"
          justifyContent="space-between"
          gap={5}
          flexWrap={isMobile ? "wrap" : "nowrap"}
        >
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              height: 300,
              display: "block",
            }}
          >
            <ProjImg src={ia_store} />
          </Box>
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              height: 300,
              display: "block",
            }}
          >
            <ProjImg src={ia_store_checkout} />
          </Box>
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
        <Box
          display="flex"
          justifyContent="space-between"
          gap={5}
          flexWrap={isMobile ? "wrap" : "nowrap"}
        >
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              height: 300,
              display: "block",
            }}
          >
            <ProjImg src={ia_microfrontend_dashboard} />
          </Box>
          <Box
            sx={{
              width: isMobile ? "100%" : "50%",
              display: "block",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              The microfrontend dashboards give you a completely clean slate to
              build whatever you want within the page. Here is an example of a
              completely custom diagram that is being rendered using a
              microfrontend application.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
