import { client } from "@/sanity/lib/client";
import { insightBySlugQuery } from "@/lib/queries";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";


type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;

  const insight = await client.fetch(
    `*[_type=="insight" && slug.current==$slug][0]{
      title,
      summary
    }`,
    { slug }
  );

  if (!insight) return {};

  return {
    title: insight.title,
    description: insight.summary,
    openGraph: {
      title: insight.title,
      description: insight.summary,
      type: "article",
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;

  const insight = await client.fetch(insightBySlugQuery, {
    slug,
  });

  if (!insight) {
    return <div className="p-8">Insight not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-serif mb-4">
        {insight.title}
      </h1>

      <p className="text-sm text-neutral-500 mb-10">
        {new Date(insight.publishedAt).toLocaleDateString()}
      </p>

      <div className="prose prose-neutral max-w-none">
        <PortableText value={insight.body} />
      </div>
    </article>
  );
}
