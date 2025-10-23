import { notFound } from "next/navigation";
import Image from "next/image";
import { caseStudiesData } from "@/components/data";

interface BlogPageProps {
  params: {
    id: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  // Convertimos el id de la URL a número y buscamos la noticia
  const post = caseStudiesData.find((item) => item.id === Number(params.id));

  // Si no existe, mostramos página 404
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
        />
      </div>

      <section
        className="prose prose-invert lg:prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="mt-12 text-sm text-muted-foreground text-center">
        <p>Etiquetas:</p>
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
