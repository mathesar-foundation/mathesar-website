<script lang="ts">
  import { page } from "$app/state";
</script>

<div class="bg-white flex-grow text-center flex items-center justify-center">
  <div>
    <h1
      class="text-3xl sm:text-4xl font-bold tracking-tight text-stormy-800 mb-4 s-hKtMaLOguCy4"
    >
      {page?.status ?? ""}
      {page?.message ?? "An unexpected error occurred"}
    </h1>

    {#if page.status === 404}
      <p>We can't seem to find the page you're looking for.</p>
      <p>
        We're sorry, but the link you followed may be outdated or broken, or the
        page may have been removed or renamed.
      </p>
    {/if}
  </div>
</div>
