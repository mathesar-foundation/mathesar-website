<script lang="ts">
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import Seo from "$lib/components/SEO.svelte";
  import Stickers from "$lib/components/Stickers.svelte";
  import TrackedLink from "$lib/components/TrackedLink.svelte";

  import Check from "iconoir/icons/check.svg?component";
  import Server from "iconoir/icons/server.svg?component";
  import Headset from "iconoir/icons/headset-help.svg?component";
  import Code from "iconoir/icons/code.svg?component";
  import Community from "iconoir/icons/community.svg?component";

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
            href="/contact"
            class="group inline-flex items-center justify-center rounded-lg bg-pumpkin-500 px-6 py-3.5 text-lg font-semibold
            text-stormy-900 shadow-lg transition-all duration-300
            hover:bg-pumpkin-400 hover:shadow-md
            active:transform active:scale-[0.98] mb-8"
          >
            Contact Us
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

      <div class="mt-12 text-center">
        <p class="text-stormy-600 mb-6">
          Ready to discuss your needs?
        </p>
        <a
          href="/contact"
          class="group inline-flex items-center gap-4 px-6 py-3.5 rounded-lg text-lg font-semibold
            bg-plum-300/20 text-plum-800
            border-2 border-plum-500
            shadow-lg transition-all duration-300
            hover:bg-plum-400/20 hover:shadow-md
            active:transform active:scale-[0.98]"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
</div>
