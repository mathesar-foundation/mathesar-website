<script lang="ts">
  import { onMount } from "svelte";
  import Xmark from "iconoir/icons/xmark.svg?component";
  import OpenNewWindow from "iconoir/icons/open-new-window.svg?component";
  import Copy from "iconoir/icons/copy.svg?component";

  export let dataset: {
    slug: string;
    title: string;
    description: string;
    howToUse: string;
    sourceUrl: string;
    sourceName: string;
    username: string;
    password: string;
  };
  export let isOpen = false;

  let copiedField: string | null = null;

  function close() {
    isOpen = false;
    // Persist dismissal in localStorage
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(`dataset-modal-dismissed-${dataset.slug}`, "true");
    }
  }

  function copyToClipboard(text: string, field: string) {
    navigator.clipboard.writeText(text);
    copiedField = field;
    setTimeout(() => {
      copiedField = null;
    }, 2000);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      close();
    }
  }

  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      close();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div
    class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stormy-950/80 backdrop-blur-sm"
    on:click={handleBackdropClick}
    on:keydown={handleKeydown}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div
      class="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in"
    >
      <!-- Header -->
      <div class="bg-gradient-to-r from-sapphire-600 to-plum-600 px-6 py-4">
        <div class="flex items-center justify-between">
          <h2
            id="modal-title"
            class="text-xl font-bold text-white flex items-center gap-2"
          >
            <span
              class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-white/20"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </span>
            Dataset Info
          </h2>
          <button
            on:click={close}
            class="p-2 rounded-lg hover:bg-white/20 transition-colors text-white/80 hover:text-white"
            aria-label="Close modal"
          >
            <Xmark class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6 space-y-6">
        <!-- Dataset Title -->
        <div>
          <h3 class="text-2xl font-bold text-stormy-900 mb-2">
            {dataset.title}
          </h3>
        </div>

        <!-- Description -->
        <div>
          <!-- <h4
            class="text-sm font-semibold text-stormy-500 uppercase tracking-wider mb-2"
          >
            Description
          </h4> -->
          <p class="text-stormy-700 leading-relaxed">
            {dataset.description}
          </p>
        </div>

        <!-- How to Use -->
        {#if dataset.howToUse}
          <div>
            <h4
              class="text-sm font-semibold text-stormy-500 uppercase tracking-wider mb-2"
            >
              How to Use
            </h4>
            <p class="text-stormy-700 leading-relaxed">
              {dataset.howToUse}
            </p>
          </div>
        {/if}

        <!-- Source -->
        <div>
          <h4
            class="text-sm font-semibold text-stormy-500 uppercase tracking-wider mb-2"
          >
            Data Source
          </h4>
          <a
            href={dataset.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sapphire-600 hover:text-sapphire-700 font-medium transition-colors"
          >
            {dataset.sourceName}
            <OpenNewWindow class="w-4 h-4" />
          </a>
        </div>

        <!-- Credentials -->
        <div class="bg-stormy-50 rounded-xl p-4 border border-stormy-200">
          <h4
            class="text-sm font-semibold text-stormy-500 uppercase tracking-wider mb-3"
          >
            Login Credentials
          </h4>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-xs text-stormy-500 block">Username</span>
                <span class="font-mono text-stormy-800 font-medium"
                  >{dataset.username}</span
                >
              </div>
              <!-- <button
                on:click={() => copyToClipboard(dataset.username, "username")}
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
                  {copiedField === 'username'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-stormy-200 text-stormy-600 hover:bg-stormy-300'}
                  transition-colors"
              >
                <Copy class="w-3.5 h-3.5" />
                {copiedField === "username" ? "Copied!" : "Copy"}
              </button> -->
            </div>
            <div class="flex items-center justify-between">
              <div>
                <span class="text-xs text-stormy-500 block">Password</span>
                <span class="font-mono text-stormy-800 font-medium"
                  >{dataset.password}</span
                >
              </div>
              <!-- <button
                on:click={() => copyToClipboard(dataset.password, "password")}
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
                  {copiedField === 'password'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-stormy-200 text-stormy-600 hover:bg-stormy-300'}
                  transition-colors"
              >
                <Copy class="w-3.5 h-3.5" />
                {copiedField === "password" ? "Copied!" : "Copy"}
              </button> -->
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="px-6 pb-6">
        <button
          on:click={close}
          class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium
            bg-stormy-100 text-stormy-700 hover:bg-stormy-200
            transition-colors"
        >
          Explore Dataset
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .animate-in {
    animation: modal-in 0.2s ease-out;
  }

  @keyframes modal-in {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
</style>
