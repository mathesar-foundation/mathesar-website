<script lang="ts">
  import SectionCurve from "./SectionCurve.svelte";
  import NoOrphan from "./NoOrphan.svelte";
  import Stickers from "./Stickers.svelte";
  import TrackedLink from "./TrackedLink.svelte";
  import Video from "./Video.svelte";
</script>

<div class="relative overflow-x-clip">
  <section class="relative">
    <div>
      <Stickers variant="hero" />
    </div>

    <div class="z-20 relative site-container">
      <div class="py-6 md:py-8 lg:py-8">
        <div class="flex-1 mx-auto w-full relative">
          <div class="space-y-4 text-center">
            <h1
              data-hero-heading
              class="text-balance text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white"
            >
              <span class="text-pumpkin-400">Secure,</span>
              <span class="text-pumpkin-400">spreadsheet-like</span><br />
              <span><NoOrphan text="tool for Postgres data" /></span>
            </h1>
            <p
              class="text-lg lg:text-xl max-w-2xl mx-auto text-stormy-100 leading-snug"
            >
              An intuitive, open-source UI to view, edit, and query Postgres
              data, with easy deployment and robust access control.
            </p>
          </div>

          <div class="mt-5 flex flex-col sm:flex-row gap-4 justify-center">
            <TrackedLink
              analyticsData={{ location: "hero" }}
              href="https://docs.mathesar.org"
              class="group inline-flex items-center rounded-lg bg-orange-red-500 px-6 py-3.5 text-lg font-semibold
                text-white shadow-lg transition-all duration-300
                hover:bg-orange-red-600 hover:shadow-md
                active:transform active:scale-[0.98]"
            >
              <span class="whitespace-nowrap">Install Mathesar</span>
            </TrackedLink>
            <TrackedLink
              analyticsData={{ location: "hero" }}
              href="https://mathesar.cloud"
              class="group inline-flex items-center justify-center gap-3 rounded-lg border-2 border-pumpkin-300/55 bg-pumpkin-400/10 px-6 py-3.5 text-lg font-semibold
                text-pumpkin-100
                transition-all duration-300
                hover:border-pumpkin-300/75 hover:bg-pumpkin-400/15
                active:transform active:scale-[0.98]"
            >
              <span class="whitespace-nowrap">Try Cloud for free</span>
            </TrackedLink>
          </div>
        </div>

        <div class="flex flex-wrap gap-4 z-10 pointer-events-auto">
          <!-- <a
            href="https://github.com/mathesar-foundation/mathesar"
            class="group inline-flex items-center gap-4 px-6 py-3.5 rounded-lg text-lg font-semibold
              bg-stormy-800/60 text-white
              border-2 border-pumpkin-500
              shadow-lg transition-all duration-300
              hover:bg-stormy-700/80 hover:shadow-md
              active:transform active:scale-[0.98]"
          >
            <span>View on GitHub</span>
          </a> -->
        </div>
      </div>

      <div class="relative">
        <div class="max-w-3xl 2xl:max-w-4xl mx-auto">
          <div class="relative z-10">
            <div
              class="relative rounded-lg shadow-2xl border-2 border-stormy-900 overflow-hidden"
            >
              <div class="inset-0 rounded-xl pointer-events-none z-10">
                <div
                  class="h-full w-full bg-gradient-to-br from-transparent to-black/10"
                ></div>
              </div>

              <Video
                src="/home-video/output.mp4"
                poster="/home-video/poster.png"
              ></Video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="-mt-20 lg:-mt-80">
    <SectionCurve direction="bottom" inverted fillColor="fill-stormy-50" />
  </div>
</div>
