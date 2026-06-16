<script lang="ts">
  import type { Contributor } from "$lib/util/getContributors.server";
  import ContributorLink from "./ContributorLink.svelte";
  import SectionCurve from "./SectionCurve.svelte";

  import Book from "iconoir/icons/book.svg?component";
  import ChatBubble from "iconoir/icons/chat-bubble.svg?component";
  import Google from "iconoir/icons/google.svg?component";
  import GitHub from "iconoir/icons/github.svg?component";
  import ArrowUpRight from "iconoir/icons/arrow-up-right.svg?component";

  export let contributors: Contributor[] = [];
</script>

<section class="relative">
  <SectionCurve direction="top" fillColor="fill-stormy-50" height={24} />

  <div class="bg-stormy-50 pt-4 sm:pt-6 lg:pt-8">
    <div class="site-container">
      <div class="max-w-3xl mx-auto text-center section-stack">
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
      </div>

      <div
        class="grid grid-cols-4 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-4 sm:gap-5 place-items-center mt-8 lg:mt-10"
      >
        {#each contributors as contributor}
          <ContributorLink
            {contributor}
            sizeClass="block aspect-square w-[68px] sm:w-[72px]"
          />
        {/each}
      </div>

      <div
        class="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start mt-12 lg:mt-14"
      >
        <div class="relative flex flex-col items-start gap-4 lg:col-span-2">
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stormy-800 leading-tight"
          >
            Help us build the future of Mathesar!
          </h2>
          <div class="space-y-4 text-lg text-stormy-700 leading-relaxed">
            <p>
              Mathesar is fully open source, licensed under GPLv3, and built
              with a commitment to <a
                class="text-salmon-600"
                href="https://opensource.org/osd">open source principles</a
              >. We work in public so anyone can follow along or contribute.
            </p>
            <p>
              We are committed to being <b>100% open source, always</b>. There
              are no hidden features, no paywalls, and no proprietary
              restrictions: just software built to be free and accessible to
              everyone. We believe that open source is the best way to drive
              innovation and create tools that benefit everyone.
            </p>
          </div>
        </div>

        <div class="lg:col-span-3 space-y-3">
          <p
            class="text-sm font-semibold uppercase tracking-[0.14em] text-plum-700"
          >
            Community channels
          </p>

          <div class="grid md:grid-cols-2 gap-6">
            <a
              href="https://github.com/mathesar-foundation/mathesar"
              class="group flex h-full min-h-[168px] cursor-pointer items-center rounded-lg bg-sapphire-500/10 px-5 py-5 no-underline
              border-2 border-plum-500 shadow-lg transition-all duration-300
              hover:-translate-y-1 hover:bg-sapphire-500/15 hover:border-plum-600 hover:shadow-xl active:scale-[0.99]
              focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-salmon-500"
            >
              <div class="flex w-full flex-col gap-4">
                <div class="flex w-full items-center gap-4">
                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-sapphire-500"
                  >
                    <GitHub class="w-6 text-white" />
                  </div>
                  <h4
                    class="text-2xl font-bold leading-tight text-stormy-900 group-hover:underline decoration-2 underline-offset-4"
                  >
                    GitHub
                  </h4>
                  <ArrowUpRight
                    class="ml-auto h-5 w-5 shrink-0 text-plum-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p class="text-base text-stormy-700 leading-relaxed">
                  Explore the code, report issues, share feedback, and send pull
                  requests.
                </p>
              </div>
            </a>

            <a
              href="https://wiki.mathesar.org"
              class="group flex h-full min-h-[168px] cursor-pointer items-center rounded-lg bg-plum-500/10 px-5 py-5 no-underline
              border-2 border-plum-500 shadow-lg transition-all duration-300
              hover:-translate-y-1 hover:bg-plum-500/15 hover:border-plum-600 hover:shadow-xl active:scale-[0.99]
              focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-salmon-500"
            >
              <div class="flex w-full flex-col gap-4">
                <div class="flex w-full items-center gap-4">
                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-plum-500"
                  >
                    <Book class="text-2xl text-white" />
                  </div>
                  <h4
                    class="text-2xl font-bold leading-tight text-stormy-900 group-hover:underline decoration-2 underline-offset-4"
                  >
                    Wiki
                  </h4>
                  <ArrowUpRight
                    class="ml-auto h-5 w-5 shrink-0 text-plum-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p class="text-base text-stormy-700 leading-relaxed">
                  Our knowledge base for contributors, including technical specs
                  and workflows.
                </p>
              </div>
            </a>

            <a
              href="https://wiki.mathesar.org/en/community/matrix"
              class="group flex h-full min-h-[168px] cursor-pointer items-center rounded-lg bg-rosy-500/10 px-5 py-5 no-underline
              border-2 border-plum-500 shadow-lg transition-all duration-300
              hover:-translate-y-1 hover:bg-rosy-500/15 hover:border-plum-600 hover:shadow-xl active:scale-[0.99]
              focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-salmon-500"
            >
              <div class="flex w-full flex-col gap-4">
                <div class="flex w-full items-center gap-4">
                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-rosy-500"
                  >
                    <ChatBubble class="text-2xl text-white" />
                  </div>
                  <h4
                    class="text-2xl font-bold leading-tight text-stormy-900 group-hover:underline decoration-2 underline-offset-4"
                  >
                    Chat
                  </h4>
                  <ArrowUpRight
                    class="ml-auto h-5 w-5 shrink-0 text-plum-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p class="text-base text-stormy-700 leading-relaxed">
                  Ask questions, share ideas, and talk with the community in
                  real time.
                </p>
              </div>
            </a>

            <a
              href="https://groups.google.com/a/mathesar.org/g/mathesar-developers/"
              class="group flex h-full min-h-[168px] cursor-pointer items-center rounded-lg bg-pumpkin-500/10 px-5 py-5 no-underline
              border-2 border-plum-500 shadow-lg transition-all duration-300
              hover:-translate-y-1 hover:bg-pumpkin-500/15 hover:border-plum-600 hover:shadow-xl active:scale-[0.99]
              focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-salmon-500"
            >
              <div class="flex w-full flex-col gap-4">
                <div class="flex w-full items-center gap-4">
                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-pumpkin-500"
                  >
                    <Google class="text-2xl text-white" />
                  </div>
                  <h4
                    class="text-2xl font-bold leading-tight text-stormy-900 group-hover:underline decoration-2 underline-offset-4"
                  >
                    Mailing List
                  </h4>
                  <ArrowUpRight
                    class="ml-auto h-5 w-5 shrink-0 text-plum-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p class="text-base text-stormy-700 leading-relaxed">
                  Follow announcements, project updates, and deeper technical
                  discussions.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
