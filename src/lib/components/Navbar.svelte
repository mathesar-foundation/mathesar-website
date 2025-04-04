<script lang="ts">
  export let starCount = 0;

  let isMenuOpen = false;
  let currentPath: string;
  import { page } from "$app/stores";
  import { getStars } from "$lib/util/getStars";
  import { onMount } from "svelte";
  import TrackedLink from "./TrackedLink.svelte";
  import StarsButton from "./StarsButton.svelte";

  import XMark from "iconoir/icons/xmark.svg?component";
  import OpenNewWindow from "iconoir/icons/open-new-window.svg?component";
  import ArrowRight from "iconoir/icons/arrow-right.svg?component";

  const items = [
    { name: "Product", path: "product" },
    { name: "Solutions", path: "solutions" },
    { name: "Community", path: "community" },
    { name: "About", path: "about" },
    { name: "Blog", path: "blog" },
    { name: "Docs", path: "https://docs.mathesar.org/latest/" },
    { name: "Donate", path: "donate" },
    { name: "✨ Install Support ✨", path: "free-install" },
  ];

  $: currentPath = $page.url.pathname;

  onMount(async () => {
    // Star count is loaded on the server at build time,
    // but we update it client-size with a fresh count
    // when a user loads the site.
    const clientStarCount = await getStars();
    if (clientStarCount) {
      starCount = clientStarCount;
    }
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="z-20 w-full transition-all relative duration-300">
  <nav
    class="w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center"
  >
    <div class="flex items-center gap-8">
      <a href="/" class="shrink-0" aria-label="Mathesar Homepage">
        <enhanced:img
          src="/src/assets/logo.png"
          alt="Mathesar"
          class="h-5 md:h-6 w-auto -translate-y-[4px]"
        />
      </a>
    </div>

    <div class="hidden lg:flex gap-3 lg:gap-4 2xl:gap-6 items-center">
      {#each items as item}
        <a
          href={item.path.startsWith("http") ? item.path : `/${item.path}`}
          target={item.path.startsWith("http") ? "_blank" : undefined}
          rel={item.path.startsWith("http") ? "noopener noreferrer" : undefined}
          class="relative xl:text-[17px] text-[16px] font-medium {currentPath.split(
            '/',
          )[1] === item.path
            ? 'text-white'
            : 'text-stormy-200'} hover:text-white transition-colors duration-300 group flex items-center gap-1"
        >
          {item.name}
          {#if item.path.startsWith("http")}
            <OpenNewWindow class="w-3" />
          {/if}
          <span
            class="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-plum-500 via-salmon-500 to-pumpkin-500 {currentPath.split(
              '/',
            )[1] === item.path
              ? 'scale-x-100'
              : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300"
          ></span>
        </a>
      {/each}
      <div class="hidden sm:block">
        <StarsButton count={starCount} />
      </div>
    </div>

    <div class="flex items-center gap-4 lg:gap-6 justify-end">
      <TrackedLink
        analyticsData={{ location: "header" }}
        href="https://docs.mathesar.org"
        class="rounded-lg bg-orange-red-500 hover:shadow-lg hover:shadow-orange-red-500/20 px-2 py-1 lg:px-6 lg:py-2 font-semibold text-white transition-all duration-300"
      >
        Install&nbsp;<span class="hidden md:inline lg:hidden xl:inline"
          >Mathesar</span
        >
      </TrackedLink>
      <button
        class="lg:hidden text-white"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
  </nav>
</header>

{#if isMenuOpen}
  <div
    class="lg:hidden absolute inset-0 bg-stormy-950/90 backdrop-blur-lg z-[60]"
  >
    <div class="container mx-auto px-6 py-8 flex flex-col gap-6">
      <div class="flex justify-between items-center gap-4">
        <a href="/" class="shrink-0" aria-label="Mathesar Homepage">
          <enhanced:img
            src="/src/assets/logo.png"
            alt="Mathesar"
            class="h-5 md:h-6 w-auto"
          />
        </a>

        <button
          aria-label="Close menu"
          class="ml-auto text-stormy-100 text-2xl transform ease-in-out hover:scale-110 p-4"
          on:click={() => (isMenuOpen = false)}
        >
          <XMark class="w-8" />
        </button>
      </div>

      <div>
        <div class="flex sm:hidden lg:flex">
          <StarsButton count={starCount} />
        </div>
      </div>

      {#each items as item}
        <a
          href={item.path.startsWith("http") ? item.path : `/${item.path}`}
          target={item.path.startsWith("http") ? "_blank" : undefined}
          rel={item.path.startsWith("http") ? "noopener noreferrer" : undefined}
          on:click={() => (isMenuOpen = false)}
          class="block text-lg font-medium {currentPath.split('/')[1] ===
          item.path
            ? 'text-white translate-x-2'
            : 'text-stormy-200'} hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-1"
        >
          {item.name}
          {#if item.path.startsWith("http")}
            <OpenNewWindow class="w-3" />
          {/if}
        </a>
      {/each}
    </div>
  </div>
{/if}
