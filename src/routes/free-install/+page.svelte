<script>
  import Seo from "$lib/components/SEO.svelte";
</script>

<Seo title="Installation Support" />

<div class="antialiased overflow-x-hidden">
  <section class="relative pt-20">
    <div class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6">
          Installation Support
        </h1>
        <p class="text-xl sm:text-2xl text-stormy-100 mt-6 mb-12">
          Need help installing Mathesar? We're here to help!
        </p>
        <p class="text-xl sm:text-2xl text-stormy-100">
          Please fill out the form below or email us directly at 
          <a 
            href="mailto:hello@mathesar.org"
            class="text-salmon-500 hover:text-salmon-400 transition-colors duration-300"
          >
            hello@mathesar.org
          </a>.
        </p>
      </div>

      <div class="bg-stormy-100 max-w-2xl mx-auto relative px-8 lg:px-16 rounded-2xl z-10 mb-20 py-8 lg:py-16">
        <form class="max-w-2xl mx-auto space-y-6" action="https://formspree.io/f/moqbgpro" method="POST">
          <div class="space-y-4">
            <div class="space-y-2">
              <label for="full_name" class="block font-medium text-stormy-800">Full Name</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                required
                class="w-full px-4 py-2.5 rounded-md border border-stormy-200 focus:outline-none focus:ring-2 focus:ring-salmon-500 bg-white text-stormy-800"
              />
            </div>

            <div class="space-y-2">
              <label for="email" class="block font-medium text-stormy-800">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-2.5 rounded-md border border-stormy-200 focus:outline-none focus:ring-2 focus:ring-salmon-500 bg-white text-stormy-800"
              />
            </div>

            <div class="space-y-2">
              <label for="current_solution" class="block font-medium text-stormy-800">
                What database solution are you currently using?
              </label>
              <input
                type="text"
                id="current_solution"
                name="current_solution"
                class="w-full px-4 py-2.5 rounded-md border border-stormy-200 focus:outline-none focus:ring-2 focus:ring-salmon-500 bg-white text-stormy-800"
              />
            </div>

            <div class="space-y-2">
              <label for="hosting_provider" class="block font-medium text-stormy-800">
                Where do you plan to host Mathesar?
              </label>
              <input
                type="text"
                id="hosting_provider"
                name="hosting_provider"
                class="w-full px-4 py-2.5 rounded-md border border-stormy-200 focus:outline-none focus:ring-2 focus:ring-salmon-500 bg-white text-stormy-800"
              />
            </div>

            <div class="space-y-2">
              <label for="use_case" class="block font-medium text-stormy-800">
                How do you plan to use Mathesar?
              </label>
              <textarea
                id="use_case"
                name="use_case"
                rows="3"
                class="w-full px-4 py-2.5 rounded-md border border-stormy-200 focus:outline-none focus:ring-2 focus:ring-salmon-500 bg-white text-stormy-800 resize-none"
              ></textarea>
            </div>

            <div class="space-y-2">
              <label for="other_info" class="block font-medium text-stormy-800">
                Any other details you'd like to share?
              </label>
              <textarea
                id="other_info"
                name="other_info"
                rows="3"
                class="w-full px-4 py-2.5 rounded-md border border-stormy-200 focus:outline-none focus:ring-2 focus:ring-salmon-500 bg-white text-stormy-800 resize-none"
              ></textarea>
            </div>
          </div>

          <div class="flex justify-center">
            <button
              type="submit"
              class="w-full sm:w-auto group inline-flex items-center justify-center rounded-lg bg-orange-red-500 px-6 py-3.5 text-lg font-semibold
              text-white shadow-lg transition-all duration-300
              hover:bg-orange-700 hover:shadow-md
              active:transform active:scale-[0.98]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</div>
