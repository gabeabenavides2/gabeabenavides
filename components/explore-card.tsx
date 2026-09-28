import Link from "next/link";
import type { ReactNode } from "react";

type ExploreCardProps = {
  href: string;
  index: string;
  title: string;
  description: ReactNode;
  external?: boolean;
};

export function ExploreCard({
  href,
  index,
  title,
  description,
  external = false,
}: ExploreCardProps) {
  const content = (
    <>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-zinc-600">{index}</span>
        <span className="text-zinc-600 transition group-hover:text-white">
          {external ? "↗" : "→"}
        </span>
      </div>
      <h3 className="mt-12 text-2xl font-medium">{title}</h3>
      <p className="mt-4 max-w-md leading-7 text-zinc-500">{description}</p>
    </>
  );
  const className =
    "group rounded-xl border border-zinc-800 p-8 transition hover:border-zinc-600 hover:bg-zinc-950";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
