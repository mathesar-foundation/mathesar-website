<script>
  import ArrowUp from "iconoir/icons/arrow-up.svg?component";

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  let showBackToTop = false;

  function handleScroll() {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollThreshold = totalHeight * 0.6; // 60% of the page, so last 40% is below this point

    showBackToTop = window.scrollY > scrollThreshold;
  }
</script>

<svelte:window on:scroll={handleScroll} />

{#if showBackToTop}
  <div class="fixed bottom-2 lg:bottom-8 w-full text-center z-40 px-6">
    <button
      on:click={scrollToTop}
      class=" mx-auto lg:ml-auto lg:mr-0 bg-salmon-500 hover:bg-salmon-400 text-white px-4 py-2 text-xs lg:px-6 lg:py-4 rounded-full shadow-lg transition-all duration-300 z-40 flex items-center gap-2"
      aria-label="Back to top"
    >
      <ArrowUp class="w-3 lg:w-5" />
      <span class="font-medium">Back to Top</span>
    </button>
  </div>
{/if}
