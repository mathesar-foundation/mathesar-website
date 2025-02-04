<script lang="ts">
  import Seo from "$lib/components/SEO.svelte";
  import Solution from "$lib/components/Solution.svelte";
  import SolutionPageNav from "$lib/components/SolutionPageNav.svelte";

  export let data;

  $: solution = data.solution;
  $: solutions = data.solutions;
</script>

<Seo title={`${solution.title} - Solution`}
  image={`/og/og-solution-${solution.id}.png`}
/>

<SolutionPageNav {solutions} currentSolutionId={solution.id} />

<Solution {solution} />
