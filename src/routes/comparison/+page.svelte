<script lang="ts">
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import Seo from "$lib/components/SEO.svelte";
  import Stickers from "$lib/components/Stickers.svelte";

  import ComparisonTable from "$lib/components/ComparisonTable.svelte";

  const comparisonData = {
    competitors: [
      {
        id: "airtable",
        name: "Airtable",
      },
      {
        id: "nocodb",
        name: "NocoDB",
      },
      {
        id: "baserow",
        name: "Baserow",
      },
      {
        id: "mathesar",
        name: "Mathesar",
      },
    ],
    features: [
      {
        id: "open-source",
        name: "Open Source",
      },
      {
        id: "self-hosted",
        name: "Self Hosted",
      },
      {
        id: "spreadsheet-interface",
        name: "Spreadsheet Interface",
      },
      {
        id: "supports-postgres",
        name: "Supports Postgres",
      },
      {
        id: "postgres-permissions",
        name: "Uses Postgres Permissions",
      },
      {
        id: "minimal-metadata",
        name: "Minimal Metadata",
      },
      {
        id: "no-duplicate-data",
        name: "Does not duplicate data",
      },
      {
        id: "unlimited-capacity",
        name: "Unlimited capacity",
      },
      {
        id: "unlimited-users",
        name: "Unlimited users",
      },
      {
        id: "sso",
        name: "Free Single Sign-on support",
      },
    ],
    supportMatrix: {
      "open-source": {
        airtable: { level: "none" },
        nocodb: { level: "full" },
        baserow: { level: "partial", note: "^" },
        mathesar: { level: "full" },
      },
      "self-hosted": {
        airtable: { level: "none" },
        nocodb: { level: "partial", note: "*" },
        baserow: { level: "partial", note: "*" },
        mathesar: { level: "full" },
      },
      "spreadsheet-interface": {
        airtable: { level: "full" },
        nocodb: { level: "full" },
        baserow: { level: "full" },
        mathesar: { level: "full" },
      },
      "supports-postgres": {
        airtable: { level: "none" },
        nocodb: { level: "partial", note: "+" },
        baserow: { level: "full" },
        mathesar: { level: "full" },
      },
      "postgres-permissions": {
        airtable: { level: "none" },
        nocodb: { level: "none" },
        baserow: { level: "none" },
        mathesar: { level: "full" },
      },
      "minimal-metadata": {
        airtable: { level: "none" },
        nocodb: { level: "none" },
        baserow: { level: "none" },
        mathesar: { level: "full" },
      },
      "no-duplicate-data": {
        airtable: { level: "none" },
        nocodb: { level: "full" },
        baserow: { level: "none" },
        mathesar: { level: "full" },
      },
      "unlimited-capacity": {
        airtable: { level: "none" },
        nocodb: { level: "partial", note: "+" },
        baserow: { level: "partial", note: "+" },
        mathesar: { level: "full" },
      },
      "unlimited-users": {
        airtable: { level: "none" },
        nocodb: { level: "partial", note: "+" },
        baserow: { level: "partial", note: "+" },
        mathesar: { level: "full" },
      },
      sso: {
        airtable: { level: "none" },
        nocodb: { level: "none" },
        baserow: { level: "none" },
        mathesar: { level: "full" },
      },
    },
    notes: {
      "*": "optional",
      "^": "only some features are open source",
      "+": "if self hosted",
    },
  };
</script>

<Seo title="About" image="/og/og-about.png" />

<div class="antialiased overflow-x-hidden">
  <section class="relative pt-20">
    <div class="opacity-75">
      <Stickers variant="about" />
    </div>

    <div class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-32">
        <h1
          class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6"
        >
          How <span class="text-pumpkin-400">Mathesar</span> compares
        </h1>

        <p class="text-xl sm:text-2xl text-stormy-100 mt-6 mb-12">
          Explore how Mathesar’s open source PostgreSQL interface measures up
          against other tools for database access, collaboration, and usability.
          databases. Built by a nonprofit, 100% open source.
        </p>
      </div>
    </div>

    <div class="relative">
      <SectionCurve direction="bottom" inverted />
    </div>
  </section>

  <section class="relative bg-stormy-50">
    <div class="relative">
      <svg
        class="w-full h-48 fill-stormy-50 block relative z-10 -mt-1"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M 0,0 C 400,120 800,120 1200,0 V 120 H 0 Z"></path>
      </svg>
    </div>

    <div class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div
        class="bg-stormy-100 relative px-8 lg:px-12 rounded-2xl z-10 mb-20 py-8 lg:py-12 -mt-96"
      >
        <ComparisonTable data={comparisonData} />
      </div>
    </div>
  </section>
</div>
