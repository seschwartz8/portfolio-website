export enum appRoutes {
  landing = "",
  about = "about",
  projects = "projects",
}

export const AppRouteLabels = {
  [appRoutes.landing]: "",
  [appRoutes.about]: "About",
  [appRoutes.projects]: "Projects",
};

export const navBarRoutes = [appRoutes.about, appRoutes.projects];
