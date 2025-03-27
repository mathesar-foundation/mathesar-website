<script lang="ts">
  import BlogPostCard from "$lib/components/BlogPostCard.svelte";
  import CTASection from "$lib/components/CTASection.svelte";
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import Seo from "$lib/components/SEO.svelte";

  export let data;

  $: post = data.post;
  $: recentPosts = data.recentPosts;
</script>

<Seo title={post.title} description={post.description} />

<div class="antialiased">
  <article class="relative">
    <div class="pt-12 lg:pt-20 relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div
          class="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div class="flex-1 text-center lg:text-left">
            <!-- <div class="flex flex-wrap gap-1.5 mb-4">
              {#if post.tags}
                {#each post.tags as tag}
                  <span
                    class="px-2.5 py-0.5 text-xs font-medium rounded-lg border border-stormy-100 text-stormy-100"
                  >
                    {tag}
                  </span>
                {/each}
              {/if}
            </div> -->
            <h1
              class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              {post.title}
            </h1>
          </div>

          <div class="flex items-center gap-4 shrink-0">
            <div
              class="capitalize w-12 h-12 rounded-full bg-gradient-to-br from-pumpkin-500 to-pumpkin-600 flex items-center justify-center text-white text-lg"
            >
              {post.author.split(" ")[0][0]}
            </div>
            <div class="space-y-0.5">
              <div class="text-white font-medium text-lg">
                {post.author
                  .replace("_", " ")
                  .split(" ")
                  .map((i) => i[0].toUpperCase() + i.slice(1))
                  .join(" ")}
              </div>
              <time class="text-stormy-100">{post.date}</time>
            </div>
          </div>
        </div>
      </div>

      <SectionCurve direction="bottom" inverted />
    </div>

    <div class="bg-stormy-50 mx-auto -mt-12 relative z-10">
      <div class="max-w-4xl mx-auto">
        <div
          class="p-8 prose prose-lg max-w-prose
            prose-headings:text-plum-800
            prose-heading:leading-snug
            prose-a:text-salmon-600 hover:prose-a:text-pumpkin-400
            prose-p:text-plum-800 prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-plum-800
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-8 prose-h2:mt-12
            prose-h3:text-2xl prose-h3:font-semibold prose-h3:text-pumpkin-500 prose-h3:mt-8 prose-h3:mb-4
            prose-li:text-plum-800 prose-li:leading-relaxed
            prose-ul:text-plum-800 prose-ul:my-6 prose-ul:space-y-2
            prose-ol:text-plum-800 prose-ol:my-6 prose-ol:space-y-2
            prose-blockquote:text-plum-800 prose-blockquote:leading-relaxed
            prose-code:text-stormy-100 prose-pre:bg-stormy-800
            prose-pre:text-plum-800 prose-pre:my-8
            prose-figcaption:text-plum-800
            prose-lead:text-plum-800 prose-lead:leading-relaxed
            prose-th:text-plum-800
            prose-td:text-plum-800
            prose-caption:text-plum-800
            prose-hr:border-stormy-200
            text-xl
            [&>*]:text-plum-800
            [&>section]:mb-12"
        >
          {@html post.content}
        </div>
      </div>

      <div class="max-w-4xl px-8 mx-auto mt-16">
        <h2 class="text-2xl font-bold text-plum-800 mb-8">Recent Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {#each recentPosts as post}
            <BlogPostCard {post} mini={true} />
          {/each}
        </div>
      </div>
      <CTASection />
    </div>
  </article>
</div>
