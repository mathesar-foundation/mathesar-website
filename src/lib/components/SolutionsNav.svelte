<script lang="ts">
  export let solutions: any[];
  // Import all the icons
  import BoxIso from "iconoir/icons/box-iso.svg?component";
  import Database from "iconoir/icons/database.svg?component";
  import Headset from "iconoir/icons/headset.svg?component";
  import GraphUp from "iconoir/icons/graph-up.svg?component";
  import Dollar from "iconoir/icons/dollar.svg?component";
  import Clock from "iconoir/icons/clock.svg?component";

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

<nav class="relative mb-12">
  <div
    class="max-w-7xl rounded-2xl mx-auto p-3 relative overflow-x-scroll no-scrollbar"
  >
    <div class="flex justify-between gap-4 relative">
      {#each solutions as solution}
        <button
          on:click={() => {
            document
              .getElementById(solution.id)
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          class="w-[160px] lg:w-auto flex flex-col items-center gap-3 p-4 rounded-lg transition-all min-w-0 flex-shrink-0 lg:flex-1
          bg-stormy-700/30 backdrop-blur-sm
          border border-plum-500/20
          hover:-translate-y-1 hover:border-plum-500/30
          active:transform active:scale-[0.98]
          cursor-pointer"
        >
          <div
            class="p-3 w-14 h-14 rounded-full flex items-center justify-center bg-plum-700"
          >
            {#if iconComponents[solution.meta.icon]}
              <svelte:component
                this={iconComponents[solution.meta.icon]}
                class="text-3xl text-pumpkin-300 w-full"
              />
            {/if}
          </div>
          <div class="flex-1 flex items-center min-h-[40px]">
            <span
              class="font-semibold text-stormy-100 text-center whitespace-normal"
            >
              {solution.category.title}
            </span>
          </div>
        </button>
      {/each}
    </div>
  </div>
</nav>
