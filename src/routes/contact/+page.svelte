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

  const FormState = {
    IDLE: "IDLE",
    SUBMITTING: "SUBMITTING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
  } as const;

  let formState: (typeof FormState)[keyof typeof FormState] = FormState.IDLE;
  let full_name = "";
  let email = "";
  let phone = "";
  let message = "";

  const handleSubmit = async () => {
    formState = FormState.SUBMITTING;
    try {
      const response = await fetch("https://formspree.io/f/xvgkgnld", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ full_name, email, phone, message }),
      });

      if (response.ok) {
        formState = FormState.SUCCESS;

        if (typeof window.sa_event === "function") {
          window.sa_event("form_submit", { name: "Contact Form" });

          typeof window.gtag === "function" &&
            window.gtag("event", "conversion", {
              send_to: "AW-16943326711/aoZECOOUja8aEPfLmo8_",
              value: 1.0,
              currency: "USD",
            });
        }
      } else {
        formState = FormState.ERROR;
      }
    } catch {
      formState = FormState.ERROR;
    }
  };

  const cardData = [
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
    {
      title: "Self-hosted",
      description:
        "Mathesar is self-hosted on your infrastructure, so your data never has to leave your own servers. We're committed to always being self-hostable.",
      image: SelfHosting,
    },
  ];
</script>

<Seo title="Contact Us" image="/og/og-community.png" />

<svelte:head>
  <!-- Google tag (gtag.js) -->
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=AW-16943326711"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "AW-16943326711");
  </script>
</svelte:head>

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
            class="block text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight !leading-[1.1] text-white mb-6"
          >
            Simple data management.
            <span class="text-pumpkin-400">No subscription required.</span>
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
          We're here to help you get the most out of Mathesar. Whether you've
          outgrown your spreadsheet, or are looking for a better way to manage
          your existing Postgres data, we'd love to connect and show you how
          Mathesar can support you and your team. Just fill out the form below,
          and we'll be in touch shortly!
        </p>

        {#if formState === FormState.SUCCESS}
          <div
            class="flex flex-col items-center text-center space-y-2 p-6 border rounded-md bg-stormy-800 border-stormy-700 mt-8"
          >
            <h3 class="text-xl font-medium text-white">
              Thank you for reaching out.
            </h3>
            <p class="text-stormy-200 max-w-md">
              We've received your message and a member of our team will reach
              out soon. We look forward to helping you get started with
              Mathesar.
            </p>
          </div>
        {:else}
          <form
            class="max-w-2xl mx-auto space-y-6"
            on:submit|preventDefault={handleSubmit}
          >
            <div class="space-y-4">
              <div class="space-y-2">
                <label for="full_name" class="block text-sm text-stormy-800"
                  >Full Name</label
                >
                <input
                  type="text"
                  id="full_name"
                  bind:value={full_name}
                  required
                  disabled={formState === FormState.SUBMITTING}
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
                  bind:value={email}
                  required
                  disabled={formState === FormState.SUBMITTING}
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
                  bind:value={phone}
                  disabled={formState === FormState.SUBMITTING}
                  class="w-full px-4 py-2.5 rounded-md border border-stormy-200 focus:outline-none focus:ring-2 focus:ring-salmon-500 bg-white text-stormy-800"
                />
              </div>
              <div class="space-y-2">
                <label for="message" class="block text-sm text-stormy-800">
                  Message
                </label>
                <textarea
                  id="message"
                  bind:value={message}
                  required
                  disabled={formState === FormState.SUBMITTING}
                  rows="3"
                  class="w-full px-4 py-2.5 rounded-md border border-stormy-200 focus:outline-none focus:ring-2 focus:ring-salmon-500 bg-white text-stormy-800 resize-none"
                ></textarea>
              </div>
            </div>
            <div class="flex justify-center">
              <button
                type="submit"
                disabled={formState === FormState.SUBMITTING}
                class="w-full sm:w-auto group inline-flex items-center justify-center rounded-lg bg-orange-red-500 px-6 py-3.5 text-lg font-semibold
                  text-white shadow-lg transition-all duration-300
                  hover:bg-orange-700 hover:shadow-md
                  active:transform active:scale-[0.98]"
              >
                {formState === FormState.SUBMITTING
                  ? "Submitting..."
                  : "Get Started"}
              </button>
            </div>
            {#if formState === FormState.ERROR}
              <p class="text-sm text-red-500 text-center">
                Something went wrong. Please try again later.
              </p>
            {/if}
          </form>
        {/if}
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
</section>
