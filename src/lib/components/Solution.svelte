<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Picture } from "vite-imagetools";
  import type { Solution } from "$lib/util/getSolutions.server";

  import CTASection from "$lib/components/CTASection.svelte";
  import EnlargableImage from "./EnlargableImage.svelte";
  import Stickers from "./Stickers.svelte";

  import CheckCircle from "iconoir/icons/check-circle.svg?component";

  export let solution: Solution;

  // Import all the icons
  import BoxIso from "iconoir/icons/box-iso.svg?component";
  import Database from "iconoir/icons/database.svg?component";
  import Headset from "iconoir/icons/headset.svg?component";
  import GraphUp from "iconoir/icons/graph-up.svg?component";
  import Dollar from "iconoir/icons/dollar.svg?component";
  import Clock from "iconoir/icons/clock.svg?component";

  const iconComponents: Record<string, any> = {
    BoxIso,
    Database,
    Headset,
    GraphUp,
    Dollar,
    Clock,
  };

  // Load all solution images initially.
  // This isn't great.
  const imageModules = import.meta.glob<SvelteComponent<Picture>>(
    "/src/assets/solutions/**/*.png",
    {
      eager: true,
      query: {
        enhanced: true,
      },
    },
  );
</script>

<div class="text-white antialiased overflow-x-hidden z-10">
  <section class="relative pt-12 md:pt-24 pb-12">
    <Stickers variant="solution" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-start pb-16 lg:pb-48"
      >
        <div class="lg:col-span-2 lg:max-w-3xl">
          <div
            class="flex items-center justify-center gap-5 lg:gap-8 mb-8 w-full"
          >
            <div
              class="inline-flex bg-plum-800 text-pumpkin-400 items-center justify-center shrink-0 w-20 h-20 rounded-2xl"
            >
              {#if iconComponents[solution.meta.icon]}
                <svelte:component
                  this={iconComponents[solution.meta.icon]}
                  class="text-lg w-16"
                />
              {/if}
            </div>
            <h1 class="flex-grow">
              <span
                class="block text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
              >
                {solution.title}
              </span>
            </h1>
          </div>

          <p
            class="block text-xl sm:text-2xl text-stormy-200 font-normal leading-relaxed"
          >
            {solution.description}
          </p>

          {#if solution.mathesarFeatures}
            <div class="mt-6">
              <p class="text-stormy-200 text-lg lg:text-xl">
                With features like:
              </p>
              <div
                class="flex-col flex md:flex-row items-start flex-wrap gap-2 md:gap-3 mt-4"
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

          <div class="mt-8 lg:-mb-48 relative z-10">
            {#each Object.entries(imageModules) as [_path, module]}
              {#if _path.includes(solution.meta.image!)}
                <EnlargableImage
                  loading="lazy"
                  fetchpriority="high"
                  src={module.default}
                  alt={solution.title}
                  class="w-full h-auto rounded-lg border-2"
                  sizes="(min-width: 768px) min(800px, 100vw), min(100vw - 32px, 800px)"
                />
              {/if}
            {/each}
          </div>
        </div>

        <div class="space-y-6 relative lg:col-span-1">
          <h2 class="text-2xl font-bold text-white mb-8">What You Can Do</h2>
          {#if solution.features}
            {#each solution.features as feature}
              <div class="relative flex items-start gap-6">
                <div
                  class="w-6 h-6border-2 lex items-center justify-center flex-shrink-0"
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
        class="w-full h-20 lg:h-40 fill-stormy-50 transform rotate-180"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M 0,120 A 800,200 0 0,1 1200,120 V 0 H 0 Z" />
      </svg>
    </div>
  </section>

  <section class="relative overflow-x-hidden bg-stormy-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section class="example">
        <h2 class="text-stormy-800 text-5xl tracking-tight font-bold mb-4">
          See it in Action
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {#each solution.screenshots as screenshot, index}
            <div class="screenshot-card">
              {#each Object.entries(imageModules) as [_path, module]}
                {#if _path.includes(`${solution.id}/step-${index + 1}-light.png`)}
                  <EnlargableImage
                    loading="lazy"
                    fetchpriority="high"
                    src={module.default}
                    alt={solution.title}
                    class="w-full h-auto rounded-lg border-2"
                    sizes="(min-width: 768px) min(800px, 100vw), min(100vw - 32px, 800px)"
                  />
                {/if}
              {/each}
              <p class="mt-4 text-stormy-700 text-center">
                {screenshot.caption}
              </p>
            </div>
          {/each}
        </div>
      </section>

      <section class="similar-cases pt-16">
        <h2 class="text-stormy-800 text-3xl font-bold mb-8">
          Similar Solutions
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
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
