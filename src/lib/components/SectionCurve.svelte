<script lang="ts">
  export let direction: "bottom" | "top" = "bottom";
  export let inverted: boolean = false;
  export let fillColor: string = "fill-stormy-50";
  export let height: number = 40;
</script>

<div class="block -mt-[2px] -mb-[2px]">
  <svg
    class="w-full h-{height} {fillColor} {inverted
      ? 'transform rotate-180'
      : ''}"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    {#if direction === "bottom"}
      <path d="M 0,0 H 1200 V 120 A 800,200 0 0,0 0,120 Z" />
    {:else if direction === "top"}
      <path d="M 0,120 A 800,200 0 0,1 1200,120 V 200 H 0 V 120" />
    {/if}
  </svg>
</div>
