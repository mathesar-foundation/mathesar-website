<script>
  import CTASection from "$lib/components/CTASection.svelte";
  import NewsletterSignup from "$lib/components/NewsletterSignup.svelte";
  import Seo from "$lib/components/SEO.svelte";
</script>

<Seo title="Mailing List" />

<div class="antialiased overflow-x-hidden">
  <section class="relative pt-12 sm:pt-20">
    <div class="z-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center mb-16 sm:mb-32">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 sm:mb-6">
          Join Our <br />
          <span class="text-pumpkin-400">Mailing List</span>
        </h1>

        <p class="text-xl sm:text-2xl text-stormy-100 mt-4 sm:mt-6 mb-8 sm:mb-12">
          Keep on top of what's going on at the Mathesar Foundation
        </p>

        <div class="max-w-xl mx-auto bg-stormy-50 rounded-xl p-4 sm:p-6 shadow-lg">
          <NewsletterSignup theme="light" />
        </div>
      </div>
    </div>
  </section>

  <CTASection />
</div>
