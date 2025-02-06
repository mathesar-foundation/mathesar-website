<script lang="ts">
  import BlogPostCard from "$lib/components/BlogPostCard.svelte";
  import CTASection from "$lib/components/CTASection.svelte";
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import Seo from "$lib/components/SEO.svelte";

  export let data;
  const { posts } = data;

  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);
</script>

<Seo 
  title="Mathesar Blog" 
  image="/og/og-blog.png"
/>

<div class="antialiased">
  <div class="pt-20 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <h1 class="relative flex flex-col gap-y-2">
        <span
          class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-pumpkin-400"
        >
          Mathesar Blog
        </span>
        <span
          class="text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white"
        >
          The latest news and updates from the Mathesar team.
        </span>
      </h1>

      <!-- <div class="flex justify-between items-center mt-16">
        <h2 class="text-3xl font-bold text-stormy-100">Latest Posts</h2>
        <a
          href="/blog/all"
          class="group inline-flex items-center gap-4 px-6 py-3.5 rounded-lg text-lg font-semibold
          bg-transparent text-white
          border-2 border-pumpkin-500
          shadow-lg transition-all duration-300
          hover:bg-pumpkin-500/5 hover:shadow-md
          active:transform active:scale-[0.98]"
        >
          <span>View All Posts</span>
        </a>
      </div> -->
    </div>

    <SectionCurve direction="bottom" inverted />
  </div>

  <div class="relative border border-stormy-50 bg-stormy-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mp-8 lg:pb-16 -mt-36">
      <div class="mb-12 relative z-10">
        <BlogPostCard post={featuredPost} />
      </div>

      <div class="grid grid-cols-1 gap-12">
        {#each regularPosts as post}
          <BlogPostCard {post} />
        {/each}
      </div>
    </div>
    <CTASection />
  </div>
</div>
