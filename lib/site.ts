export const resumeHref = "/Gabriel-Benavides-Resume.pdf";

export const navigationLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
] as const;

export const socialLinks = [
  { href: "https://github.com/gabeabenavides2", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/gabriel-benavides-348165214",
    label: "LinkedIn",
  },
  { href: "mailto:Benavi59@msu.edu", label: "Email" },
] as const;

export type NavigationHref = (typeof navigationLinks)[number]["href"];
