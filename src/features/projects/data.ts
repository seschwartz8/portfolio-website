/**
 * Project content, grouped exactly as the original site groups it. Copy is
 * preserved verbatim from the original repo; each sub-section is paired with the
 * matching screenshot or video clip that already lives in this repo's assets.
 */

// ClearBlade — Intelligent Assets
import iaHomepage from "./assets/ia_homepage.png";
import iaDashboards from "./assets/ia_dashboard_threshold_mappings.mov";
import iaRoles from "./assets/ia_creating_custom_role.mov";
import iaChatbot from "./assets/ia_chatbot_creating_assets.mov";
import iaStore from "./assets/ia_store.png";
import iaMicrofrontend from "./assets/ia_microfrontend_dashboard.png";
// Exposurepedia
import expSearch from "./assets/exposurepedia_search.mov";
import expRegister from "./assets/exposurepedia_register.png";
import expAdmin from "./assets/exposurepedia_admin.mov";
// Personal
import portfolio from "./assets/portfolio_color.png";

export type MediaType = "IMAGE" | "VIDEO";

export interface ProjectSection {
  heading: string;
  mediaType: MediaType;
  /** Bundled asset URL — a still (IMAGE) or a video clip (VIDEO). */
  media: string;
  /** Alt text (images) / accessible label (videos). */
  alt: string;
  description: string;
}

export interface ProjectGroup {
  id: string;
  /** Tab label. */
  label: string;
  /** Display title. */
  title: string;
  /** Role tag shown beside the title. */
  role: string;
  intro: string;
  sections: ProjectSection[];
}

export const projectGroups: ProjectGroup[] = [
  {
    id: "clearblade",
    label: "ClearBlade",
    title: "Intelligent Assets",
    role: "LEAD APPLICATIONS ENGINEER",
    intro:
      "During my time as the Lead Applications Engineer at ClearBlade, I have contributed to a variety of projects for the Intelligent Assets ecosystem. My work has enabled customers to monitor and control their equipment remotely, customize how they visualize their data, and receive useful alerts when important events occur. While it's impossible to describe every feature I implemented, I have included a few key projects that highlight the variety of my work.",
    sections: [
      {
        heading: "Asset tracking",
        mediaType: "IMAGE",
        media: iaHomepage,
        alt: "Intelligent Assets home page with a live asset-tracking map",
        description:
          "The home page of Intelligent Assets leverages Mapbox to give users live updates as their assets move in real-time. It also provides color and icon indicators to alert the user if any assets require their attention. This map display allows searching, filtering, live-location-following, and more for thousands of assets.",
      },
      {
        heading: "Dashboards",
        mediaType: "VIDEO",
        media: iaDashboards,
        alt: "Configuring dashboard widget threshold mappings",
        description:
          "The Dashboards page allows users to build custom widgets for displaying and filtering data. My work allows users to view categorical data or trends over time via line graphs, bar graphs, gauges, pie charts, and other visualizations. Behind the scenes I worked on a complex, generic service for creating the many possible SQL queries that result from each widget.",
      },
      {
        heading: "Roles and permissions",
        mediaType: "VIDEO",
        media: iaRoles,
        alt: "Creating a custom role with granular permissions",
        description:
          "Intelligent Assets supports many kinds of users, and therefore requires a complex roles and permissions architecture. I architected the data structures necessary to achieve these business needs, as well as the UI that goes with it. Additionally, I designed the IAM architecture for two other ClearBlade applications, and implemented a system that allows roles from one application to map to the others.",
      },
      {
        heading: "AI chatbot",
        mediaType: "VIDEO",
        media: iaChatbot,
        alt: "The AI chatbot creating virtual assets during setup",
        description:
          "I collaborated with ClearBlade's AI team to construct a chat bot that would guide a user through our set up process. It can assist you in creating virtual assets to represent your hardware, as well as creating rules that trigger alerts when the right conditions are met.",
      },
      {
        heading: "E-commerce store",
        mediaType: "IMAGE",
        media: iaStore,
        alt: "The Intelligent Assets e-commerce store",
        description:
          "I built the Intelligent Assets store, which allows customers to purchase IoT hardware individually or in bundles. My work included constructing the complete shopping experience, the cart display, the checkout process, and payment processing using Stripe, as well as a billing page for admin users to view and manage subscriptions.",
      },
      {
        heading: "Microfrontends",
        mediaType: "IMAGE",
        media: iaMicrofrontend,
        alt: "A custom microfrontend dashboard embedded in Intelligent Assets",
        description:
          "While Intelligent Assets typically serves as a generic platform that can map to any customer's needs, occasionally customers required entirely custom parts of the UI. To solve this elegantly, I pioneered a plug-in architecture within the app, using Single-Spa's microfrontends. The microfrontends allow customers to drop custom applications into sections of the UI. For example, if a customer requires unique dashboard configurations, they can skip the built-in widgets and connect their own microfrontend dashboard instead, while still accessing all of the utilities and data that Intelligent Assets offers.",
      },
    ],
  },
  {
    id: "exposurepedia",
    label: "Exposurepedia",
    title: "Exposurepedia",
    role: "PRINCIPAL FRONTEND ENGINEER",
    intro:
      "As the Principal Frontend Engineer of Exposurepedia, I built the entire frontend application and the associated backend APIs. Exposurepedia is a website intended to help Psychology professionals find and organize resources for conducting exposure therapy.",
    sections: [
      {
        heading: "Search engine",
        mediaType: "VIDEO",
        media: expSearch,
        alt: "Searching and filtering exposure ideas",
        description:
          "This search engine style page allows users to search, filter, and bookmark exposure ideas. They can also select exposures and add them to custom hierarchy plans, used for treating individual patients.",
      },
      {
        heading: "Authorization",
        mediaType: "IMAGE",
        media: expRegister,
        alt: "The Exposurepedia registration page",
        description:
          "I built an authorization system that includes authorizing via Google, registration, protected routing, and granting of multiple types of user roles.",
      },
      {
        heading: "Admin portal",
        mediaType: "VIDEO",
        media: expAdmin,
        alt: "The admin portal reviewing user requests and submissions",
        description:
          "This portal allows admin users to approve or deny new user requests and review or edit new exposure submissions before adding them to the database.",
      },
    ],
  },
  {
    id: "personal",
    label: "Personal",
    title: "My portfolio website",
    role: "BUILT FROM SCRATCH",
    intro:
      "The website you are currently looking at was built by me from scratch!",
    sections: [
      {
        heading: "The site itself",
        mediaType: "IMAGE",
        media: portfolio,
        alt: "The portfolio website",
        description:
          "I built this website using React, Typescript, and MUI. It is deployed using Firebase, and the source code is available on my GitHub. It's not terribly complex as web development goes, but I hope it helps you get a better sense of who I am and what I've worked on.",
      },
    ],
  },
];
