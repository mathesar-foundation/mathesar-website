<script lang="ts">
  export let card: {
    title: string;
    description: string;
    image: any;
  };
</script>

<div class="bg-white/100 rounded-2xl p-6 shadow-sm">
  <div class="rounded-lg w-full flex items-center justify-center mb-4">
    <enhanced:img
      fetchpriority="high"
      src={card.image}
      alt={card.title}
      class="w-full h-full object-cover rounded-lg"
      sizes="(min-width: 1024px) 400px, (min-width: 768px) min(800px, 100vw), min(100vw - 32px, 800px)"
    />
  </div>
  <div>
    <h3 class="text-xl font-bold text-stormy-800 mb-3">{card.title}</h3>
    <p class="text-gray-600">{card.description}</p>
  </div>
</div>
