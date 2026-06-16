<script lang="ts">
  import type { SolutionNavItem } from "$lib/solutions/schema";
  import { solutionIcons } from "$lib/solutions/icons";

  export let solutions: SolutionNavItem[];
</script>

<nav class="relative mb-12">
  <div
    class="max-w-7xl rounded-2xl mx-auto p-3 relative overflow-x-scroll no-scrollbar"
  >
    <div class="flex justify-between gap-4 relative">
      {#each solutions as solution}
        <button
          type="button"
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
            <svelte:component
              this={solutionIcons[solution.icon]}
              class="text-3xl text-pumpkin-300 w-full"
            />
          </div>
          <div class="flex-1 flex items-center min-h-[40px]">
            <span
              class="font-semibold text-stormy-100 text-center whitespace-normal"
            >
              {solution.categoryTitle}
            </span>
          </div>
        </button>
      {/each}
    </div>
  </div>
</nav>
