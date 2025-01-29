<script lang="ts">
  export let src: string;
  export let poster: string;

  let isPaused = false;
  let videoRef: HTMLVideoElement;

  import PlaySolid from "iconoir/icons/play-solid.svg?component";
  import PauseSolid from "iconoir/icons/pause-solid.svg?component";

  const togglePlayback = () => {
    if (videoRef) {
      if (videoRef.paused) {
        videoRef.play();
        isPaused = false;
      } else {
        videoRef.pause();
        isPaused = true;
      }
    }
  };
</script>

<div
  class="relative group w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg"
>
  <div class="flex-none border-b bg-salmon-950 border-salmon-900">
    <div class="flex items-center h-8 space-x-1.5 px-3">
      <div class="w-2.5 h-2.5 bg-[#FF605C] rounded-full"></div>
      <div class="w-2.5 h-2.5 bg-[#FFBD44] rounded-full"></div>
      <div class="w-2.5 h-2.5 bg-[#00CA4E] rounded-full"></div>
    </div>
  </div>
  <div class="bg-white video-wrapper relative">
    <!-- Video -->
    <video
      bind:this={videoRef}
      class="w-full h-full object-cover"
      {src}
      {poster}
      autoplay
      loop
      muted
      playsinline
    ></video>
  </div>

  <!-- Pause Button -->
  <button
    class="absolute flex items-center justify-center bg-salmon-500 rounded-md text-white text-3xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity right-4 bottom-4 p-2"
    on:click={togglePlayback}
  >
    {#if isPaused}
      <PlaySolid class="w-6" />
    {:else}
      <PauseSolid class="w-6" />
    {/if}
  </button>
</div>

<style>
  .video-wrapper {
    aspect-ratio: 16 / 10;
    overflow: hidden;
  }
</style>
