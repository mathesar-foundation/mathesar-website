<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import DatasetInfoModal from "$lib/components/DatasetInfoModal.svelte";
  import InfoCircle from "iconoir/icons/info-circle.svg?component";
  import ArrowLeft from "iconoir/icons/arrow-left.svg?component";
  import Donate from "iconoir/icons/donate.svg?component";

  export let data;
  $: dataset = data.dataset;

  let isModalOpen = false;

  onMount(() => {
    if (browser && dataset) {
      // Check if modal has been dismissed before
      const dismissed = localStorage.getItem(
        `dataset-modal-dismissed-${dataset.slug}`
      );
      if (!dismissed) {
        isModalOpen = true;
      }
    }
  });

  function openModal() {
    isModalOpen = true;
  }
</script>

{#if dataset}
  <DatasetInfoModal {dataset} bind:isOpen={isModalOpen} />

  <nav class="sticky top-0 z-50 bg-stormy-950 border-b border-stormy-800/50">
    <div class="max-w-full mx-auto">
      <div class="flex items-center justify-between h-14 px-4">
        <!-- Left: Back link -->
        <a
          href="/public-datasets"
          class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium
            text-stormy-200 hover:text-white hover:bg-stormy-800/50
            transition-all"
        >
          <ArrowLeft class="w-4 h-4" />
          <span class="hidden sm:inline">Back to datasets</span>
        </a>

        <!-- Center: Dataset name -->
        <h1 class="text-white font-semibold text-base sm:text-lg truncate px-4">
          {dataset.title}
        </h1>

        <!-- Right: Actions -->
        <div class="flex items-center gap-2">
          <button
            on:click={openModal}
            class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium
              text-stormy-200 hover:text-white hover:bg-stormy-800/50
              transition-all"
            aria-label="Show dataset info"
          >
            <InfoCircle class="w-4 h-4" />
            <span class="hidden sm:inline">Info</span>
          </button>

          <a
            href="/donate"
            class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium
              bg-pumpkin-500/20 text-pumpkin-300
              border border-pumpkin-500/50
              hover:bg-pumpkin-500/30 hover:border-pumpkin-400
              transition-all"
          >
            <Donate class="w-4 h-4" />
            <span class="hidden sm:inline">Donate</span>
          </a>
        </div>
      </div>
    </div>
  </nav>

  <iframe title="Mathesar - {dataset.title}" src={dataset.iframeUrl}></iframe>
{/if}

<style>
  iframe {
    height: calc(100vh - 56px);
    width: 100%;
    border: none;
  }
</style>
