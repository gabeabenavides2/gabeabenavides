import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest">
          Blog
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          Writing
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          My thoughts 
        </p>
      </header>

      <section>
        {posts.map((post) => (
          <article key={post.slug} className="border-t py-8">
            <p className="mb-2 text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:underline">
                {post.title}
              </h2>
            </Link>

            {post.subtitle && (
              <p className="mt-2 text-lg text-gray-600">
                {post.subtitle}
              </p>
            )}

            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block font-medium hover:underline"
            >
              Read article →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}