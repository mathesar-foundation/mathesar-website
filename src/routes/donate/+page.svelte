<script lang="ts">
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import Seo from "$lib/components/SEO.svelte";
  import Stickers from "$lib/components/Stickers.svelte";
  import Community from "iconoir/icons/community.svg?component"; // Import Community icon
  import Github from "iconoir/icons/github.svg?component"; // Import GitHub icon
  import ArrowRight from "iconoir/icons/arrow-right.svg?component"; // Import ArrowRight icon
  import ShieldCheck from "iconoir/icons/shield-check.svg?component"; // Import ShieldCheck icon
  import Expand from "iconoir/icons/expand.svg?component"; // Import Expand icon
  import DatabaseSettings from "iconoir/icons/database-settings.svg?component"; // Import HeadsetHelp icon
  import Book from "iconoir/icons/book.svg?component"; // Import HeadsetHelp icon
  import Coins from "iconoir/icons/coins.svg?component"; // Import Coins icon
  import CloudCheck from "iconoir/icons/cloud-check.svg?component"; // Import CloudCheck icon

  const benefits = [
    {
      title: "Ensure sustainability",
      description:
        "Support ongoing development and growth to help Mathesar thrive for years to come.",
      icon: ShieldCheck,
    },
    {
      title: "Expand features",
      description:
        "Build powerful new functionality to make data management even easier for everyone.",
      icon: Expand,
    },
    {
      title: "Enhance interoperability",
      description:
        "Build integrations and improve compatibility with more databases and tools.",
      icon: DatabaseSettings,
    },
    {
      title: "Improve support",
      description:
        "Invest in better documentation, help guides and better assistance to users.",
      icon: Book,
    },
  ];
  const sponsors = [
    { name: "Reid Hoffman Foundation", logo: "/Reid_Hoffman_Foundation.png" },
    { name: "Center for Radical Transformation", logo: "/Henkaku_Center.png" },
    { name: "Mathesar users like you", logo: "" },
  ];
</script>

<Seo title="Donate" image="/og/og-donate.png" />

