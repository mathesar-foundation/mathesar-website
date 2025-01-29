<script lang="ts">
  import SectionCurve from "./SectionCurve.svelte";
  import Stickers from "./Stickers.svelte";
  import Video from "./Video.svelte";
</script>

<div class="relative overflow-x-clip">
  <section class="relative">
    <div>
      <Stickers variant="hero" />
    </div>

    <div class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-8 md:py-12 lg:py-16">
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
            <a
              href="https://docs.mathesar.org"
              class="group inline-flex items-center rounded-lg bg-orange-red-500 px-6 py-3.5 text-lg font-semibold
                text-white shadow-lg transition-all duration-300
                hover:bg-orange-red-600 hover:shadow-md
                active:transform active:scale-[0.98]"
            >
              <span class="whitespace-nowrap">Install Mathesar</span>
            </a>
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
        <div class="max-w-4xl mx-auto">
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

  <div class="-mt-24 lg:-mt-96">
    <SectionCurve direction="bottom" inverted fillColor="fill-stormy-50" />
  </div>
</div>
