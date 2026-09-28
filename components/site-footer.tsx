import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto flex w-[90%] max-w-[1600px] flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-300">Gabe Benavides</p>
          <p className="mt-1 text-xs text-zinc-600">
            Built with Next.js · Hosted on my VPS
          </p>
        </div>

        <div className="flex items-center gap-5 text-sm text-zinc-500">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
