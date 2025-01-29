<script lang="ts">
  import CtaSection from "$lib/components/CTASection.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Seo from "$lib/components/SEO.svelte";
  import SolutionsSection from "$lib/components/SolutionsSection.svelte";
  import Card from "$lib/components/Card.svelte";

  import Scalable from "../assets/illustrations/scalable.png?w=800&lossless&enhanced";
  import EasyInstall from "../assets/illustrations/easy-install.png?w=800&lossless&enhanced";
  import NoSharing from "../assets/illustrations/no-sharing.png?w=800&lossless&enhanced";
  import OpenSource from "../assets/illustrations/open-source.png?w=800&lossless&enhanced";
  import Permissions from "../assets/illustrations/permissions.png?w=800&lossless&enhanced";
  import SelfHosting from "../assets/illustrations/self-hosting.png?w=800&lossless&enhanced";

  export let data;
  const { solutions } = data;

  const cardData = [
    {
      title: "As Scalable as Postgres",
      description:
        "Mathesar is designed for production databases and scales as easily as Postgres, supporting any size or complexity of data.",
      image: Scalable,
    },
    {
      title: "Easy to Install",
      description:
        "Mathesar only takes a few minutes to install, requires minimal additions to existing databases, and doesn't require any code to use.",
      image: EasyInstall,
    },
    {
      title: "No Sharing or 3rd Party Access",
      description:
        "You have complete control of your data – Mathesar cannot share your data or allows third-parties to access it.",
      image: NoSharing,
    },
    {
      title: "100% Open Source & Nonprofit",
      description:
        "Mathesar is maintained by a 501(c)(3) nonprofit. We're committed to being 100% open source, eliminating the risk of vendor lock-in and rising prices.",
      image: OpenSource,
    },
    {
      title: "Postgres for Access Control",
      description:
        "Mathesar relies on Postgres database permissions for access control, lowering the risk of a second layer of access to your database.",
      image: Permissions,
    },
    {
      title: "Self-hosted",
      description:
        "Mathesar is self-hosted on your infrastructure, so your data never has to leave your own servers. We're committed to always being self-hostable.",
      image: SelfHosting,
    },
  ];
</script>

<Seo
  title="Mathesar - Open source UI for Postgres databases"
  image="/og/og-home.png"
/>

<div class="text-white antialiased relative z-20 overflow-x-hidden">
  <Hero />

  <section class="relative lg:pt-80 mp-8 lg:pb-32 bg-stormy-50">
    <div class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8 lg:mb-16 max-w-3xl mx-auto text-center">
        <h2>
          <span
            class="block text-3xl md:text-4xl sm:text-5xl lg:text-6xl font-bold text-stormy-800"
          >
            Built for everyone
          </span>
        </h2>
        <p class="text-lg md:text-xl text-gray-600 mt-6">
          Mathesar combines simplicity and power in a spreadsheet-like UI that's
          easy for both DB admins and business users to use. It works directly
          with Postgres permissions, schemas, and tables – no extra abstractions
          or layers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each cardData as card}
          <Card {card} />
        {/each}
      </div>
    </div>
  </section>

  <SolutionsSection {solutions} />
  <CtaSection />
</div>
