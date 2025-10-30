import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

interface BlogPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug, locale } = await params;
  const h = await getTranslations("highlights");
  const posts = h.raw("list");
  const post = posts.find((s: { slug: string }) => s.slug === slug);
  if (!post) return notFound();

  return (
    <article className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {post.description}
        </p>
      </header>

      <div className="relative w-full aspect-video mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      <section
        className="prose prose-invert lg:prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="mt-12 text-sm text-muted-foreground text-center">
        <p className="mb-2">{locale === "en" ? "Tags:" : "Etiquetas:"}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
}
