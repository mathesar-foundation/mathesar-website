<script lang="ts">
  import Navbar from "../lib/components/Navbar.svelte";
  import Footer from "../lib/components/Footer.svelte";
  import type { LayoutData } from "./$types";

  let scrollY: number;
  import "../app.css";
  import BackToTop from "$lib/components/BackToTop.svelte";

  // Data is derived from the load function in layout.ts
  export let data: LayoutData;
  const { starsCount } = data;
</script>

<svelte:window bind:scrollY />

<svelte:head>
  <!-- TODO Remove in Production -->
  <meta name="robots" content="noindex nofollow" />

  <title>Mathesar</title>

  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
</svelte:head>

<div class="grid grid-rows-[auto_1fr_auto] min-h-screen w-full">
  <!-- All header contents must belong to this parent div -->
  <div>
    <Navbar starCount={starsCount} />
  </div>

  <!-- All body contents must belong to this parent div -->
  <div class="flex flex-col w-full max-w-full min-w-0">
    <div class="fixed inset-0 -z-50">
      <div class="absolute inset-0 bg-stormy-900"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-[60%] h-[120%] rotate-[30deg]">
          <div
            class="absolute inset-0 bg-gradient-to-tr from-pumpkin-900 via-stormy-950 to-transparent opacity-80 blur-[180px] mix-blend-soft-light"
          ></div>
        </div>
      </div>
      <div
        class="absolute inset-0 bg-noise opacity-[0.2] mix-blend-multiply"
      ></div>
    </div>
    <main class="relative z-10 flex flex-col justify-stretch flex-grow">
      <slot />
    </main>
  </div>

  <!-- All footer contents must belong to this parent div -->
  <div>
    <Footer />
  </div>

  <BackToTop />
</div>
