<script lang="ts">
  import ContributorLink from "$lib/components/ContributorLink.svelte";
  import OpenSourceSection from "$lib/components/OpenSourceSection.svelte";
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import Seo from "$lib/components/SEO.svelte";
  import Stickers from "$lib/components/Stickers.svelte";

  export let data;
  const { staff, contributors } = data;

  const team = staff.filter((i) => i.type === "staff");
  const boardMembers = staff.filter((i) => i.type === "board");

  const colors = [
    "bg-sapphire-200",
    "bg-plum-200",
    "bg-rosy-200",
    "bg-salmon-200",
    "bg-pumpkin-200",
    "bg-olivia-200",
  ];
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
          Making databases <br /><span class="text-pumpkin-400"
            >accessible to everyone</span
          >
        </h1>

        <p class="text-xl sm:text-2xl text-stormy-100 mt-6 mb-12">
          Mathesar provides a spreadsheet-like interface to PostgreSQL
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
        class="bg-stormy-100 relative px-8 lg:px-16 rounded-2xl z-10 mb-20 py-8 lg:py-16 -mt-96"
      >
        <div class="grid md:grid-cols-8 gap-20">
          <div class="md:col-span-5 flex items-center">
            <div class="relative max-w-2xl">
              <span
                class="text-stormy-500 text-lg font-medium tracking-wider uppercase"
                >Our Mission</span
              >
              <h2
                class="text-4xl sm:text-5xl font-bold tracking-tight text-stormy-800 mb-4 leading-tight"
              >
                Building Better Data Tools
              </h2>
              <div class="space-y-4 text-lg text-stormy-800">
                <p>
                  At Mathesar Foundation, we believe working with data should be
                  easy and accessible for everyone. Using databases shouldn't
                  require technical expertise or expensive, closed-off tools.
                  Databases are incredibly powerful, but they're often trapped
                  behind complex interfaces that are hard to use or limit how
                  people can access and share their data. We want to change that
                  by building user-friendly tools that unlock the power of
                  existing databases without sacrificing accessibility,
                  portability, or extensibility.
                </p>
                <p>
                  Mathesar is our answer: an open-source platform designed to
                  unlock the full potential of PostgreSQL, one of the most
                  powerful and trusted open-source databases. Mathesar is easy
                  to use, interoperable, and extensible, while also giving you
                  complete control over your data. As a nonprofit, we're
                  committed to keeping Mathesar 100% open source and available
                  to everyone—because better ways to work with data mean better
                  decisions, and better decisions lead to a better world.
                </p>
              </div>
            </div>
          </div>

          <div class="relative z-10 md:col-span-3">
            <div class="relative md:max-w-lg mx-auto flex items-center h-full">
              <div class="relative w-full">
                <div
                  class="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-sapphire-600 via-salmon-500 to-pumpkin-500 rounded-2xl"
                ></div>
                <enhanced:img
                  src="/src/assets/illustrations/mathesar-foundation.png"
                  alt="Mathesar Foundation"
                  class="relative w-full rounded-xl shadow-2xl bg-white p-8 sm:p-16 lg:p-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="relative flex flex-col items-start gap-2 mb-12">
        <h2 class="text-6xl font-bold tracking-tight text-stormy-800">
          Our Staff
        </h2>
        <h3 class="text-2xl text-stormy-600 tracking-wide">
          + databases in our personal life
        </h3>
      </div>

      <p class="text-xl text-stormy-600 mb-24 leading-relaxed max-w-3xl">
        We're a group of industry veterans with a love of
        <span class="text-plum-500">open source</span>. Our core team members
        have founded startups and worked at a variety of companies – from
        nonprofits to large multinational companies. We've also led projects in
        large open source communities like Creative Commons, CiviCRM, and
        Ember.js.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        {#each team as member, i}
          <div
            class="{colors[
              i % colors.length
            ]} bg-opacity-60 rounded-xl flex flex-col h-full group shadow-sm"
          >
            <div
              class="relative w-40 h-40 mx-auto mb-6 -mt-8 transform rotate-3 transition-transform group-hover:rotate-0"
            >
              <img
                src={member.image ? `/staff/${member.image}` : ""}
                alt={member.name}
                class="relative w-full bg-gradient-to-br from-plum-500 to-salmon-500 h-full object-cover rounded-xl shadow-lg"
                on:error={(e) => {
                  e.currentTarget.outerHTML = `<div class="w-full h-full rounded-xl flex items-center justify-center bg-gradient-to-tr from-plum-500 to-salmon-500">
                    </div>`;
                }}
              />
            </div>

            <div class="text-center mb-6">
              <h3 class="text-2xl font-bold tracking-wide mb-2 text-stormy-800">
                {member.name}
              </h3>
              <p class="text-sm text-stormy-600 tracking-widest uppercase">
                {member.role}
              </p>
            </div>

            <div class="flex-1 relative p-8 bg-white/30 rounded-b-lg">
              <div
                class="absolute -top-3 left-1/2 -translate-x-1/2 text-pumpkin-500 text-4xl"
              >
                "
              </div>
              <p class="text-stormy-700 leading-relaxed whitespace-pre-line">
                {@html member.bio}
              </p>
              <div
                class="absolute -bottom-3 left-1/2 -translate-x-1/2 text-pumpkin-500 text-4xl rotate-180"
              >
                "
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section class="relative py-20 lg:py-32 text-white">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative flex flex-col items-center text-center gap-2 mb-12">
        <h2 class="text-6xl font-bold tracking-tight text-white">Our Board</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
        {#each boardMembers as member, i}
          <div
            class="{colors[
              i % colors.length
            ]} rounded-xl flex flex-col h-full group shadow-sm"
          >
            <div
              class="relative w-40 h-40 mx-auto mb-6 -mt-8 transform rotate-3 transition-transform group-hover:rotate-0"
            >
              <img
                src={member.image ? `/staff/${member.image}` : ""}
                alt={member.name}
                class="relative w-full h-full object-cover rounded-xl shadow-lg bg-gradient-to-br from-plum-500 to-salmon-500"
                on:error={(e) => {
                  e.currentTarget.outerHTML = `<div class="w-full h-full rounded-xl flex items-center justify-center bg-gradient-to-tr from-plum-500 to-salmon-500">
                  </div>`;
                }}
              />
            </div>

            <div class="text-center p-8">
              <h3 class="text-2xl font-bold tracking-wide mb-2 text-stormy-800">
                {member.name}
              </h3>
              <p class="text-stormy-600 leading-relaxed">
                {member.role}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <OpenSourceSection {contributors} />
</div>
