import type { RequestHandler } from "./$types";
import { getBlogPosts } from "$lib/util/getBlogPosts.server";

export const prerender = true;

export const GET: RequestHandler = async () => {
  const posts = await getBlogPosts();

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Mathesar Blog</title>
  <description>Mathesar is a straightforward open source tool that provides a spreadsheet-like interface to a PostgreSQL database. Our web-based interface helps you and your collaborators work with data more independently and comfortably – no technical skills needed.</description>
  <link>https://mathesar.org/blog</link>
  <atom:link href="https://mathesar.org/rss" rel="self" type="application/rss+xml" />
  ${posts
    .map(
      (post) => `
    <item>
      <guid>https://mathesar.org/blog/${post.path}</guid>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.description)}</description>
      <link>https://mathesar.org/blog/${post.path}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/">${escapeXml(post.author)}</dc:creator>
      ${
        post.tags
          ? post.tags
              .map((tag) => `<category>${escapeXml(tag)}</category>`)
              .join("")
          : ""
      }
    </item>
  `,
    )
    .join("")}
</channel>
</rss>`.trim();

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "max-age=0, s-maxage=3600",
    },
  });
};

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}
