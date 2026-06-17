<script lang="ts">
  import BlogPostCard from "$lib/components/BlogPostCard.svelte";
  import CTASection from "$lib/components/CTASection.svelte";
  import NoOrphan from "$lib/components/NoOrphan.svelte";
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import Seo from "$lib/components/SEO.svelte";

  export let data;

  $: post = data.post;
  $: recentPosts = data.recentPosts;
</script>

<Seo title={post.title} description={post.description} image={post.image} />

<div class="antialiased">
  <article class="relative">
    <div class="pt-10 lg:pt-14 relative">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div
          class="flex flex-col lg:flex-row items-center justify-between gap-6"
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
              data-hero-heading
              class="text-balance text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              <NoOrphan text={post.title} />
            </h1>
          </div>

          <div class="flex items-center gap-4 shrink-0">
            {#if post.authorAvatar}
              <img
                src={post.authorAvatar}
                alt=""
                class="w-12 h-12 rounded-full object-cover bg-gradient-to-br from-pumpkin-500 to-pumpkin-600"
              />
            {:else}
              <div
                class="w-12 h-12 rounded-full bg-gradient-to-br from-pumpkin-500 to-pumpkin-600 flex items-center justify-center text-white text-lg"
              >
                {post.authorInitials}
              </div>
            {/if}
            <div class="space-y-0.5">
              <div class="text-white font-medium text-lg">
                {post.authorName}
              </div>
              <time class="text-stormy-100">{post.date}</time>
            </div>
          </div>
        </div>
      </div>

      <SectionCurve direction="bottom" inverted fillColor="fill-white" />
    </div>

    <div class="bg-white mx-auto -mt-12 relative z-10">
      <div class="max-w-[44rem] mx-auto px-5 sm:px-6">
        <div
          class="pt-8 sm:pt-10 pb-5 sm:pb-6 prose max-w-none
            prose-headings:text-gray-950
            prose-heading:leading-snug
            prose-a:font-semibold prose-a:text-sapphire-600 prose-a:no-underline hover:prose-a:text-sapphire-700
            prose-p:text-gray-800 prose-p:leading-[1.72] prose-p:my-5
            prose-strong:text-gray-950
            prose-h2:text-2xl prose-h2:font-bold prose-h2:tracking-tight prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-semibold prose-h3:text-gray-950 prose-h3:tracking-tight prose-h3:mt-8 prose-h3:mb-3
            prose-li:text-gray-800 prose-li:leading-[1.72]
            prose-ul:text-gray-800 prose-ul:my-5 prose-ul:space-y-2
            prose-ol:text-gray-800 prose-ol:my-5 prose-ol:space-y-2
            prose-blockquote:text-gray-700 prose-blockquote:leading-relaxed
            prose-code:rounded prose-code:bg-stormy-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-plum-800 prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-stormy-950 prose-pre:text-stormy-50 prose-pre:my-7
            [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-stormy-50
            prose-img:my-7 prose-img:rounded-lg prose-img:border prose-img:border-stormy-200 prose-img:shadow-sm
            prose-figcaption:text-gray-600
            prose-th:text-gray-950
            prose-td:text-gray-800
            prose-caption:text-gray-600
            prose-hr:border-stormy-200
            text-[1.0625rem] sm:text-lg"
        >
          {@html post.content}
        </div>
      </div>

      <section class="mt-2 bg-stormy-50 border-t border-stormy-100">
        <div class="max-w-5xl px-5 sm:px-6 mx-auto py-6 lg:py-7">
          <h2 class="text-2xl font-bold text-stormy-900 mb-4">Recent Posts</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            {#each recentPosts as post}
              <BlogPostCard {post} mini={true} />
            {/each}
          </div>
        </div>
      </section>
      <div class="bg-stormy-50">
        <CTASection />
      </div>
    </div>
  </article>
</div>
