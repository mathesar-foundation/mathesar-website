<script lang="ts">
  import type { Contributor } from "$lib/util/getContributors.server";
  import ContributorLink from "./ContributorLink.svelte";
  import SectionCurve from "./SectionCurve.svelte";

  import GitHub from "iconoir/icons/github.svg?component";

  export let contributors: Contributor[] = [];
</script>

<section class="relative">
  <SectionCurve direction="top" fillColor="fill-stormy-100" />

  <div class="bg-stormy-100 py-8 md:py-24">
    <div class="px-4 lg:max-w-7xl lg:px-0 mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <h2>
            <span class="block text-xl sm:text-3xl lg:text-4xl text-gray-600">
              Mathesar is built by
            </span>
            <span
              class="block text-4xl sm:text-5xl lg:text-6xl font-bold text-stormy-800 -mt-1"
            >
              100+ Contributors
            </span>
          </h2>

          <p class="text-lg text-stormy-800">
            Like Mathesar? Want it to be better? Get involved and contribute to
            shaping the future of the project!
          </p>

          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://github.com/mathesar-foundation/mathesar"
              class="group inline-flex items-center rounded-lg bg-orange-red-500 px-6 py-3.5 text-lg font-semibold
                text-white
                shadow-lg transition-all duration-300
                hover:bg-orange-700 hover:shadow-md
                active:transform active:scale-[0.98]"
            >
              <span class="relative">Join Our Community</span>
            </a>
            <a
              href="https://github.com/mathesar-foundation/mathesar"
              class="group inline-flex items-center gap-4 px-6 py-3.5 rounded-lg text-lg font-semibold
                bg-plum-300/20 text-plum-800
                border-2 border-plum-500
                shadow-lg transition-all duration-300
                hover:bg-plum-400/20 hover:shadow-md
                active:transform active:scale-[0.98]"
            >
              <GitHub class="w-6 text-plum-500" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        <div class="relative">
          <div class="grid grid-cols-4 sm:grid-cols-6 gap-4">
            {#each contributors.slice(0, 30) as contributor}
              <ContributorLink {contributor} />
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
