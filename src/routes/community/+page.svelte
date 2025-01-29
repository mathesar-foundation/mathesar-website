<script lang="ts">
  import ContributorLink from "$lib/components/ContributorLink.svelte";
  import CTASection from "$lib/components/CTASection.svelte";
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import Seo from "$lib/components/SEO.svelte";
  import Stickers from "$lib/components/Stickers.svelte";

  import Github from "iconoir/icons/github.svg?component";
  import Book from "iconoir/icons/book.svg?component";
  import ChatBubble from "iconoir/icons/chat-bubble.svg?component";
  import Google from "iconoir/icons/google.svg?component";
  import ArrowRight from "iconoir/icons/arrow-right.svg?component";

  export let data;
  const { contributors } = data;
</script>

<Seo 
  title="Community" 
  image="/og/og-community.png"
/>

<div class="text-white antialiased">
  <section class="relative pt-24">
    <Stickers variant="community" />

    <div class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div class="lg:max-w-xl">
          <h1 class="mb-8">
            <span
              class="block text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
            >
              Help us build the
              <span class="text-pumpkin-400 inline-block"
                >future of Mathesar</span
              >
            </span>
            <span
              class="block text-xl sm:text-2xl text-stormy-200 font-normal leading-relaxed"
            >
              Mathesar is maintained by the US-based Mathesar Foundation, a
              501(c)(3) nonprofit, with contributions from 100+ open-source
              developers.
            </span>
          </h1>
        </div>

        <div
          class="space-y-6 z-10 relative text-lg text-stormy-900/90 bg-stormy-100 rounded-2xl p-8 lg:p-12 border border-white/10"
        >
          <h2
            class="text-3xl sm:text-4xl font-bold tracking-tight text-stormy-800 mb-4"
          >
            100% Open Source, Always
          </h2>
          <p>
            Mathesar is fully open source, licensed under GPLv3, and built with
            a commitment to <a
              class="text-salmon-600"
              href="https://opensource.org/osd">open source principles</a
            >. Our source code is public, so anyone can view, use, and improve
            it. We work in public, sharing our progress openly on GitHub,
            Matrix, and our mailing lists so anyone can follow along or
            contribute.
          </p>
          <p>
            There are no hidden features, no paywalls, and no proprietary
            restrictions—just software built to be free and accessible to
            everyone. We believe in the power of open source to drive innovation
            and collaboration, creating tools that benefit everyone.
          </p>
        </div>
      </div>
    </div>
    <div class="-mt-24">
      <SectionCurve direction="top" />
    </div>
  </section>

  <section class="relative py-20 overflow-hidden bg-stormy-50">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative flex flex-col items-start gap-2 mb-12">
        <h2>
          <span class="block text-xl sm:text-3xl lg:text-4xl text-gray-600">
            Like Mathesar? Want it to be better?
          </span>
          <span
            class="block text-4xl sm:text-5xl lg:text-6xl font-bold text-stormy-800 -mt-1"
          >
            Get Involved!
          </span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mt-16">
        <div
          class="bg-white rounded-xl p-12 relative overflow-hidden flex flex-col h-full
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-sapphire-500/20 before:to-sapphire-600/10 before:pointer-events-none group"
        >
          <div
            class="absolute inset-0 border border-white/20 rounded-xl pointer-events-none
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
          ></div>

          <div class="flex-1">
            <div class="relative flex items-center gap-3 mb-6">
              <div
                class="p-2 w-12 h-12 rounded-full bg-sapphire-500 flex items-center justify-center"
              >
                <Github class="w-6 text-2xl text-white" />
              </div>
              <h3 class="text-2xl font-bold text-stormy-900">GitHub</h3>
            </div>
            <p class="text-lg text-stormy-700">
              Explore the codebase, report issues, share your feedback, and
              contribute to the project.
            </p>
          </div>

          <div class="mt-8">
            <a
              href="https://github.com/mathesar-foundation/mathesar"
              class="group inline-flex items-center gap-4 w-full justify-center px-6 py-4 rounded-lg text-lg font-semibold
                bg-plum-300/20 text-plum-800
                border-2 border-plum-500
                shadow-lg transition-all duration-300
                hover:bg-plum-400/20 hover:shadow-md
                active:transform active:scale-[0.98]"
            >
              <span>View on GitHub</span>
              <ArrowRight
                class=" w-6 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div
          class="bg-white rounded-xl p-12 relative overflow-hidden flex flex-col h-full
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-plum-500/20 before:to-plum-600/10 before:pointer-events-none group"
        >
          <div
            class="absolute inset-0 border border-white/20 rounded-xl pointer-events-none
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
          ></div>

          <div class="flex-1">
            <div class="relative flex items-center gap-3 mb-6">
              <div
                class="p-2 w-12 h-12 rounded-full bg-plum-500 flex items-center justify-center"
              >
                <Book class="text-2xl text-white" />
              </div>
              <h3 class="text-2xl font-bold text-stormy-900">Wiki</h3>
            </div>
            <p class="text-lg text-stormy-700">
              Dive into our contributor knowledge base for technical specs,
              meeting notes, and workflow information.
            </p>
          </div>

          <div class="mt-8">
            <a
              href="https://wiki.mathesar.org"
              class="group inline-flex items-center gap-4 w-full justify-center px-6 py-4 rounded-lg text-lg font-semibold
                bg-plum-300/20 text-plum-800
                border-2 border-plum-500
                shadow-lg transition-all duration-300
                hover:bg-plum-400/20 hover:shadow-md
                active:transform active:scale-[0.98]"
            >
              <span>Open Wiki</span>
              <ArrowRight
                class=" w-6 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div
          class="bg-white rounded-xl p-12 relative overflow-hidden flex flex-col h-full
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-rosy-500/20 before:to-rosy-600/10 before:pointer-events-none group"
        >
          <div
            class="absolute inset-0 border border-white/20 rounded-xl pointer-events-none
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
          ></div>

          <div class="flex-1">
            <div class="relative flex items-center gap-3 mb-6">
              <div
                class="p-2 w-12 h-12 rounded-full bg-rosy-500 flex items-center justify-center"
              >
                <ChatBubble class="text-2xl text-white" />
              </div>
              <h3 class="text-2xl font-bold text-stormy-900">Matrix Chat</h3>
            </div>
            <p class="text-lg text-stormy-700">
              Connect with the community in real time—ask questions, share
              ideas, or just chat.
            </p>
          </div>

          <div class="mt-8">
            <a
              href="https://wiki.mathesar.org/en/community/matrix"
              class="group inline-flex items-center gap-4 w-full justify-center px-6 py-4 rounded-lg text-lg font-semibold
                bg-plum-300/20 text-plum-800
                border-2 border-plum-500
                shadow-lg transition-all duration-300
                hover:bg-plum-400/20 hover:shadow-md
                active:transform active:scale-[0.98]"
            >
              <span>Join Chat</span>
              <ArrowRight
                class=" w-6 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div
          class="bg-white rounded-xl p-12 relative overflow-hidden flex flex-col h-full
            before:absolute before:inset-0 before:bg-gradient-to-br before:from-pumpkin-500/20 before:to-pumpkin-600/10 before:pointer-events-none group"
        >
          <div
            class="absolute inset-0 border border-white/20 rounded-xl pointer-events-none
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
          ></div>

          <div class="flex-1">
            <div class="relative flex items-center gap-3 mb-6">
              <div
                class="p-2 w-12 h-12 rounded-full bg-pumpkin-500 flex items-center justify-center"
              >
                <Google class="text-2xl text-white" />
              </div>
              <h3 class="text-2xl font-bold text-stormy-900">
                Developer Mailing List
              </h3>
            </div>
            <p class="text-lg text-stormy-700">
              A space for in-depth technical conversations, project updates, and
              developer announcements.
            </p>
          </div>

          <div class="mt-8">
            <a
              href="https://groups.google.com/a/mathesar.org/g/mathesar-developers/"
              class="group inline-flex items-center gap-4 w-full justify-center px-6 py-4 rounded-lg text-lg font-semibold
                bg-plum-300/20 text-plum-800
                border-2 border-plum-500
                shadow-lg transition-all duration-300
                hover:bg-plum-400/20 hover:shadow-md
                active:transform active:scale-[0.98]"
            >
              <span>Join Group</span>
              <ArrowRight
                class=" w-6 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative pt-20 bg-stormy-900 text-white">
    <div class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative flex flex-col items-start gap-2 mb-12">
        <h2>
          <span
            class="block text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
          >
            Our Contributors
          </span>
        </h2>
      </div>

      <div
        class="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-8"
      >
        {#each contributors as contributor}
          <ContributorLink {contributor} />
        {/each}
      </div>
    </div>
    <CTASection />
  </section>
</div>
