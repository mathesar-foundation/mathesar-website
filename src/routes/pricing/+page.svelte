<script lang="ts">
  import { onMount } from "svelte";
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import Seo from "$lib/components/SEO.svelte";
  import Stickers from "$lib/components/Stickers.svelte";
  import TrackedLink from "$lib/components/TrackedLink.svelte";

  import Check from "iconoir/icons/check.svg?component";
  import Server from "iconoir/icons/server.svg?component";
  import Headset from "iconoir/icons/headset-help.svg?component";
  import Code from "iconoir/icons/code.svg?component";
  import Community from "iconoir/icons/community.svg?component";

  let nameInput: HTMLInputElement;

  const focusFormInput = () => {
    if (window.location.hash === "#outreach-form" && nameInput) {
      setTimeout(() => nameInput.focus(), 400);
    }
  };

  onMount(() => {
    focusFormInput();
    window.addEventListener("hashchange", focusFormInput);
    return () => window.removeEventListener("hashchange", focusFormInput);
  });

  const FormState = {
    IDLE: "IDLE",
    SUBMITTING: "SUBMITTING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
  } as const;

  let formState: (typeof FormState)[keyof typeof FormState] = FormState.IDLE;
  let full_name = "";
  let email = "";
  let team_size = "";
  let situation = "";

  const teamSizeOptions = [
    { value: "", label: "Select team size (optional)" },
    { value: "1-5", label: "1-5 people" },
    { value: "6-20", label: "6-20 people" },
    { value: "21-50", label: "21-50 people" },
    { value: "51-100", label: "51-100 people" },
    { value: "100+", label: "100+ people" },
  ];

  const handleSubmit = async () => {
    formState = FormState.SUBMITTING;
    try {
      const response = await fetch("https://formspree.io/f/xvgkgnld", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name,
          email,
          team_size: team_size || "Not specified",
          situation: situation || "Not provided",
          source: "pricing-page",
        }),
      });

      if (response.ok) {
        formState = FormState.SUCCESS;

        if (typeof window.sa_event === "function") {
          window.sa_event("form_submit", { name: "Pricing Outreach Form" });

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

  const sharedFeatures = [
    "Full access to all Mathesar features",
    "Spreadsheet-like interface for Postgres",
    "Visual query builder with joins, filters, and grouping",
    "Role-based access control via Postgres permissions",
    "Data import and export",
    "Unlimited users",
    "Unlimited databases",
  ];
</script>

<Seo title="Pricing" image="/og/og-product.png" />

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

<div class="text-white antialiased">
  <section class="relative pt-14 lg:pt-24 overflow-x-clip">
    <div class="opacity-50 2xl:opacity-75">
      <Stickers variant="product" />
    </div>

    <div class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-4xl mx-auto mb-12 lg:mb-20">
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6"
        >
          <span class="text-pumpkin-400">Same features.</span> Your choice of deployment.
        </h1>

        <p class="text-xl sm:text-2xl text-stormy-200 mt-6">
          Mathesar is 100% open source with no feature gating. Self-host for free, or let us handle the infrastructure for you.
        </p>
      </div>

      <!-- Feature parity callout -->
      <div class="max-w-3xl mx-auto mb-16">
        <div class="bg-stormy-800/60 border-2 border-pumpkin-500/50 rounded-2xl p-6 lg:p-8 text-center">
          <p class="text-lg lg:text-xl text-stormy-100">
            <strong class="text-white">No feature differences.</strong> Both self-hosted and managed deployments have identical capabilities. The only difference is who manages the infrastructure.
          </p>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Free / Self-hosted -->
        <div class="bg-stormy-800/60 border-2 border-stormy-600 rounded-2xl p-8 lg:p-10 flex flex-col">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-plum-700">
              <Code class="w-6 text-pumpkin-300" />
            </div>
            <h2 class="text-2xl lg:text-3xl font-bold">Free & Open Source</h2>
          </div>

          <p class="text-stormy-200 mb-6">
            Self-host Mathesar on your own infrastructure. Full control, zero cost.
          </p>

          <div class="text-4xl font-black mb-2">$0</div>
          <p class="text-stormy-300 mb-8">Forever free</p>

          <TrackedLink
            analyticsData={{ location: "pricing-free" }}
            href="https://docs.mathesar.org"
            class="group inline-flex items-center justify-center rounded-lg bg-orange-red-500 px-6 py-3.5 text-lg font-semibold
            text-white shadow-lg transition-all duration-300
            hover:bg-orange-red-600 hover:shadow-md
            active:transform active:scale-[0.98] mb-8"
          >
            Install Mathesar
          </TrackedLink>

          <div class="space-y-4 mb-8">
            <h3 class="font-semibold text-lg text-stormy-100">What's included:</h3>
            {#each sharedFeatures as feature}
              <div class="flex items-start gap-3">
                <Check class="w-5 h-5 text-pumpkin-400 flex-shrink-0 mt-0.5" />
                <span class="text-stormy-200">{feature}</span>
              </div>
            {/each}
          </div>

          <div class="mt-auto pt-6 border-t border-stormy-600">
            <div class="flex items-center gap-3 text-stormy-300">
              <Community class="w-5 h-5" />
              <span>Community support via GitHub & Matrix</span>
            </div>
          </div>
        </div>

        <!-- Managed Hosting -->
        <div class="bg-stormy-800/60 border-2 border-pumpkin-500 rounded-2xl p-8 lg:p-10 flex flex-col relative">
          <div class="absolute -top-3 right-6 bg-pumpkin-500 text-stormy-900 text-sm font-bold px-4 py-1 rounded-full">
            We handle it for you
          </div>

          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-pumpkin-600">
              <Server class="w-6 text-white" />
            </div>
            <h2 class="text-2xl lg:text-3xl font-bold">Managed Hosting</h2>
          </div>

          <p class="text-stormy-200 mb-6">
            We deploy and manage Mathesar on isolated infrastructure dedicated to your organization.
          </p>

          <div class="text-4xl font-black mb-2">Custom</div>
          <p class="text-stormy-300 mb-8">Based on your needs</p>

          <a
            href="#outreach-form"
            class="group inline-flex items-center justify-center rounded-lg bg-pumpkin-500 px-6 py-3.5 text-lg font-semibold
            text-stormy-900 shadow-lg transition-all duration-300
            hover:bg-pumpkin-400 hover:shadow-md
            active:transform active:scale-[0.98] mb-8"
          >
            Get in Touch
          </a>

          <div class="space-y-4 mb-8">
            <h3 class="font-semibold text-lg text-stormy-100">What's included:</h3>
            {#each sharedFeatures as feature}
              <div class="flex items-start gap-3">
                <Check class="w-5 h-5 text-pumpkin-400 flex-shrink-0 mt-0.5" />
                <span class="text-stormy-200">{feature}</span>
              </div>
            {/each}
          </div>

          <div class="mt-auto pt-6 border-t border-stormy-600 space-y-4">
            <div class="flex items-center gap-3 text-pumpkin-300">
              <Server class="w-5 h-5" />
              <span>Isolated infrastructure for your organization</span>
            </div>
            <div class="flex items-center gap-3 text-pumpkin-300">
              <Headset class="w-5 h-5" />
              <span>Hands-on support from the Mathesar team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="relative mt-16">
    <SectionCurve direction="bottom" inverted />
  </div>

  <section class="relative -mt-1 py-16 lg:py-24 bg-stormy-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-stormy-800 mb-4">
          Why managed hosting?
        </h2>
        <p class="text-lg text-stormy-600">
          Same Mathesar, different responsibilities.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-2xl p-8 shadow-sm">
          <div class="w-14 h-14 flex items-center justify-center rounded-full bg-plum-100 mb-6">
            <Server class="w-7 text-plum-600" />
          </div>
          <h3 class="text-xl font-bold text-stormy-800 mb-3">Isolated Infrastructure</h3>
          <p class="text-stormy-600">
            Your Mathesar instance runs on dedicated infrastructure, completely separate from other customers. Your data stays yours.
          </p>
        </div>

        <div class="bg-white rounded-2xl p-8 shadow-sm">
          <div class="w-14 h-14 flex items-center justify-center rounded-full bg-plum-100 mb-6">
            <Headset class="w-7 text-plum-600" />
          </div>
          <h3 class="text-xl font-bold text-stormy-800 mb-3">Hands-on Support</h3>
          <p class="text-stormy-600">
            Direct access to the Mathesar team for setup assistance, troubleshooting, and guidance. We're here to help you succeed.
          </p>
        </div>
      </div>

    </div>
  </section>

  <section id="outreach-form" class="relative py-16 lg:py-24 bg-stormy-100 scroll-mt-8">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-3xl sm:text-4xl font-bold text-stormy-800 mb-4">
          Interested in managed hosting?
        </h2>
        <p class="text-lg text-stormy-600">
          Tell us a bit about yourself and we'll reach out to discuss your needs.
        </p>
      </div>

      {#if formState === FormState.SUCCESS}
        <div
          class="flex flex-col items-center text-center space-y-2 p-8 border rounded-2xl bg-stormy-800 border-stormy-700"
        >
          <h3 class="text-xl font-medium text-white">
            Thank you for reaching out!
          </h3>
          <p class="text-stormy-200 max-w-md">
            We've received your message and a member of our team will be in touch soon.
          </p>
        </div>
      {:else}
        <form
          class="bg-white rounded-2xl p-8 shadow-sm space-y-5"
          on:submit|preventDefault={handleSubmit}
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="space-y-2">
              <label for="full_name" class="block text-sm font-medium text-stormy-700">
                Name <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="full_name"
                bind:this={nameInput}
                bind:value={full_name}
                required
                disabled={formState === FormState.SUBMITTING}
                placeholder="Your name"
                class="w-full px-4 py-2.5 rounded-lg border border-stormy-200 bg-white text-stormy-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pumpkin-500 focus:ring-offset-2 focus:border-pumpkin-400"
              />
            </div>

            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium text-stormy-700">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                bind:value={email}
                required
                disabled={formState === FormState.SUBMITTING}
                placeholder="you@company.com"
                class="w-full px-4 py-2.5 rounded-lg border border-stormy-200 bg-white text-stormy-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pumpkin-500 focus:ring-offset-2 focus:border-pumpkin-400"
              />
            </div>
          </div>

          <div class="space-y-2">
            <label for="team_size" class="block text-sm font-medium text-stormy-700">
              Team Size
            </label>
            <select
              id="team_size"
              bind:value={team_size}
              disabled={formState === FormState.SUBMITTING}
              class="w-full px-4 py-2.5 rounded-lg border border-stormy-200 bg-white text-stormy-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pumpkin-500 focus:ring-offset-2 focus:border-pumpkin-400"
            >
              {#each teamSizeOptions as option}
                <option value={option.value}>{option.label}</option>
              {/each}
            </select>
          </div>

          <div class="space-y-2">
            <label for="situation" class="block text-sm font-medium text-stormy-700">
              Tell us about your situation
            </label>
            <textarea
              id="situation"
              bind:value={situation}
              disabled={formState === FormState.SUBMITTING}
              rows="3"
              placeholder="What are you hoping to accomplish with Mathesar? (optional)"
              class="w-full px-4 py-2.5 rounded-lg border border-stormy-200 bg-white text-stormy-800 transition-all duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-pumpkin-500 focus:ring-offset-2 focus:border-pumpkin-400"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={formState === FormState.SUBMITTING}
            class="w-full group inline-flex items-center justify-center rounded-lg bg-pumpkin-500 px-6 py-3.5 text-lg font-semibold
              text-stormy-900 shadow-lg transition-all duration-300
              hover:bg-pumpkin-400 hover:shadow-md
              active:transform active:scale-[0.98]
              disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {formState === FormState.SUBMITTING ? "Sending..." : "Get in Touch"}
          </button>

          {#if formState === FormState.ERROR}
            <p class="text-sm text-red-500 text-center">
              Something went wrong. Please try again later.
            </p>
          {/if}
        </form>
      {/if}
    </div>
  </section>
</div>
