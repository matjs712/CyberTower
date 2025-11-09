import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next/types";

/* === Genera los slugs estáticos por idioma === */
export async function generateStaticParams() {
  const locales = ["es", "en"];
  const allParams: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const t = await getTranslations({ locale, namespace: "highlights" });
    const posts = t.raw("list");
    posts.forEach((post: { slug: string }) => {
      allParams.push({ locale, slug: post.slug });
    });
  }

  return allParams;
}

/* === Metadata dinámica para SEO === */
export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const { slug, locale } = params;
  const t = await getTranslations({ locale, namespace: "highlights" });
  const posts = t.raw("list");
  const post = posts.find((p: { slug: string }) => p.slug === slug);

  if (!post) {
    return {
      title:
        locale === "en"
          ? "Article not found | Cyberhub"
          : "Artículo no encontrado | Cyberhub",
      description:
        locale === "en"
          ? "The requested article could not be found."
          : "El artículo solicitado no existe o fue movido.",
    };
  }

  return {
    title: `${post.title} | Cyberhub`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.image || "/blog-default.jpg",
          alt: post.title,
        },
      ],
    },
  };
}

/* === Página del blog === */
export default async function BlogPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { slug, locale } = params;
  const t = await getTranslations({ locale, namespace: "highlights" });
  const posts = t.raw("list");
  const post = posts.find((p: { slug: string }) => p.slug === slug);

  if (!post) return notFound();

  return (
    <article className="bg-foreground text-white min-h-screen">
      {/* === HERO === */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden">
        <Image
          src={post.image || "/blog-default.jpg"}
          alt={post.title}
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent" />

        {/* ⬇️ Agregamos padding superior para compensar el navbar */}
        <div className="relative z-10 text-center px-6 pb-20 pt-[100px] max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl mb-6">
            {post.description}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {post.tags?.map((tag: string) => (
              <span
                key={tag}
                className="bg-secondary-color/20 text-white px-3 py-1 rounded-full text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* === CONTENIDO === */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-20">
        <div
          className="prose prose-invert lg:prose-lg max-w-none leading-relaxed text-neutral-200"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      {/* === FOOTER === */}
      {/* <footer className="border-t border-white/10 py-12 text-center text-sm text-neutral-100">
        <p>
          {locale === "en" ? "Written by" : "Escrito por"}{" "}
          <span className="text-white font-semibold">{post.author}</span>
        </p>
        <p className="mt-1">
          {locale === "en" ? "Published on" : "Publicado el"}{" "}
          <span className="text-white font-medium">{post.published}</span>
        </p>
      </footer> */}
    </article>
  );
}
