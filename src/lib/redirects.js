// Includes redirects for our old site

/**
 * @type {Record<string, string>}
 */
export const redirects = {
  // Previous Jekyll site redirects

  // Static Pages
  "/faq.html": "/about",
  "/roadmap.html": "/product",
  "/non-technical-expert.html": "/product",
  "/software-engineer.html": "/product",
  "/sponsor.html": "/donate",

  // Blog Tags
  "/blog/tag/announcement": "/blog",
  "/blog/tag/event": "/blog",
  "/blog/tag/interview": "/blog",
  "/blog/tag/release": "/blog",
  "/blog/tag/video": "/blog",

  // Blog Authors
  "/blog/authors/kriti_godey": "/blog",
  "/blog/authors/mathesar_foundation": "/blog",
  "/blog/authors/sean_colsen": "/blog",

  // End previous Jekyll site redirects

  "/feed.xml": "/rss.xml",
  "/rss": "/rss.xml",
  "/feed": "/rss.xml",
  "/sitemap": "/sitemap.xml",

  // Erroneous URL redirect
  "/blog/2025/05/21/release-0-3-0": "/blog/2025/06/23/release-0-3-0"
};
