import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen">
      <nav className="mx-auto flex w-[90%] max-w-[1600px] items-center justify-between py-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition hover:text-zinc-300"
        >
          GB
        </Link>

        <div className="flex items-center gap-8 text-sm text-zinc-400">
          <Link href="/projects" className="text-white">
            Projects
          </Link>

          <Link href="/blog" className="transition hover:text-white">
            Blog
          </Link>

          <a
            href="/Gabriel-Benavides-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Resume
          </a>
        </div>
      </nav>

      <section className="mx-auto flex min-h-[75vh] w-[90%] max-w-[1600px] items-center">
        <div>
          <p className="mb-4 font-mono text-sm text-zinc-500">
            PROJECTS
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Under Development.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-500">
            I&apos;m currently putting together a collection of software,
            infrastructure, and AI projects I&apos;ve worked on.
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