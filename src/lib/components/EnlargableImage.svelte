<script lang="ts">
  import type { Picture } from "vite-imagetools";
  import ZoomIn from "iconoir/icons/zoom-in.svg?component";
  import { onMount, onDestroy } from "svelte";

  export let src: Picture;
  export let alt = "";
  export let loading: "lazy" | "eager" | null | undefined = "lazy";
  export let fetchpriority: "high" | "low" | "auto" | undefined = "auto";

  let className = "";
  export let triggerText = "Click to enlarge";

  export { className as class };

  let isModalOpen = false;

  function openModal() {
    isModalOpen = true;
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  function closeModal() {
    isModalOpen = false;
    document.body.style.overflow = ""; // Restore scrolling
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeModal();
    }
  }
</script>

<svelte:document on:keydown={handleKeydown} />

<div class="space-y-2">
  <button class="relative" on:click={openModal}>
    <enhanced:img
      {src}
      {fetchpriority}
      {alt}
      {loading}
      class={`cursor-pointer ${className}`}
    />
    <span
      class="bg-black/60 backdrop-blur-sm text-white rounded-md text-xs py-1 px-2.5 absolute bottom-2 left-2 hover:bg-black/80 transition-colors duration-200 flex items-center gap-1"
    >
      <ZoomIn class="w-2" />
      {triggerText}
    </span>
  </button>

  {#if isModalOpen}
    <dialog
      aria-modal="true"
      class="fixed inset-0 bg-black/75 flex justify-center items-center z-[100] p-4 w-full h-screen m-0 top-0 leading-none overflow-hidden"
    >
      <!-- Clickable overlay -->
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div class="absolute inset-0" on:click={closeModal}></div>

      <div class="relative max-w-full max-h-full overflow-auto shadow-lg">
        <div class="flex justify-end mb-2">
          <button
            class="ml-auto bg-black/60 backdrop-blur-sm text-white rounded-md text-sm md:text-lg py-1 px-2.5 hover:bg-black/80 transition-colors duration-200 block"
            on:click={closeModal}
          >
            Close image
          </button>
        </div>

        <div
          class="flex justify-center items-center h-full rounded-lg overflow-hidden object-contain"
        >
          <enhanced:img
            {src}
            {fetchpriority}
            {alt}
            class="w-full h-full rounded-lg touch-pinch-zoom"
          />
        </div>
      </div>
    </dialog>
  {/if}
</div>

<style>
  dialog {
    /* override browser default */
    margin: 0 !important;
  }
</style>
