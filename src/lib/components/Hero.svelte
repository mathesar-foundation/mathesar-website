<script lang="ts">
  import SectionCurve from "./SectionCurve.svelte";
  import Stickers from "./Stickers.svelte";
  import TrackedLink from "./TrackedLink.svelte";
  import Video from "./Video.svelte";
</script>

<div class="relative overflow-x-clip">
  <section class="relative">
    <div>
      <Stickers variant="hero" />
    </div>

    <div class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-8 md:py-12 lg:py-16 relative z-20">
        <div class="flex-1 mx-auto w-full relative">
          <div class="space-y-4 md:space-y-8 text-center">
            <h1
              class="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white"
            >
              <span class="text-pumpkin-400">Secure,</span>
              <span class="text-pumpkin-400">spreadsheet-like</span><br />
              <span>tool for Postgres data</span>
            </h1>
            <p
              class="text-xl lg:text-2xl max-w-2xl mx-auto text-stormy-100 leading-tight"
            >
              An intuitive, open-source UI to view, edit, and query Postgres
              data—easy to deploy with robust access control.
            </p>
          </div>

          <div class="text-center mt-8">
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

      <div class="relative mt-8">
        <div class="max-w-4xl mx-auto">
          <div class="relative z-10">
            <enhanced:img
              src="/src/assets/peeking-elephant.png"
              alt="Support Mathesar"
              class="hidden sm:block md:w-56 absolute md:top-[-153px] md:right-10 z-10 w-48 top-[-132px] right-0"
            />

            <div class="absolute left-1/2 -translate-x-1/2 -top-32 w-[90%] z-0">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-b from-stormy-900/50 to-transparent z-10 rounded-lg"></div>
                <enhanced:img
                  src="/src/assets/illustrations/postgres-security-frame.png"
                  alt="PostgreSQL Interface"
                  class="w-full rounded-lg shadow-lg border-2 border-stormy-700/20"
                />
              </div>
            </div>
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

  <div class="-mt-24 lg:-mt-96">
    <SectionCurve direction="bottom" inverted fillColor="fill-stormy-50" />
  </div>
</div>
