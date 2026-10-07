import ReactMarkdown from "react-markdown";
import { getPost } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <article>
        <header className="mb-12">
          <p className="mb-3 text-sm text-gray-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="mt-4 text-xl text-gray-600">
              {post.subtitle}
            </p>
          )}
        </header>

        <div className="text-base">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="mb-6 mt-14 text-3xl font-bold tracking-tight">
                {children}
              </h1>
            ),

            h2: ({ children }) => (
              <h2 className="mb-5 mt-12 text-2xl font-semibold tracking-tight">
                {children}
              </h2>
            ),

            h3: ({ children }) => (
              <h3 className="mb-4 mt-10 text-xl font-semibold tracking-tight">
                {children}
              </h3>
            ),

            h4: ({ children }) => (
              <h4 className="mb-3 mt-8 text-lg font-semibold">
                {children}
              </h4>
            ),

            p: ({ children }) => (
              <p className="mb-6 leading-8">
                {children}
              </p>
            ),

            a: ({ href, children }) => (
              <a
                href={href}
                className="underline underline-offset-4 hover:text-gray-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),

            ul: ({ children }) => (
              <ul className="mb-6 ml-6 list-disc space-y-2">
                {children}
              </ul>
            ),

            ol: ({ children }) => (
              <ol className="mb-6 ml-6 list-decimal space-y-2">
                {children}
              </ol>
            ),

            li: ({ children }) => (
              <li className="leading-7">
                {children}
              </li>
            ),

            blockquote: ({ children }) => (
              <blockquote className="my-8 border-l-4 border-gray-700 pl-6 italic text-gray-400">
                {children}
              </blockquote>
            ),

            code: ({ children }) => (
              <code className="rounded bg-gray-900 px-1.5 py-0.5 font-mono text-sm">
                {children}
              </code>
            ),

            pre: ({ children }) => (
              <pre className="mb-6 overflow-x-auto rounded-lg bg-gray-900 p-5 font-mono text-sm leading-6">
                {children}
              </pre>
            ),

            hr: () => (
              <hr className="my-10 border-gray-800" />
            ),

            strong: ({ children }) => (
              <strong className="font-semibold text-white">
                {children}
              </strong>
            ),

            em: ({ children }) => (
              <em className="italic">
                {children}
              </em>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      </article>
    </main>
  );
}