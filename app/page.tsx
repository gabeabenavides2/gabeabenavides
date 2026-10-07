import { ExploreCard } from "@/components/explore-card";
import { SiteFooter } from "@/components/site-footer";
import { SocialLinks } from "@/components/social-links";
import { resumeHref } from "@/lib/site";

export default function Home() {
  return (
    <main className="min-h-screen">

      <section className="mx-auto flex min-h-[65vh] w-[90%] max-w-[1600px] items-center">
        <div className="max-w-5xl">
          <p className="mb-5 font-mono text-sm text-zinc-500">
            SOFTWARE ENGINEERING · AI · CLOUD
          </p>
          <h1 className="text-6xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
            Gabe Benavides
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-400 lg:text-2xl">
            Computer Science student at Michigan State University building
            software, infrastructure, and AI-powered systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-500">
            <SocialLinks showArrow />
          </div>
        </div>
      </section>

      <section className="mx-auto w-[90%] max-w-[1600px] pb-24">
        <div className="border-t border-zinc-900 pt-12">
          <p className="mb-3 font-mono text-xs text-zinc-600">EXPLORE</p>
          <h2 className="text-3xl font-semibold tracking-tight">
            More about what I do.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ExploreCard
              href="/projects"
              index="01"
              title="Projects"
              description="Software, infrastructure, AI systems, and other things I’m building."
            />
            <ExploreCard
              href="/blog"
              index="02"
              title="Blog"
              description="Thoughts on technology, software engineering, AI, and what I’m learning."
            />
            <ExploreCard
              href={resumeHref}
              index="03"
              title="Resume"
              description="My experience, education, technical skills, and professional background."
              external
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
