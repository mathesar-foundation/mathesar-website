<script>
  import { page } from "$app/state";

  export let title = "Mathesar - Open source UI for Postgres databases";
  export let description =
    "Mathesar is a straightforward open source tool that provides a spreadsheet-like interface to a PostgreSQL database. Our web-based interface helps you and your collaborators work with data more independently and comfortably – no technical skills needed.";
  export let image = "https://mathesar.org/og/og-home.png";
</script>

<svelte:head>
  <title>{title} | Mathesar</title>
  <meta name="description" content={description} />
  <meta property="og_site_name" content="mathesar.org" />
  <meta
    property="og:url"
    content="https://mathesar.org{page.url.pathname.toString()}"
  />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="mathesar.org" />
  <meta
    property="twitter:url"
    content="https://mathesar.org{page.url.pathname.toString()}"
  />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />

  {@html `<script type="application/ld+json">{
   "@context": "https://schema.org",
   "@type": "Website",
   "name": "${title} | Mathesar",
   "url": "https//mathesar.org${page.url.pathname.toString()}",
   "logo": "${image}"
  }</script>`}
</svelte:head>
