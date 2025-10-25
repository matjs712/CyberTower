"use client";

import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

const Blog7 = () => {
  const t = useTranslations("blogSection");

  const tagline = t("tagline");
  const heading = t("heading");
  const description = t("description");
  const posts: Post[] = t.raw("posts");

  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            {tagline}
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground mb-8 md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
            >
              <div className="aspect-16/9 w-full">
                <Link
                  href={post.url}
                  className="fade-in transition-opacity duration-200 hover:opacity-70"
                >
                  <Image
                    src={post.image}
                    width={400}
                    height={400}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                  />
                </Link>
              </div>

              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <Link href={post.url}>{post.title}</Link>
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>

              <CardFooter>
                <Link
                  href={post.url}
                  className="text-foreground flex items-center hover:underline"
                >
                  {t("readMore")}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog7;
