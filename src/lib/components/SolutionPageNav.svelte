<script lang="ts">
  export let solutions: any[];
  export let currentSolutionId: string;

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

  function scrollToItem(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const container = target.parentElement;

    if (container) {
      const containerWidth = container.offsetWidth;
      const itemWidth = target.offsetWidth;
      const scrollPosition =
        target.offsetLeft - containerWidth / 2 + itemWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }
</script>

<nav class="sticky bg-stormy-950 top-0 z-50 border-t border-pumpkin-300/10">
  <div class="mx-auto max-w-full">
    <div
      class="flex xl:justify-center items-center gap-1 h-16 overflow-x-auto no-scrollbar [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      {#each solutions as solution}
        <a
          href="/solutions/{solution.id}"
          on:click={scrollToItem}
          class="flex items-center gap-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap

          {solution.id === currentSolutionId
            ? 'bg-pumpkin-500/20 text-pumpkin-200'
            : 'text-stormy-100 hover:text-pumpkin-200 hover:bg-pumpkin-500/10'}"
        >
          {#if iconComponents[solution.meta.icon]}
            <svelte:component
              this={iconComponents[solution.meta.icon]}
              class="w-4"
            />
          {/if}
          <span class="text-sm font-medium">{solution.title}</span>
        </a>
      {/each}
    </div>
  </div>
</nav>

<style>
  .no-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
</style>
