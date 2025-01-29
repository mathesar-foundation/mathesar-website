<script>
  import CTASection from "$lib/components/CTASection.svelte";
  import NewsletterSignup from "$lib/components/NewsletterSignup.svelte";
  import Seo from "$lib/components/SEO.svelte";
</script>

<Seo title="Mailing List" />

<div class="bg-stormy-50 flex-grow">
  <div class=" pt-8 lg:pt-12">
    <div
      class="max-w-3xl mx-auto prose prose-slate text-center prose-h1:font-bold prose-headings:text-gray-800 py-16]"
    >
      <h1>Join Our Mailing List</h1>
      <div class="text-lg lg:text-2xl space-y-4 text-center">
        <p>Keep on top of what's going on at the Mathesar Foundation</p>
      </div>

      <NewsletterSignup theme="light" />
    </div>
    <CTASection />
  </div>
</div>
