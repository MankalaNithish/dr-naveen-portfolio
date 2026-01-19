import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3002";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch ONLY slugs (fast + safe)
  const insights: { slug: { current: string }; publishedAt: string }[] =
    await client.fetch(`
      *[_type == "insight" && defined(slug.current)]{
        "slug": slug.current,
        publishedAt
      }
    `);

  const insightUrls = insights.map((insight) => ({
    url: `${SITE_URL}/insights/${insight.slug}`,
    lastModified: insight.publishedAt
      ? new Date(insight.publishedAt)
      : new Date(),
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/insights`,
      lastModified: new Date(),
    },
    ...insightUrls,
  ];
}
