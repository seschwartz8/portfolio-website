export enum appRoutes {
  landing = '',
  about = 'about',
  projects = 'projects',
  contact = 'contact',
}

export const AppRouteLabels = {
  [appRoutes.landing]: '',
  [appRoutes.about]: 'About',
  [appRoutes.projects]: 'Projects',
  [appRoutes.contact]: 'Contact',
};

export const navBarRoutes = [
  appRoutes.about,
  appRoutes.projects,
  appRoutes.contact,
];
