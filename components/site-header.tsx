import Link from "next/link";

import {
  navigationLinks,
  type NavigationHref,
  resumeHref,
} from "@/lib/site";

type SiteHeaderProps = {
  activePath?: NavigationHref;
};

export function SiteHeader({ activePath }: SiteHeaderProps) {
  return (
    <nav className="mx-auto flex w-[90%] max-w-[1600px] items-center justify-between py-6">
      <Link
        href="/"
        className="text-lg font-semibold tracking-tight transition hover:text-zinc-300"
      >
        GB
      </Link>

      <div className="flex items-center gap-8 text-sm text-zinc-400">
        {navigationLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={
              activePath === href ? "text-white" : "transition hover:text-white"
            }
          >
            {label}
          </Link>
        ))}

        <a
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
