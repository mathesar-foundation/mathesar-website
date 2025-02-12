<script lang="ts">
  import type { Contributor } from "$lib/util/getContributors.server";
  export let contributor: Contributor;
</script>

<a href={contributor.profile_url}>
  <img
    loading="lazy"
    width={90}
    height={90}
    src={contributor.profile_image}
    alt={`${contributor.name}'s avatar`}
    class="flex items-center justify-center text-transparent aspect-square text-center text-xs h-full w-full rounded-full shadow-lg transition-transform hover:scale-110 bg-gradient-to-tr from-plum-500 to-salmon-500"
  />
</a>
