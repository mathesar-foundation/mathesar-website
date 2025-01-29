<script lang="ts">
  import CTASection from "$lib/components/CTASection.svelte";
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import Seo from "$lib/components/SEO.svelte";
  import Stickers from "$lib/components/Stickers.svelte";
  import TrackedLink from "$lib/components/TrackedLink.svelte";
</script>

<Seo title="How Mathesar Works" image="/og/og-product.png" />

<div class="text-white antialiased">
  <section class="relative py-20 overflow-x-clip">
    <Stickers variant="product" />

    <div class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-4xl mx-auto mb-18 lg:mb-32">
        <h1
          class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6"
        >
          The <span class="text-pumpkin-400">power of Postgres</span>
          without the complexity
        </h1>

        <p class="text-xl sm:text-2xl text-stormy-200 mt-6 mb-12">
          A spreadsheet-like interface that lets users of all technical skill
          levels query, edit, and explore Postgres data directly. Self-host it
          in minutes.
        </p>

        <div class="flex items-center justify-center gap-4 relative z-10">
          <TrackedLink
            analyticsData={{ location: "hero" }}
            href="https://docs.mathesar.org"
            class="group inline-flex items-center rounded-lg bg-orange-red-500 px-6 py-3.5 text-lg font-semibold
            text-white
            shadow-lg transition-all duration-300
            hover:bg-orange-red-600 hover:shadow-md
            active:transform active:scale-[0.98]"
          >
            <span class="relative">Install Mathesar</span>
          </TrackedLink>

          <!-- <a
            href="https://github.com/mathesar-foundation/mathesar"
            class="group inline-flex items-center gap-4 px-6 py-3.5 rounded-lg text-lg font-semibold
              bg-stormy-800/60 text-white
              border-2 border-pumpkin-500
              shadow-lg transition-all duration-300
              hover:bg-stormy-700/80 hover:shadow-md
              active:transform active:scale-[0.98]"
          >
            <GitHub class="text-2xl text-pumpkin-500" />
            <span>View on GitHub</span>
          </a> -->
        </div>
      </div>

      <div class="relative z-20 mt-16">
        <div class="flex flex-col">
          <div
            class="flex items-center justify-center relative z-10 mb-2 min-h-[200px] w-full overflow-visible"
          >
            <div
              class="absolute top-24 flex w-full justify-center gap-8 md:gap-24 lg:gap-40"
            >
              <div
                class="w-28 h-28 md:w-48 md:h-48 flex-shrink-0 flex items-center justify-center relative z-10 -rotate-12"
              >
                <enhanced:img
                  src="/src/assets/illustrations/postgres-badge.png"
                  alt="PostgreSQL"
                  class="w-24 h-24 md:w-28 md:h-28 animate-float-delayed"
                />
              </div>

              <div
                class="w-32 h-32 md:w-56 md:h-56 flex-shrink-0 flex items-center justify-center relative z-20 rotate-6"
              >
                <enhanced:img
                  src="/src/assets/illustrations/mathesar-badge.png"
                  alt="Mathesar"
                  class="w-28 h-28 md:w-44 md:h-44 animate-float"
                />
              </div>

              <div
                class="w-28 h-28 md:w-48 md:h-48 flex-shrink-0 flex items-center justify-center relative z-10 rotate-12"
              >
                <enhanced:img
                  src="/src/assets/illustrations/front-end-badge.png"
                  alt="Frontend"
                  class="w-24 h-24 md:w-28 md:h-28 animate-float-slow"
                />
              </div>
            </div>

            <div class="relative flex items-center justify-center -mt-20">
              <div class="absolute -left-4 w-2/5 -rotate-6 z-0">
                <enhanced:img
                  src="/src/assets/illustrations/postgres-frame.png"
                  alt="PostgreSQL Interface"
                  class="w-full rounded-lg shadow-lg border-2 border-stormy-700/20"
                />
              </div>

              <div class="w-1/2 z-10">
                <enhanced:img
                  src="/src/assets/illustrations/mathesar-frame.png"
                  alt="Mathesar Interface"
                  class="w-full rounded-lg shadow-xl border-2 border-stormy-700/20"
                />
              </div>

              <div class="absolute -right-4 w-2/5 rotate-6">
                <enhanced:img
                  src="/src/assets/illustrations/front-end-frame.png"
                  alt="Frontend Interface"
                  class="w-full rounded-lg shadow-lg border-2 border-stormy-700/20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="relative -mt-56 z-10">
    <SectionCurve direction="bottom" inverted />
  </div>
</div>

