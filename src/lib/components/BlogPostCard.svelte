<script lang="ts">
  import type { BlogPost } from "$lib/util/getBlogPosts.server";

  export let post: BlogPost;
  export let mini = false;
</script>

<article
  class="rounded-lg overflow-hidden cursor-pointer group {mini
    ? 'bg-stormy-100'
    : 'bg-stormy-100 rounded-2xl transition-colors'}"
>
  <a href={`/blog/${post.path}`} class="block {!mini && 'h-full'}">
    {#if mini}
      <div class="aspect-[16/10] w-full overflow-hidden">
        <img
          src={post.image}
          alt=""
          class="w-full h-full object-cover object-center"
        />
      </div>

      <div class="p-3">
        <h3 class="text-sm font-medium text-plum-800 mb-1.5 line-clamp-2">
          {post.title}
        </h3>

        <div class="flex items-center gap-1.5">
          <div
            class="w-5 h-5 rounded-full bg-gradient-to-br from-pumpkin-500 to-pumpkin-600 flex items-center justify-center text-white text-[10px]"
          >
            {post.author
              .split(" ")
              .map((name) => name[0])
              .join("")}
          </div>
          <div class="flex items-center gap-1.5 text-[11px] text-stormy-600">
            <span class="truncate max-w-[100px]"
              >{post.author
                .replace("_", " ")
                .split(" ")
                .map((i) => i[0].toUpperCase() + i.slice(1))
                .join(" ")}</span
            >
            <span>•</span>
            <time>{post.date}</time>
          </div>
        </div>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 h-full">
        <div class="w-full h-full">
          <img
            src={post.image}
            alt=""
            class="w-full h-full object-cover object-center"
          />
        </div>

        <div class="p-8 md:py-12 md:pr-12 flex flex-col justify-center">
          <div class="flex flex-wrap gap-1.5 mb-6">
            {#each post.tags as tag}
              <span
                class="px-2.5 py-0.5 text-xs font-medium rounded-lg border border-stormy-300 text-stormy-800"
              >
                {tag}
              </span>
            {/each}
          </div>

          <h3
            class="text-3xl xl:text-4xl font-bold mb-4 line-clamp-3 [&:hover>span]:text-plum-500 group-hover:[&>span]:text-plum-700"
          >
            <span class="text-stormy-800 transition-colors duration-300">
              {post.title}
            </span>
          </h3>

          {#if post.description}
            <p
              class="text-stormy-800 text-lg mb-8 line-clamp-3 leading-relaxed"
            >
              {post.description}
            </p>
          {/if}

          <div
            class="flex items-center gap-4 text-sm text-stormy-800 border-t border-stormy-200 pt-6"
          >
            <div
              class="w-12 h-12 rounded-full bg-gradient-to-br from-pumpkin-500 to-pumpkin-600 flex items-center justify-center text-white text-lg"
            >
              {post.author
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </div>
            <div class="flex flex-col">
              <span class="text-plum-800 font-medium text-lg"
                >{post.author
                  .replace("_", " ")
                  .split(" ")
                  .map((i) => i[0].toUpperCase() + i.slice(1))
                  .join(" ")}</span
              >
              <time class="text-base text-stormy-600">{post.date}</time>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </a>
</article>
