import { socialLinks } from "@/lib/site";

type SocialLinksProps = {
  showArrow?: boolean;
};

export function SocialLinks({ showArrow = false }: SocialLinksProps) {
  return socialLinks.map(({ href, label }) => {
    const isExternal = href.startsWith("http");

    return (
      <a
        key={href}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="transition hover:text-white"
      >
        {label}
        {showArrow && " ↗"}
      </a>
    );
  });
}
