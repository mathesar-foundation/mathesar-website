<script lang="ts">
  import CTASection from "$lib/components/CTASection.svelte";
  import EnlargableImage from "$lib/components/EnlargableImage.svelte";
  import Card from "$lib/components/Card.svelte";
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import Seo from "$lib/components/SEO.svelte";
  import Stickers from "$lib/components/Stickers.svelte";

  import Screenshot from "../../assets/solutions/hardware-store-chain/primary-table.png?w=1000&lossless&enhanced";
  import EasyInstall from "../../assets/illustrations/easy-install.png?w=800&lossless&enhanced";
  import NoSharing from "../../assets/illustrations/no-sharing.png?w=800&lossless&enhanced";
  import OpenSource from "../../assets/illustrations/open-source.png?w=800&lossless&enhanced";
  import Permissions from "../../assets/illustrations/permissions.png?w=800&lossless&enhanced";
  import SelfHosting from "../../assets/illustrations/self-hosting.png?w=800&lossless&enhanced";

  const cardData = [
    // {
    //   title: "As Scalable as Postgres",
    //   description:
    //     "Mathesar is designed for production databases and scales as easily as Postgres, supporting any size or complexity of data.",
    //   image: Scalable,
    // },
    // {
    //   title: "Easy to Install",
    //   description:
    //     "Mathesar only takes a few minutes to install, requires minimal additions to existing databases, and doesn't require any code to use.",
    //   image: EasyInstall,
    // },
    // {
    //   title: "No Sharing or 3rd Party Access",
    //   description:
    //     "You have complete control of your data – Mathesar cannot share your data or allows third-parties to access it.",
    //   image: NoSharing,
    // },
    {
      title: "100% Open Source & Nonprofit",
      description:
        "Mathesar is maintained by a 501(c)(3) nonprofit. We're committed to being 100% open source, eliminating the risk of vendor lock-in and rising prices.",
      image: OpenSource,
    },
    {
      title: "Easy to Install",
      description:
        "Mathesar only takes a few minutes to install, requires minimal additions to existing databases, and doesn't require any code to use.",
      image: EasyInstall,
    },
    // {
    //   title: "Postgres for Access Control",
    //   description:
    //     "Mathesar relies on Postgres database permissions for access control, lowering the risk of a second layer of access to your database.",
    //   image: Permissions,
    // },
    {
      title: "Self-hosted",
      description:
        "Mathesar is self-hosted on your infrastructure, so your data never has to leave your own servers. We're committed to always being self-hostable.",
      image: SelfHosting,
    },
  ];
</script>

<Seo title="Contact Us" image="/og/og-community.png" />

<section class="relative pt-24">
  <div class="opacity-60">
    <Stickers variant="community" />
  </div>

  <div
    class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white antialiased"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-8"
    >
      <div class="lg:max-w-xl">
        <enhanced:img
          src="/src/assets/illustrations/mathesar-frame.png"
          alt="Mathesar Interface"
          class="w-full rounded-lg shadow-xl border-2 border-stormy-700/20 mb-8"
        />

        <h1 class="mb-8">
          <span
            class="block text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
          >
            The simplest way to manage your data.
            <span class="text-pumpkin-400 inline-block"
              >No subscription required.</span
            >
          </span>
          <span
            class="block text-xl sm:text-xl text-white font-normal leading-relaxed"
          >
            View, edit, create, and query data, all with no code or technical
            knowledge. Mathesar makes it easy to quickly empower users to view,
            edit, and understand the data they need, in an interface they're
            familiar with.100% open source, free, Postgres-based, and
            self-hosted.
          </span>
        </h1>
      </div>

      <div
        class="space-y-6 z-10 relative text-lg text-stormy-900/90 bg-stormy-100 rounded-2xl p-8 lg:p-12 border border-white/10"
      >
        <h2
          class="text-3xl sm:text-4xl font-bold tracking-tight text-stormy-800 mb-4"
        >
          Get started with Mathesar!
        </h2>
        <p>
          We’re here to help you get the most out of Mathesar. Whether you’ve
          outgrown your spreadsheet, or are looking for a better way to manage
          your existing Postgres data, we’d love to connect and show you how
          Mathesar can support you and your team. Just fill out the form below,
          and we’ll be in touch shortly!
        </p>

        <form
          class="max-w-2xl mx-auto space-y-6"
          action="https://formspree.io/f/xvgkgnld"
          method="POST"
        >
          <div class="space-y-4">
            <div class="space-y-2">
              <label for="full_name" class="block text-sm text-stormy-800"
                >Full Name</label
              >
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                class="w-full px-4 py-2.5 rounded-md border border-stormy-200 focus:outline-none focus:ring-2 focus:ring-salmon-500 bg-white text-stormy-800"
              />
            </div>

            <div class="space-y-2">
              <label for="email" class="block text-sm text-stormy-800"
                >Work Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-2.5 rounded-md border border-stormy-200 focus:outline-none focus:ring-2 focus:ring-salmon-500 bg-white text-stormy-800"
              />
            </div>

            <div class="space-y-2">
              <label for="phone" class="block text-sm text-stormy-800"
                >Phone (optional)</label
              >
              <input
                type="phone"
                id="phone"
                name="phone"
                class="w-full px-4 py-2.5 rounded-md border border-stormy-200 focus:outline-none focus:ring-2 focus:ring-salmon-500 bg-white text-stormy-800"
              />
            </div>
            <div class="space-y-2">
              <label for="message" class="block text-sm text-stormy-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="3"
                class="w-full px-4 py-2.5 rounded-md border border-stormy-200 focus:outline-none focus:ring-2 focus:ring-salmon-500 bg-white text-stormy-800 resize-none"
              ></textarea>
            </div>
          </div>
          <div class="flex justify-center">
            <button
              type="submit"
              class="w-full sm:w-auto group inline-flex items-center justify-center rounded-lg bg-orange-red-500 px-6 py-3.5 text-lg font-semibold
                text-white shadow-lg transition-all duration-300
                hover:bg-orange-700 hover:shadow-md
                active:transform active:scale-[0.98]"
            >
              Get Started
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<div class="relative">
  <SectionCurve direction="bottom" inverted />
</div>

<section class="relative -mt-1 bg-stormy-50">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-8 lg:mb-16">
      <h2>
        <span
          class="block text-3xl md:text-4xl sm:text-5xl lg:text-6xl font-bold text-stormy-800"
        >
          Built for everyone
        </span>
      </h2>
      <p class="text-lg md:text-xl text-gray-600 mt-6 max-w-4xl mx-auto">
        Mathesar combines simplicity and power in a spreadsheet-like UI that's
        easy for both DB admins and business users to use. It works directly
        with Postgres permissions, schemas, and tables – no extra abstractions
        or layers.
      </p>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 xl:mb-12"
    >
      {#each cardData as card}
        <Card {card} />
      {/each}
    </div>
  </div>

  <!-- <CTASection /> -->
</section>
