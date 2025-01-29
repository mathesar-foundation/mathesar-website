<script lang="ts">
  import Star from "iconoir/icons/star.svg?component"; // Import Star icon
  import Github from "iconoir/icons/github.svg?component"; // Import GitHub icon

  export let count: number;
</script>

<a
  aria-label="View on GitHub"
  href="https://github.com/mathesar-foundation/mathesar"
  target="_blank"
  rel="noopener noreferrer"
  class="group flex items-center p-2 xl:px-3 rounded-full gap-1.5 sm:rounded-md xl:rounded-full border border-stormy-400 bg-stormy-800 shadow-sm hover:shadow-md hover:border-stormy-300 hover:bg-stormy-700 transition-all duration-300"
>
  <span class="flex sm:hidden xl:flex items-center gap-1.5">
    <Star class="text-pumpkin-400 w-4 lg:w-5" />
    <span class="font-semibold text-white">{count}</span>
  </span>
  <Github class="text-stormy-100 w-4 lg:w-5" />
</a>
