<script>
  import CTASection from "$lib/components/CTASection.svelte";
  import NewsletterSignup from "$lib/components/NewsletterSignup.svelte";
  import NoOrphan from "$lib/components/NoOrphan.svelte";
  import Seo from "$lib/components/SEO.svelte";
</script>

<Seo title="Mailing List" />

<div class="antialiased overflow-x-hidden">
  <section class="relative pt-10 sm:pt-12">
    <div class="z-20 relative site-container">
      <div class="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
        <h1
          data-hero-heading
          class="text-balance text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-4 sm:mb-6"
        >
          <NoOrphan text="Join Our" /> <br />
          <span class="text-pumpkin-400"><NoOrphan text="Mailing List" /></span>
        </h1>

        <p class="text-xl sm:text-2xl text-stormy-100 mt-4 mb-6">
          Keep on top of what's going on at the Mathesar Foundation
        </p>

        <div
          class="max-w-xl mx-auto bg-stormy-50 rounded-xl p-4 sm:p-6 shadow-lg"
        >
          <NewsletterSignup theme="light" sourceComponent="mailing-list-page" />
        </div>
      </div>
    </div>
  </section>

  <CTASection />
</div>
