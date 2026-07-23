import resume from "../assets/resume.pdf";

/** Email used across the site (footer, mailto links). */
export const EMAIL = "sasapettyjohn@gmail.com";

/** External contact links, in display order. Single source for nav/footer. */
export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sasa-schwartz/" },
  { label: "GitHub", href: "https://github.com/seschwartz8" },
  // Résumé is a bundled PDF asset; it downloads rather than navigating away.
  { label: "Resume", href: resume, download: "S_Pettyjohn_Resume.pdf" },
] as const;
