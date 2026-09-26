import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition hover:text-zinc-300"
        >
          GB
        </Link>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/projects" className="transition hover:text-white">
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

      {/* Hero */}
      <section className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="max-w-3xl">
          {/* Focus */}
          <p className="mb-4 font-mono text-sm text-zinc-500">
            COMPUTER SCIENCE · DEVOPS · SOFTWARE ENGINEERING · AI · CLOUD
          </p>

          {/* Name */}
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Gabe Benavides
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Computer Science student at Michigan State University building
            software, infrastructure, and AI-powered systems.
          </p>

          {/* Social links */}
          <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-zinc-500">
            <a
              href="https://github.com/gabeabenavides2"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-benavides-348165214/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:gabeabenavides@gmail.com"
              className="transition hover:text-white"
            >
              Email ↗
            </a>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="border-t border-zinc-900 pt-16">
          <p className="mb-3 font-mono text-xs text-zinc-600">
            EXPLORE
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            More about what I do.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {/* Projects */}
            <Link
              href="/projects"
              className="group rounded-xl border border-zinc-800 p-6 transition hover:border-zinc-600 hover:bg-zinc-950"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-600">
                  01
                </span>

                <span className="text-zinc-600 transition group-hover:text-white">
                  →
                </span>
              </div>

              <h3 className="mt-8 text-xl font-medium">
                Projects
              </h3>

              <p className="mt-3 leading-7 text-zinc-500">
                Software, infrastructure, AI systems, and other things
                I&apos;m building.
              </p>
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className="group rounded-xl border border-zinc-800 p-6 transition hover:border-zinc-600 hover:bg-zinc-950"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-600">
                  02
                </span>

                <span className="text-zinc-600 transition group-hover:text-white">
                  →
                </span>
              </div>

              <h3 className="mt-8 text-xl font-medium">
                Blog
              </h3>

              <p className="mt-3 leading-7 text-zinc-500">
                Thoughts on technology, software engineering, AI, and
                what I&apos;m learning.
              </p>
            </Link>

            {/* Resume */}
            <a
              href="/Gabriel-Benavides-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-zinc-800 p-6 transition hover:border-zinc-600 hover:bg-zinc-950"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-600">
                  03
                </span>

                <span className="text-zinc-600 transition group-hover:text-white">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-xl font-medium">
                Resume
              </h3>

              <p className="mt-3 leading-7 text-zinc-500">
                My experience, education, technical skills, and
                professional background.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-zinc-300">
              Gabe Benavides
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Built with Next.js · Hosted on my VPS
            </p>
          </div>

          <div className="flex items-center gap-5 text-sm text-zinc-500">
            <a
              href="https://github.com/gabeabenavides2"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="YOUR_LINKEDIN_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:YOUR_EMAIL"
              className="transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}