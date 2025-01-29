import type { RequestHandler } from "./$types";
import path from "path";
import fs from "fs/promises";
import { getBlogPosts } from "$lib/util/getBlogPosts.server";

export const prerender = true;

export const GET: RequestHandler = async () => {
  // Get all blog posts
  const posts = await getBlogPosts();

  // Get all pages from the `routes` directory
  const routesDir = path.resolve("src/routes");
  const pages = await getPages(routesDir);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://mathesar.org/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Static Pages -->
  ${pages
    .map(
      (page) => `
  <url>
    <loc>https://mathesar.org/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  `,
    )
    .join("")}
  <!-- Blog Posts -->
  ${posts
    .map(
      (post) => `
  <url>
    <loc>https://mathesar.org/blog/${post.path}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  `,
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "max-age=0, s-maxage=3600",
    },
  });
};

// Helper function to get all pages
async function getPages(routesDir: string): Promise<string[]> {
  const entries = await fs.readdir(routesDir, { withFileTypes: true });

  const pages: string[] = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const pagePath = path.join(routesDir, entry.name, "+page.svelte");
      try {
        // Check if the directory contains `_page.svelte`
        await fs.access(pagePath);
        if (entry.name !== "posts") {
          pages.push(entry.name); // Exclude "posts" since it's handled separately
        }
      } catch {
        // Skip directories without `_page.svelte`
      }
    }
  }

  return pages;
}
