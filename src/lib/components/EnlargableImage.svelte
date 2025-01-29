<script lang="ts">
  import type { Picture } from "vite-imagetools";
  import ZoomIn from "iconoir/icons/zoom-in.svg?component";

  export let src: Picture;
  export let alt = "";
  export let loading: "lazy" | "eager" | null | undefined = "lazy";
  export let sizes: string | undefined = undefined;
  export let fetchpriority: "high" | "low" | "auto" | undefined = "auto";
  let className = "";
  export let triggerText = "Click to enlarge";
  export { className as class };

  let dialog: HTMLDialogElement;

  function openModal() {
    dialog.showModal();
  }

  function closeModal() {
    dialog.close();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape" && dialog.open) {
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
      {sizes}
      class={`cursor-pointer ${className}`}
    />
    <span
      class="bg-black/60 backdrop-blur-sm text-white rounded-md text-xs py-1 px-2.5 absolute bottom-2 left-2 hover:bg-black/80 transition-colors duration-200 flex items-center gap-1"
    >
      <ZoomIn class="w-2" />
      {triggerText}
    </span>
  </button>

  <dialog
    bind:this={dialog}
    class="bg-black/75 w-screen h-screen max-w-none inset-0"
  >
    <div
      class="relative lg:max-w-7xl xl:max-w-[70%] mx-auto min-h-screen flex flex-col items-center justify-center"
    >
      <!-- Header -->
      <div class="flex justify-center items-center z-10">
        <button
          class=" bg-black/60 text-white rounded-md text-sm md:text-lg py-1 px-2.5 hover:bg-black/80 transition-colors duration-200"
          on:click={closeModal}
        >
          Close image
        </button>
      </div>

      <!-- Image container -->
      <div class="flex items-center justify-center min-h-0 relative p-8">
        <enhanced:img
          {src}
          {fetchpriority}
          {alt}
          class="enlarged-image max-h-screen w-auto max-w-full object-contain rounded-lg touch-pinch-zoom"
        />
      </div>
    </div>
  </dialog>
</div>

<style>
  dialog {
    /* Override browser defaults */
    margin: 0 !important;
    max-width: 100vw !important;
    max-height: 100vh !important;
  }
</style>