<div class="text-white antialiased">
  <section class="relative pt-14 lg:pt-24 overflow-x-clip">
    <div class="opacity-50 2xl:opacity-75">
      <Stickers variant="donate" />
    </div>

    <div class="z-20 relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 lg:gap-40">
        <div>
          <h1
            class="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8"
          >
            Help us build <span class="text-pumpkin-400 block md:inline-block"
              >open data tooling</span
            >
          </h1>

          <p class="text-xl lg:text-2xl font-bold text-white mb-4">
            Support Mathesar via:
          </p>

          <div class="space-y-6 mb-12">
            <a
              href="https://opencollective.com/mathesar"
              class="group inline-flex lg:w-[500px] w-full items-center gap-4 px-8 py-4 rounded-lg text-lg font-semibold
                bg-stormy-800/60 text-white
                border-2 border-pumpkin-500
                shadow-lg transition-all duration-300
                hover:bg-stormy-700/80 hover:shadow-md
                active:transform active:scale-[0.98]"
            >
              <div
                class="aspect-square p-3 h-16 w-16 bg-white/10 rounded-lg flex items-center justify-center"
              >
                <Community
                  class="w-full text-2xl lg:text-4xl text-pumpkin-500"
                />
              </div>
              <div>
                <span class="block text-xl lg:text-2xl font-bold"
                  >Open Collective</span
                >
              </div>
              <ArrowRight
                class="w-6 ml-auto text-2xl text-white/80 group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="https://github.com/sponsors/mathesar-foundation"
              class="group inline-flex lg:w-[500px] w-full items-center gap-4 px-8 py-4 rounded-lg text-lg font-semibold
                bg-stormy-800/60 text-white
                border-2 border-pumpkin-500
                shadow-lg transition-all duration-300
                hover:bg-stormy-700/80 hover:shadow-md
                active:transform active:scale-[0.98]"
            >
              <div
                class="aspect-square p-3 h-16 w-16 bg-white/10 rounded-lg flex items-center justify-center"
              >
                <Github class="w-full text-2xl lg:text-4xl text-pumpkin-500" />
              </div>
              <div>
                <span class="block text-xl lg:text-2xl font-bold"
                  >GitHub Sponsors</span
                >
              </div>
              <ArrowRight
                class="w-6 ml-auto text-2xl text-white/80 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div class="mb-12">
            <h2 class="text-2xl font-bold text-white mb-4">100% Open Source</h2>
            <p class="text-lg text-stormy-200 mb-4 leading-relaxed">
              Mathesar is fully open source, licensed under GPLv3, and built
              with a commitment to transparency and collaboration. Our code has
              no hidden features or paywalls. We are committed to always being
              100% open source and self-hostable.
            </p>
            <p class="text-lg text-stormy-200 leading-relaxed mb-12">
              Thank you for being a part of the community and for your support
              to Mathesar.
            </p>
          </div>
        </div>

        <div class="flex items-center">
          <div class="space-y-8">
            <p class="text-xl text-stormy-100 leading-relaxed mb-8">
              At Mathesar Foundation, we believe working with data should be
              easy and accessible for everyone. Better ways to work with data
              mean better decisions, and better decisions lead to a better
              world.
            </p>

            <p class="text-xl text-stormy-200 leading-relaxed mb-8">
              Your contribution helps us:
            </p>

            {#each benefits as benefit}
              <div class="flex items-start gap-8">
                <div
                  class="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-plum-700"
                >
                  <benefit.icon class="w-6 text-2xl text-pumpkin-300" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p class="text-base leading-relaxed text-stormy-200">
                    {benefit.description}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="relative">
    <SectionCurve direction="bottom" inverted />
  </div>

  <section class="relative -mt-1 py-16 bg-stormy-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-8 lg:mb-16">
        <h2 class="text-5xl font-bold text-stormy-900 mb-6">
          Mathesar Foundation
        </h2>
      </div>

      <div
        class="bg-stormy-100 relative p-16 rounded-2xl z-10 mb-20 max-w-5xl mx-auto"
      >
        <div class="grid md:grid-cols-8 gap-20">
          <div class="md:col-span-5 flex items-center">
            <div class="relative max-w-2xl">
              <p class="text-xl text-stormy-800 mb-4">
                Mathesar is built and maintained by a global, remote team at the
                Mathesar Foundation, a US-based nonprofit.
              </p>
            </div>
          </div>

          <div class="relative z-10 md:col-span-3 flex items-center">
            <div class="relative md:max-w-lg mx-auto">
              <div
                class="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-sapphire-600 via-salmon-500 to-pumpkin-500 rounded-2xl"
              ></div>
              <enhanced:img
                src="/src/assets/illustrations/mathesar-foundation-horizontal.png"
                alt="Mathesar Foundation"
                class="relative w-full rounded-xl shadow-2xl bg-white p-8"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-4xl mx-auto space-y-16 mb-20">
        <div class="flex items-center gap-8">
          <div class="h-16 w-16 flex-shrink-0 flex items-center justify-center">
            <Coins class="text-5xl text-pumpkin-500" />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-stormy-800 mb-2">
              Funding Sources
            </h3>
            <p class="text-lg text-stormy-600">
              Our development is powered by strategic grants and supplemented by
              community donations through GitHub Sponsors and Open Collective.
            </p>
          </div>
        </div>

        <div class="flex items-center gap-8">
          <div class="h-16 w-16 flex-shrink-0 flex items-center justify-center">
            <CloudCheck class="text-5xl text-pumpkin-500" />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-stormy-800 mb-2">
              Future Sustainability
            </h3>
            <p class="text-lg text-stormy-600">
              To ensure Mathesar's longevity as a project, we're exploring a
              paid cloud-hosted service, but our commitment to being 100% open
              source, nonprofit, and self-hostable remains unchanged.
            </p>
          </div>
        </div>
      </div>

      <div class="text-center">
        <h3 class="text-3xl font-bold text-stormy-900 mb-8 lg:mb-16">
          Our Amazing Sponsors
        </h3>
        <div
          class="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto mb-8 lg:mb-16"
        >
          {#each sponsors.filter((s) => s.logo) as sponsor}
            <div class="group text-center">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                class="h-32 mx-auto transition-all duration-300 group-hover:opacity-100"
              />
              <p
                class="mt-4 font-medium text-base text-stormy-600 group-hover:text-stormy-900 transition-colors"
              >
                {sponsor.name}
              </p>
            </div>
          {/each}
        </div>
        <p class="text-2xl font-medium text-stormy-600">
          ...and Mathesar users like you!
        </p>
      </div>
    </div>
  </section>

  <section class="relative pt-18 bg-stormy-50">
    <SectionCurve direction="top" fillColor="fill-stormy-100" />

    <div class="bg-stormy-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center gap-12">
          <div class="max-w-2xl text-center space-y-6">
            <h2>
              <span class="block text-xl sm:text-3xl lg:text-4xl text-gray-600">
                Support our mission
              </span>
              <span
                class="block text-4xl sm:text-5xl lg:text-6xl font-bold text-plum-800 -mt-1"
              >
                Become a Sponsor
              </span>
            </h2>

            <p class="text-lg text-stormy-800">
              Every contribution goes towards developing and maintaining the
              Mathesar platform.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="https://opencollective.com/mathesar"
                class="group inline-flex items-center gap-4 px-6 py-3.5 rounded-lg text-lg font-semibold
                    bg-plum-300/20 text-plum-800
                    border-2 border-plum-500
                    shadow-lg transition-all duration-300
                    hover:bg-plum-400/20 hover:shadow-md
                    active:transform active:scale-[0.98]"
              >
                <Community class="w-6 text-2xl text-plum-500" />
                <span>Open Collective</span>
                <ArrowRight
                  class="w-6 ml-auto text-2xl text-plum-500/80 group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="https://github.com/sponsors/mathesar"
                class="group inline-flex items-center gap-4 px-6 py-3.5 rounded-lg text-lg font-semibold
                    bg-plum-300/20 text-plum-800
                    border-2 border-plum-500
                    shadow-lg transition-all duration-300
                    hover:bg-plum-400/20 hover:shadow-md
                    active:transform active:scale-[0.98]"
              >
                <Github class="w-6 text-2xl text-plum-500" />
                <span>GitHub Sponsors</span>
                <ArrowRight
                  class="w-6 ml-auto text-2xl text-plum-500/80 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          <div class="relative -mb-12">
            <enhanced:img
              src="/src/assets/standing-elephant.png"
              alt="Support Mathesar"
              class="w-64"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
