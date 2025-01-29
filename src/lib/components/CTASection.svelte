<script lang="ts">
  import SectionCurve from "./SectionCurve.svelte";
  import TrackedLink from "./TrackedLink.svelte";
  import Database from "iconoir/icons/database.svg?component"; // Import Database icon
  import Code from "iconoir/icons/code.svg?component"; // Import Code icon
  import Server from "iconoir/icons/server.svg?component"; // Import Server icon
  import Github from "iconoir/icons/github.svg?component"; // Import GitHub icon

  const benefits = [
    { icon: Database, text: "Built on PostgreSQL" },
    { icon: Code, text: "100% Open Source" },
    { icon: Server, text: "Hosted on Your Infrastructure" },
  ];
</script>

<section class="relative">
  <SectionCurve direction="top" fillColor="fill-stormy-100" />

  <div class="bg-stormy-100 pt-12 pb-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center gap-12">
        <div class="max-w-2xl text-center space-y-6">
          <h2>
            <span
              class="block text-4xl sm:text-5xl lg:text-6xl font-bold text-stormy-800 -mt-1"
            >
              Get started with Mathesar in minutes
            </span>
          </h2>

          <p class="text-xl text-stormy-800">
            Install Mathesar and simplify your workflow instantly.
          </p>

          <div class="flex flex-wrap justify-center gap-4 mb-8">
            {#each benefits as benefit}
              <div class="flex items-center gap-2">
                <svelte:component
                  this={benefit.icon}
                  class="text-2xl text-salmon-500 w-6"
                />
                <span class="text-stormy-800">{benefit.text}</span>
              </div>
            {/each}
          </div>

          <div class="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <TrackedLink
              href="https://docs.mathesar.org"
              class="group inline-flex items-center rounded-lg bg-orange-red-500 px-6 py-3.5 text-lg font-semibold
                  text-white shadow-lg transition-all duration-300
                  hover:bg-orange-700 hover:shadow-md
                  active:transform active:scale-[0.98]"
            >
              <span class="relative">Install Mathesar</span>
            </TrackedLink>
            <a
              href="https://github.com/mathesar-foundation/mathesar"
              class="group inline-flex items-center gap-4 px-6 py-3.5 rounded-lg text-lg font-semibold
                  bg-plum-300/20 text-plum-800
                  border-2 border-plum-500
                  shadow-lg transition-all duration-300
                  hover:bg-plum-400/20 hover:shadow-md
                  active:transform active:scale-[0.98]"
            >
              <Github class="w-6 text-2xl text-plum-500" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
