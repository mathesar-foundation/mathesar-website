<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import type { Picture } from "vite-imagetools";
  import type { Solution } from "$lib/util/getSolutions.server";
  import EnlargableImage from "./EnlargableImage.svelte";
  import SectionCurve from "./SectionCurve.svelte";

  import ArrowRight from "iconoir/icons/arrow-right.svg?component";

  export let solutions: Solution[] = [];
  let selectedSolution = solutions.length > 0 ? solutions[0] : undefined;

  function selectSolution(solution: Solution) {
    selectedSolution = solution;
  }

  // Import all the icons
  import BoxIso from "iconoir/icons/box-iso.svg?component";
  import Database from "iconoir/icons/database.svg?component";
  import Headset from "iconoir/icons/headset.svg?component";
  import GraphUp from "iconoir/icons/graph-up.svg?component";
  import Dollar from "iconoir/icons/dollar.svg?component";
  import Clock from "iconoir/icons/clock.svg?component";

  // Load images
  const imageModules = import.meta.glob<SvelteComponent<Picture>>(
    "/src/assets/solutions/**/primary-table.png",
    {
      eager: true,
      query: {
        enhanced: true,
      },
    },
  );

  // Map icons to their component imports
  const iconComponents: Record<string, any> = {
    BoxIso,
    Database,
    Headset,
    GraphUp,
    Dollar,
    Clock,
  };
</script>

<section class="relative">
  <enhanced:img
    src="/src/assets/floating-elephant-sm.png"
    alt="Mathesar Elephant Logo"
    class="hidden lg:block lg:absolute lg:w-[350px] lg:top-[-50px] lg:left-1/2 lg:-translate-x-1/2 z-20"
  />
  <SectionCurve direction="bottom" />

  <div class="h-30 w-full p-4"></div>

  <div class="mx-auto pt-24 px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-8 lg:mb-16">
      <h2 class="flex flex-col items-center gap-2">
        <span class="text-4xl sm:text-5xl lg:text-6xl text-stormy-100">
          Simple solutions,
        </span>
        <span
          class="text-4xl sm:text-5xl lg:text-6xl font-black text-pumpkin-400"
        >
          minimal hassle
        </span>
      </h2>
      <p class="text-xl text-stormy-100 mt-6 max-w-3xl mx-auto">
        A single tool with hundreds of uses. Mathesar makes it simple and
        low-risk for data owners to quickly empower all types of users to view,
        edit, and understand the data they need, in an intuitive interface
        they're familiar with.
      </p>
    </div>

    <div class="block overflow-x-scroll no-scrollbar w-full">
      <div
        class="grid grid-flow-col lg:flex justify-between gap-4 max-w-7xl mx-auto"
      >
        {#each solutions as solution}
          <button
            class="w-[160px] lg:w-auto flex flex-col items-center gap-3 p-3 rounded-lg transition-all border border-transparent flex-1"
            class:bg-stormy-50={solution === selectedSolution}
            on:click={() => selectSolution(solution)}
          >
            <div
              class="p-3 w-12 h-12 rounded-full flex items-center justify-center transition-all"
              class:bg-plum-700={solution !== selectedSolution}
              class:bg-salmon-300={solution === selectedSolution}
              class:text-pumpkin-300={solution !== selectedSolution}
              class:text-salmon-600={solution === selectedSolution}
              class:text-2xl={solution !== selectedSolution}
              class:text-3xl={solution === selectedSolution}
            >
              {#if iconComponents[solution.meta.icon]}
                <svelte:component
                  this={iconComponents[solution.meta.icon]}
                  class="transition-all w-full"
                />
              {/if}
            </div>
            <div class="flex-1 flex items-center min-h-[40px]">
              <span
                class="font-semibold text-stormy-100 text-center transition-colors whitespace-normal"
                class:text-stormy-800={solution === selectedSolution}
                >{solution.category.title}</span
              >
            </div>
          </button>
        {/each}
      </div>
    </div>

    <div
      class="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-32 max-w-7xl mx-auto mt-12 lg:mt-20"
    >
      <div class="flex flex-col items-start justify-start lg:col-span-2">
        <h3 class="text-3xl font-bold text-white mb-4">
          {selectedSolution?.category.title}
        </h3>
        <p class="text-xl leading-relaxed tracking-wide mb-6">
          {@html selectedSolution?.category.description}
        </p>
        <p>
          <a
            href={`/solutions/${selectedSolution?.id}`}
            class="group inline-flex items-center gap-4 px-6 py-3 rounded-lg text-md font-semibold
          bg-stormy-800/60 text-white
          border-2 border-pumpkin-500
          shadow-lg transition-all duration-300
          hover:bg-stormy-700/80 hover:shadow-md
          active:transform active:scale-[0.98]"
            ><span>See example</span>
            <ArrowRight class="w-6 text-2xl text-pumpkin-500" />
          </a>
        </p>
      </div>

      <div class="relative mt-8 lg:mt-0 lg:col-span-3 lg:-mr-20">
        <div
          class="absolute -inset-5 bg-gradient-to-tr from-salmon-500/40 via-sapphire-500/10 to-pumpkin-500/10 blur-3xl"
        ></div>
        <div
          class="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-sapphire-600 via-salmon-500 to-pumpkin-500 rounded-xl"
        ></div>

        {#each Object.entries(imageModules) as [_path, module]}
          {#if _path.includes(selectedSolution?.meta.image!)}
            <EnlargableImage
              loading="lazy"
              fetchpriority="high"
              src={module.default}
              alt={selectedSolution?.title}
              class="relative w-full rounded-xl shadow-2xl"
            />
          {/if}
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  :global(:root) {
    --color-pumpkin-300: #f8d589;
    --color-salmon-300: #f9ac93;
    --color-sapphire-300: #c39fdd;
    --color-rosy-300: #f9aaaa;
    --color-olivia-300: #c6ad77;
    --color-plum-300: #d3adc3;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.05;
    }
    50% {
      opacity: 0.15;
    }
  }
</style>
