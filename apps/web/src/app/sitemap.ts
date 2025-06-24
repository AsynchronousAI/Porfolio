import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/db/v1/post";
import { getPortfolioPosts } from "@/lib/db/v1/portfolio";
import config from "@/config";

const { siteURL } = config;

function mapPostsToSitemap(
  posts: { metadata: { publishedAt: string }; slug: string }[],
  prefix: string,
) {
  return posts.map((post) => ({
    url: `${siteURL}/${prefix}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  const postMaps = mapPostsToSitemap(posts, "post");

  const portfolios = await getPortfolioPosts();
  const portfolioMaps = mapPostsToSitemap(portfolios, "portfolio");

  const routes = ["", "/resume", "/portfolio", "/post", "/gallery", "/blog"].map(
    (route) => ({
      url: `${siteURL}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    }),
  );

  return [...routes, ...postMaps, ...portfolioMaps];
}
