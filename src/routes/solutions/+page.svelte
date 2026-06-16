<script lang="ts">
  import SolutionsNav from "$lib/components/SolutionsNav.svelte";
  import CTASection from "$lib/components/CTASection.svelte";
  import NoOrphan from "$lib/components/NoOrphan.svelte";
  import Seo from "$lib/components/SEO.svelte";
  import Stickers from "$lib/components/Stickers.svelte";
  import { getSolutionImages } from "$lib/solutions/images";
  import { solutionIcons } from "$lib/solutions/icons";
  import { getSolutionPresentation } from "$lib/solutions/presentation";

  import ArrowRight from "iconoir/icons/arrow-right.svg?component";

  export let data;
  let { solutions, solutionNavItems } = data;
</script>

<Seo title="Solutions" image="/og/og-solutions.png" />

<div class="text-white antialiased mb-10">
  <section class="relative pt-12 lg:pt-14 overflow-x-clip">
    <Stickers variant="solutions" />

    <div class="relative z-20 site-container">
      <div class="text-center max-w-4xl mx-auto mb-8 lg:mb-12">
        <h1
          data-hero-heading
          class="text-balance text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6"
        >
          <span class="text-white">Simple solutions,</span>
          <span class="text-pumpkin-400"
            ><NoOrphan text="minimal hassle." /></span
          >
        </h1>
        <p class="text-xl sm:text-2xl text-stormy-200 mt-4 mb-6">
          A single tool with countless uses. Mathesar makes it simple and risk
          free for data owners to quickly and safely empower users to share,
          edit, and sort the data they need in an interface they're familiar
          with, all with no code and minimal setup.
        </p>
      </div>
    </div>
  </section>

  <SolutionsNav solutions={solutionNavItems} />

  <section class="z-20 relative overflow-x-clip">
    <div class="relative site-container">
      <div class="space-y-8 max-w-6xl mx-auto">
        {#each solutions as solution}
          {@const presentation = getSolutionPresentation(solution.id)}
          {@const images = getSolutionImages(solution.id)}
          {@const Icon = solutionIcons[presentation.icon]}
          <div
            id={solution.id}
            class="relative rounded-2xl lg:pl-8 backdrop-blur-sm
            bg-white/[0.98] overflow-hidden
            {presentation.indexCard.beforeGradientClass}
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

            <div class="relative flex flex-col md:flex-row gap-6 lg:gap-8">
              <div
                class="pt-6 p-5 lg:p-0 lg:pt-0 flex-1 flex flex-col justify-center"
              >
                <div class="mb-2 flex items-center gap-2">
                  <svelte:component
                    this={Icon}
                    class={`text-2xl w-6 ${presentation.indexCard.iconTextClass}`}
                  />
                  <span class="text-lg lg:text-xl font-medium text-stormy-800">
                    {solution.title}
                  </span>
                </div>

                <div class="mb-5">
                  <h3
                    class="text-2xl lg:text-[2.75rem] font-bold text-stormy-900 leading-[1.1] mb-3 tracking-tight"
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
                      <enhanced:img
                        src={images.listingIllustration}
                        alt={images.listingIllustrationAlt}
                        class="w-full h-full object-cover"
                        sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, min(100vw - 32px, 640px)"
                      />
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
