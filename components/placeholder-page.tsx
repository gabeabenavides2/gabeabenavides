import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import type { NavigationHref } from "@/lib/site";

type PlaceholderPageProps = {
  activePath: NavigationHref;
  eyebrow: string;
  description: string;
};

export function PlaceholderPage({
  activePath,
  eyebrow,
  description,
}: PlaceholderPageProps) {
  return (
    <main className="min-h-screen">
      <SiteHeader activePath={activePath} />

      <section className="mx-auto flex min-h-[75vh] w-[90%] max-w-[1600px] items-center">
        <div>
          <p className="mb-4 font-mono text-sm text-zinc-500">{eyebrow}</p>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Under Development.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-500">
            {description}
          </p>
          <Link
            href="/"
            className="mt-8 inline-block text-sm text-zinc-400 transition hover:text-white"
          >
            ← Back home
          </Link>
        </div>
      </section>
    </main>
  );
}
