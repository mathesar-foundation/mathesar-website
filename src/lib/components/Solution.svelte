<script lang="ts">
  import type { SolutionContent } from "$lib/solutions/schema";
  import { getSolutionImages } from "$lib/solutions/images";
  import { solutionIcons } from "$lib/solutions/icons";
  import { getSolutionPresentation } from "$lib/solutions/presentation";

  import CTASection from "$lib/components/CTASection.svelte";
  import EnlargableImage from "./EnlargableImage.svelte";
  import NoOrphan from "./NoOrphan.svelte";
  import Stickers from "./Stickers.svelte";

  import CheckCircle from "iconoir/icons/check-circle.svg?component";

  export let solution: SolutionContent;

  $: presentation = getSolutionPresentation(solution.id);
  $: images = getSolutionImages(solution.id);
  $: Icon = solutionIcons[presentation.icon];
</script>

<div class="text-white antialiased overflow-x-hidden z-10">
  <section class="relative pt-8 md:pt-12 pb-8">
    <Stickers variant="solution" />

    <div class="relative site-container">
      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start pb-10 lg:pb-28"
      >
        <div class="lg:col-span-2 lg:max-w-3xl">
          <div
            class="flex items-center justify-center gap-4 lg:gap-5 mb-5 w-full"
          >
            <div
              class="inline-flex bg-plum-800 text-pumpkin-400 items-center justify-center shrink-0 w-20 h-20 rounded-2xl"
            >
              <svelte:component this={Icon} class="text-lg w-16" />
            </div>
            <h1 data-hero-heading class="text-balance flex-grow">
              <span
                class="block text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
              >
                <NoOrphan text={solution.title} />
              </span>
            </h1>
          </div>

          <p
            class="block text-xl sm:text-2xl text-stormy-200 font-normal leading-relaxed"
          >
            {solution.description}
          </p>

          {#if solution.mathesarFeatures}
            <div class="mt-5">
              <p class="text-stormy-200 text-lg lg:text-xl">
                With features like:
              </p>
              <div
                class="flex-col flex md:flex-row items-start flex-wrap gap-2 md:gap-3 mt-3"
              >
                {#each solution.mathesarFeatures as feature, i}
                  <div
                    class={`px-2 py-1 rounded-lg font-medium border ${
                      [
                        "border-pumpkin-400/90 text-pumpkin-200",
                        "border-salmon-400/90 text-salmon-200",
                        "border-sapphire-400/90 text-sapphire-200",
                        "border-rosy-400/90 text-rosy-200",
                        "border-olivia-400/90 text-olivia-200",
                        "border-plum-400/90 text-plum-200",
                      ][i % 6]
                    }`}
                  >
                    {feature.title}
                  </div>
                {/each}
              </div>
            </div>
          {/if}

          <div class="mt-5 lg:-mb-28 relative z-10">
            <EnlargableImage
              loading="lazy"
              fetchpriority="high"
              src={images.primary}
              alt={solution.title}
              class="w-full h-auto rounded-lg border-2"
              sizes="(min-width: 768px) min(800px, 100vw), min(100vw - 32px, 800px)"
            />
          </div>
        </div>

        <div class="space-y-5 relative lg:col-span-1">
          <h2 class="text-2xl font-bold text-white mb-5">What You Can Do</h2>
          {#if solution.features}
            {#each solution.features as feature}
              <div class="relative flex items-start gap-4">
                <div
                  class="w-6 h-6 flex items-center justify-center flex-shrink-0"
                >
                  <CheckCircle class="text-base text-pumpkin-500" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p class="text-stormy-200">{feature.description}</p>
                </div>
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 inset-x-0">
      <svg
        class="w-full h-14 lg:h-24 fill-stormy-50 transform rotate-180"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M 0,120 A 800,200 0 0,1 1200,120 V 0 H 0 Z" />
      </svg>
    </div>
  </section>

  <section class="relative overflow-x-hidden bg-stormy-50">
    <div class="site-container">
      <section class="example">
        <h2 class="text-stormy-800 text-5xl tracking-tight font-bold mb-4">
          See it in Action
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          {#each solution.screenshots as screenshot, index}
            <div class="screenshot-card">
              <EnlargableImage
                loading="lazy"
                fetchpriority="high"
                src={images.screenshots[index]}
                alt={solution.title}
                class="w-full h-auto rounded-lg border-2"
                sizes="(min-width: 768px) min(800px, 100vw), min(100vw - 32px, 800px)"
              />
              <p class="mt-4 text-stormy-700 text-center">
                {screenshot.caption}
              </p>
            </div>
          {/each}
        </div>
      </section>

      <section class="similar-cases pt-10">
        <h2 class="text-stormy-800 text-3xl font-bold mb-6">
          Similar Solutions
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
          {#if solution.similarSolutions}
            {#each solution.similarSolutions as similarSolution}
              <div>
                <h3 class="text-stormy-800 text-xl font-bold mb-3">
                  {similarSolution.title}
                </h3>
                <p class="text-stormy-600 leading-relaxed">
                  {similarSolution.description}
                </p>
              </div>
            {/each}
          {/if}
        </div>
      </section>
    </div>

    <CTASection />
  </section>
</div>
