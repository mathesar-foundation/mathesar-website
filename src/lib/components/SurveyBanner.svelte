<script lang="ts">
  let isVisible = true;

  function closeBanner() {
    isVisible = false;
  }

  function saAutomatedLink(element: HTMLElement, type: string) {}
</script>

{#if isVisible}
  <div
    id="survey-banner"
    class="bg-gradient-to-r from-pumpkin-500 to-salmon-400 px-3 py-1 flex justify-between items-center z-50"
  >
    <div class="space-x-1.5 max-w-7xl mx-auto">
      <span class="font-bold">✨ Help shape Mathesar!</span>
      <span>Share your thoughts in our quick survey: </span>
      <a
        href="https://forms.gle/yjxiEQr9QzTT5GCSA"
        target="_blank"
        class="inline-flex items-center gap-1 underline rounded-full font-medium"
        on:click={(e) => saAutomatedLink(e.currentTarget, "outbound")}
      >
        Take it here
      </a>
    </div>
    <button
      id="close-banner"
      class="bg-white/10 hover:bg-white/20 transition-colors duration-200 p-1.5 rounded-lg"
      on:click={closeBanner}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3 w-3 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="4"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
{/if}
