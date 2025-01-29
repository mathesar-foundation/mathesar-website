<script lang="ts">
  import SolutionsNav from "$lib/components/SolutionsNav.svelte";
  import CTASection from "$lib/components/CTASection.svelte";
  import Seo from "$lib/components/SEO.svelte";
  import Stickers from "$lib/components/Stickers.svelte";

  import ArrowRight from "iconoir/icons/arrow-right.svg?component";

  export let data;
  let { solutions } = data;

  const decorativeStyles = {
    "hardware-store-chain": { rotation: -6, top: -15, right: -10 },
    museum: { rotation: 4, top: 10, right: -20 },
    "bike-shop": { rotation: -3, top: -20, right: 15 },
    makerspace: { rotation: 6, top: 5, right: -15 },
    nonprofit: { rotation: -5, top: -10, right: 10 },
    "ice-cream-distributor": { rotation: 3, top: 15, right: -5 },
  } as const;
</script>

<Seo 
  title="Solutions" 
  image="/og/og-solutions.png"
/>

<div class=" text-white antialiased mb-20">
  <section class="relative pt-20 overflow-x-clip">
    <Stickers variant="solutions" />

    <div class="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-4xl mx-auto mb-20">
        <h1
          class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6"
        >
          <span class="text-white">Simple solutions,</span>
          <span class="text-pumpkin-400">minimal hassle.</span>
        </h1>
        <p class="text-xl sm:text-2xl text-stormy-200 mt-6 mb-12">
          A single tool with countless uses. Mathesar makes it simple and risk
          free for data owners to quickly and safely empower users to share,
          edit, and sort the data they need in an interface they're familiar
          with, all with no code and minimal setup.
        </p>
      </div>
    </div>
  </section>

  <SolutionsNav {solutions} />

  <section class="z-20 relative overflow-x-clip">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-12 max-w-6xl mx-auto">
        {#each solutions as solution}
          <div
            id={solution.id}
            class="relative rounded-2xl lg:pl-12 backdrop-blur-sm
            bg-white/[0.98] overflow-hidden
            {solution.id === 'hardware-store-chain'
              ? 'before:bg-gradient-to-br before:from-azure-500/20 before:to-azure-600/10'
              : solution.id === 'museum'
                ? 'before:bg-gradient-to-br before:from-sapphire-500/20 before:to-sapphire-600/10'
                : solution.id === 'bike-shop'
                  ? 'before:bg-gradient-to-br before:from-plum-500/20 before:to-plum-600/10'
                  : solution.id === 'makerspace'
                    ? 'before:bg-gradient-to-br before:from-rosy-500/20 before:to-rosy-600/10'
                    : solution.id === 'nonprofit'
                      ? 'before:bg-gradient-to-br before:from-salmon-500/20 before:to-salmon-600/10'
                      : 'before:bg-gradient-to-br before:from-pumpkin-500/20 before:to-pumpkin-600/10'}
            before:absolute before:inset-0 before:pointer-events-none
            group"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-sm"
            ></div>
            <div
              class="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
            ></div>

            <div class="relative flex flex-col md:flex-row gap-16">
              <div
                class="pt-12 p-6 lg:p-0 lg:pt-0 flex-1 flex flex-col justify-center"
              >
                <div class="mb-2 flex items-center gap-2">
                  <i
                    class="{solution.meta.icon} text-2xl
                    {solution.id === 'hardware-store-chain'
                      ? 'text-sapphire-500'
                      : solution.id === 'museum'
                        ? 'text-sapphire-500'
                        : solution.id === 'bike-shop'
                          ? 'text-plum-500'
                          : solution.id === 'makerspace'
                            ? 'text-rosy-500'
                            : solution.id === 'nonprofit'
                              ? 'text-salmon-500'
                              : 'text-pumpkin-500'}"
                  ></i>
                  <span class="text-lg lg:text-xl font-medium text-stormy-800">
                    {solution.title}
                  </span>
                </div>

                <div class="mb-8">
                  <h3
                    class="text-2xl lg:text-[2.75rem] font-bold text-stormy-900 leading-[1.1] mb-4 tracking-tight"
                  >
                    {solution.category.title}
                  </h3>
                  <p
                    class="text-lg text-stormy-700 leading-relaxed max-w-xl font-medium"
                  >
                    {solution.category.description}
                  </p>
                </div>

                <a
                  href="/solutions/{solution.id}"
                  class="group inline-flex items-center gap-4 px-6 py-3.5 rounded-lg text-lg font-semibold
                    bg-plum-300/20 text-plum-800
                    border-2 border-plum-500
                    shadow-lg transition-all duration-300
                    hover:bg-plum-400/20 hover:shadow-md
                    active:transform active:scale-[0.98]
                    w-fit"
                >
                  <span>Explore {solution.title}</span>
                  <ArrowRight class="w-6 text-2xl text-plum-500" />
                </a>
              </div>

              <div class="flex-1">
                <div class="relative">
                  <div
                    class="w-full aspect-square rounded-2xl relative flex items-center"
                  >
                    <div
                      class="w-full aspect-square rounded-2xl 0 relative flex items-center"
                    >
                      {#if solution.id === "hardware-store-chain"}
                        <enhanced:img
                          src="/src/assets/illustrations/hardware-shop.png"
                          alt="Hardware shop illustration"
                          class="w-full h-full object-cover"
                        />
                      {:else if solution.id === "museum"}
                        <enhanced:img
                          src="/src/assets/illustrations/museum-exhibit.png"
                          alt="Museum exhibit illustration"
                          class="w-full h-full object-cover"
                        />
                      {:else if solution.id === "bike-shop"}
                        <enhanced:img
                          src="/src/assets/illustrations/bike-shop.png"
                          alt="Bike shop illustration"
                          class="w-full h-full object-cover"
                        />
                      {:else if solution.id === "makerspace"}
                        <enhanced:img
                          src="/src/assets/illustrations/library-makerspace.png"
                          alt="Library makerspace illustration"
                          class="w-full h-full object-cover"
                        />
                      {:else if solution.id === "nonprofit"}
                        <enhanced:img
                          src="/src/assets/illustrations/non-profit-grant.png"
                          alt="Library makerspace illustration"
                          class="w-full h-full object-cover"
                        />
                      {:else if solution.id === "ice-cream-distributor"}
                        <enhanced:img
                          src="/src/assets/illustrations/ice-cream-distributor.png"
                          alt="Ice cream distributor illustration"
                          class="w-full h-full object-cover"
                        />
                      {/if}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
<CTASection />
