"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface Post {
  id: string;
  title: string;
  description: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  slug: string;
  image: string;
  tags: string[];
}

export default function Blog7() {
  const t = useTranslations("blogSection");
  const h = useTranslations("highlights");

  const tagline = t("tagline");
  const heading = t("heading");
  const description = t("description");
  const posts: Post[] = h.raw("list");

  if (!posts || posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <section className="bg-foreground text-white py-28 px-4 md:px-10">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* === HEADER === */}
        <div className="text-center space-y-6">
          <Badge
            variant="secondary"
            className="text-secondary-color bg-white/10 px-4 py-1"
          >
            {tagline}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {heading}
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            {description}
          </p>
        </div>

        {/* === FEATURED POST === */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl group"
        >
          <Image
            src={featured.image}
            alt={featured.title}
            width={1600}
            height={800}
            className="object-cover w-full h-[450px] md:h-[550px] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

          <div className="absolute bottom-0 p-8 md:p-12 space-y-4">
            <Link href={featured.slug}>
              <h3 className="text-3xl md:text-4xl font-bold max-w-2xl group-hover:text-secondary-color transition-colors">
                {featured.title}
              </h3>
            </Link>
            <p className="text-neutral-300 max-w-xl line-clamp-3">
              {featured.summary}
            </p>
            <Link
              href={featured.slug}
              className="inline-flex items-center text-secondary-color font-semibold hover:underline"
            >
              {t("readMore")} <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </motion.article>

        {/* === GRID OF OTHER POSTS === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rest.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={post.slug}>
                <Card className="overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  <CardContent className="p-6 flex flex-col justify-between h-[230px]">
                    <h3 className="text-xl font-semibold mb-3 text-secondary-color transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-4">
                      {post.summary}
                    </p>
                    <span className="text-secondary-color text-sm font-semibold hover:underline flex items-center">
                      {t("readMore")} <ArrowRight className="ml-2 size-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
