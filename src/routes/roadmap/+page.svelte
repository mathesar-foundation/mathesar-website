<script>
  import Seo from "$lib/components/SEO.svelte";

  export let data;
  const { projects } = data;
</script>

<Seo title="Mathesar Product Roadmap" image="/og/og-product.png" />

<div class="text-center antialiased bg-white px-4 py-20 flex-grow">
  <h1 class="text-5xl">Product Roadmap</h1>

  <div class="w-full max-w-xl flex flex-col gap-2 mx-auto mt-12">
    {#each projects as project}
      <a
        class="flex justify-between w-full p-6 shadow-md rounded-lg items-center"
        href={project.url}
      >
        <span class="font-semibold text-2xl">{project.title}</span>
        <span>{project.status}</span>
      </a>
    {/each}
  </div>
</div>
