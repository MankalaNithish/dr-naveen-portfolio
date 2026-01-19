import { MetadataRoute } from "next";

export const runtime = "nodejs";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio"],
      },
    ],
    sitemap: "http://localhost:3002/sitemap.xml",
  };
}