<section class="relative pt-20 bg-stormy-50 overflow-x-clip">
  <div class="flex justify-center">
    <enhanced:img
      src="/src/assets/illustrations/database-badge.png"
      alt="database"
      class="w-32 md:w-40 animate-float-delayed"
    />
  </div>

  <div class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8 lg:mb-16">
      <h2>
        <span
          class="block text-4xl sm:text-5xl lg:text-6xl font-bold text-stormy-800"
        >
          Empower your team
        </span>
        <span
          class="block text-4xl sm:text-5xl lg:text-6xl font-bold text-stormy-800 mt-1"
        >
          while maintaining full control
        </span>
      </h2>
      <p class="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
        Mathesar's intuitive UI gives everyone access to the tools they need,
        backed by Postgres permissions to keep your data safe.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div>
        <div
          class="bg-white/100 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row lg:flex-col md:gap-4 lg:gap-0 h-full"
        >
          <div class="md:w-1/2 w-auto lg:w-auto">
            <h3 class="text-2xl font-bold text-stormy-800 mb-4">
              Deep Postgres Integration
            </h3>
            <p class="text-gray-600 mb-8">
              Mathesar works directly with your Postgres database, using its
              native schemas, tables, and role-based permissions. Your team gets
              secure and reliable access control, built right into the database
              itself.
            </p>
          </div>
          <div class="md:w-1/2 w-auto lg:w-auto">
            <enhanced:img
              src="/src/assets/illustrations/data-setup.png"
              alt="Spreadsheet interface"
              class="rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white/100 rounded-2xl p-8 shadow-sm flex flex-col md:flex-row lg:flex-col md:gap-4 lg:gap-0 h-full"
        >
          <div class="md:w-1/2 w-auto lg:w-auto">
            <h3 class="text-2xl font-bold text-stormy-800 mb-4">
              Intuitive Exploration and Querying
            </h3>
            <p class="text-gray-600 mb-8">
              Mathesar lets anyone explore data with zero knowledge of SQL. Join
              tables, filter, sort, group, and summarize data effortlessly to
              create custom views tailored to your needs.
            </p>
          </div>
          <div class="md:w-1/2 w-auto lg:w-auto">
            <enhanced:img
              src="/src/assets/illustrations/exploration-query.png"
              alt="Visual query builder"
              class="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div>
        <div
          class="bg-white/100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row lg:flex-col md:gap-4 lg:gap-0 h-full"
        >
          <div class="md:w-1/2 w-auto lg:w-auto">
            <h3 class="text-xl font-bold text-stormy-800 mb-3">
              Spreadsheet-Like Interface
            </h3>
            <p class="text-gray-600 mb-6">
              Mathesar provides a simple, spreadsheet-like UI for viewing,
              editing, and organizing your data. You and your team can update
              information, fix mistakes, and enter new records quickly—no
              learning curve required.
            </p>
          </div>
          <div class="md:w-1/2 w-auto lg:w-auto">
            <enhanced:img
              src="/src/assets/illustrations/spreadsheet-ui.png"
              alt="Data entry interface"
              class="rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white/100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row lg:flex-col md:gap-4 lg:gap-0 h-full"
        >
          <div class="md:w-1/2 w-auto lg:w-auto">
            <h3 class="text-xl font-bold text-stormy-800 mb-3">
              Fits Any Workflow
            </h3>
            <p class="text-gray-600 mb-6">
              Mathesar works harmoniously with your production database and
              other tools in the ecosystem. Import and export data directly in
              Mathesar's UI, and connect your database to thousands of Postgres
              integrations for a smooth, unified workflow.
            </p>
          </div>
          <div class="md:w-1/2 w-auto lg:w-auto">
            <enhanced:img
              src="/src/assets/illustrations/data-export.png"
              alt="Filtering interface"
              class="rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      <div>
        <div
          class="bg-white/100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row lg:flex-col md:gap-4 lg:gap-0 h-full"
        >
          <div class="md:w-1/2 w-auto lg:w-auto">
            <h3 class="text-xl font-bold text-stormy-800 mb-3">Simple Setup</h3>
            <p class="text-gray-600 mb-6">
              Installing Mathesar takes just minutes with Docker, and upgrades
              are just as simple. Whether on your own infrastructure or
              integrated into your workflow, Mathesar fits right in with minimal
              effort.
            </p>
          </div>
          <div class="md:w-1/2 w-auto lg:w-auto">
            <enhanced:img
              src="/src/assets/illustrations/data-entry.png"
              alt="Setup interface"
              class="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <CTASection />
</section>
