import { notFound } from "next/navigation";
import Image from "next/image";
import { caseStudiesData as caseStudiesDataEs } from "@/components/data/caseStudiesData.es";
import { caseStudiesData as caseStudiesDataEn } from "@/components/data/caseStudiesData.en";

interface BlogPageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id, locale } = await params;

  // Cargar data según idioma
  const data = locale === "en" ? caseStudiesDataEn : caseStudiesDataEs;
  const post = data.find((item) => item.id === Number(id));

  // Si no existe, renderiza la 404
  if (!post) return notFound();

  return (
    <article className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
      {/* === HEADER === */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {post.description}
        </p>
      </header>

      {/* === IMAGEN PRINCIPAL === */}
      <div className="relative w-full aspect-video mb-12">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      {/* === CONTENIDO HTML === */}
      <section
        className="prose prose-invert lg:prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* === FOOTER (TAGS) === */}
      <footer className="mt-12 text-sm text-muted-foreground text-center">
        <p className="mb-2">{locale === "en" ? "Tags:" : "Etiquetas:"}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {post.tags.map((tag) => (
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
