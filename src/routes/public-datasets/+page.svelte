<script lang="ts">
  import CtaSection from "$lib/components/CTASection.svelte";
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import Seo from "$lib/components/SEO.svelte";
  import Stickers from "$lib/components/Stickers.svelte";

  const colors = [
    "bg-sapphire-200",
    "bg-plum-200",
    "bg-rosy-200",
    "bg-salmon-200",
    "bg-pumpkin-200",
    "bg-olivia-200",
  ];

  const datasets = [
    {
      slug: "insider-trading",
      title: "Insider Trading",
      description:
        "SEC filings from corporate insiders including officers, directors, and large shareholders. Contains Forms 3, 4, and 5 submissions showing beneficial ownership changes and transactions.",
      url: "https://insider-trading.mathesar.org/",
      category: "Financial",
      color: "bg-sapphire-200",
    },
  ];

  const featuredSlug = "insider-trading";

  let featuredDataset = datasets.find(
    (dataset) => dataset.slug === featuredSlug,
  );
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
          Making data <br /><span class="text-pumpkin-400"
            >accessible to everyone</span
          >
        </h1>

        <p class="text-xl sm:text-2xl text-stormy-100 mt-6 mb-12">
          The Mathesar Foundation is comitted to sharing and preserving public
          datasets lorem ipsum
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
                Sharing data lorem ipsum
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
              </div>
            </div>
          </div>

          <!-- Fixed featured dataset positioning within grid layout -->
          <div class="md:col-span-3 flex items-center">
            <div class="w-full">
              {#if featuredDataset}
                <div
                  class="bg-white rounded-xl shadow-lg p-6 border border-stormy-200"
                >
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-3 h-3 bg-pumpkin-400 rounded-full"></div>
                    <span
                      class="text-stormy-600 text-sm font-medium tracking-wider uppercase"
                      >Featured Dataset</span
                    >
                  </div>

                  <h3 class="text-2xl font-bold text-stormy-800 mb-3">
                    {featuredDataset.title}
                  </h3>

                  <p class="text-stormy-600 text-sm mb-4 leading-relaxed">
                    {featuredDataset.description}
                  </p>

                  <div class="flex items-center justify-between">
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sapphire-100 text-sapphire-800"
                    >
                      {featuredDataset.category}
                    </span>
                    <a
                      href={featuredDataset.url}
                      class="inline-flex items-center text-pumpkin-600 hover:text-pumpkin-700 font-medium text-sm transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore Dataset
                      <svg
                        class="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              {/if}
            </div>
          </div>
        </div>
      </div>

      <!-- Moved CtaSection outside of datasets grid section -->
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2
            class="text-3xl sm:text-4xl font-bold tracking-tight text-stormy-800 mb-4"
          >
            Explore Our Datasets
          </h2>
          <p class="text-lg text-stormy-600 max-w-2xl mx-auto">
            Discover curated public datasets made accessible through our
            platform
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each datasets as dataset, index}
            <div
              class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-stormy-200 overflow-hidden group"
            >
              <div class="h-2 {dataset.color}"></div>

              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <h3
                    class="text-xl font-bold text-stormy-800 group-hover:text-pumpkin-600 transition-colors"
                  >
                    {dataset.title}
                  </h3>
                  <span
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stormy-100 text-stormy-700"
                  >
                    {dataset.category}
                  </span>
                </div>

                <p
                  class="text-stormy-600 text-sm mb-4 leading-relaxed line-clamp-3"
                >
                  {dataset.description}
                </p>

                <a
                  href={dataset.url}
                  class="inline-flex items-center text-pumpkin-600 hover:text-pumpkin-700 font-medium text-sm transition-colors group-hover:translate-x-1 transform duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Dataset
                  <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          {/each}

          <div
            class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-dashed border-pumpkin-300 overflow-hidden group cursor-pointer"
          >
            <div class="p-6 text-center">
              <div class="flex justify-center mb-4">
                <div
                  class="w-12 h-12 bg-pumpkin-100 rounded-full flex items-center justify-center group-hover:bg-pumpkin-200 transition-colors"
                >
                  <svg
                    class="w-6 h-6 text-pumpkin-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </div>
              </div>

              <h3
                class="text-xl font-bold text-stormy-800 group-hover:text-pumpkin-600 transition-colors mb-3"
              >
                Request a Dataset
              </h3>

              <p class="text-stormy-600 text-sm mb-4 leading-relaxed">
                Have a public dataset you'd like to see made accessible? Submit
                a request and we'll work to add it to our platform.
              </p>

              <button
                class="inline-flex items-center text-pumpkin-600 hover:text-pumpkin-700 font-medium text-sm transition-colors group-hover:translate-x-1 transform duration-200"
              >
                Submit Request
                <svg
                  class="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="bg-stormy-50">
    <CtaSection />
  </div>
</div>

<style>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
