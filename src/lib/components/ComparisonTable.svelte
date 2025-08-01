<script lang="ts">
  import Check from "iconoir/icons/check.svg?component";
  import X from "iconoir/icons/xmark.svg?component";
  import Minus from "iconoir/icons/minus.svg?component";
  import HelpCircle from "iconoir/icons/question-mark.svg?component";
  import Info from "iconoir/icons/info-circle.svg?component";

  export let data: any;
  export let className: string = "";
  export let showCategories: boolean = false;
  export let showNotes: boolean = true;

  const UNKNOWN = "unknown";
  const FULL = "full";
  const PARTIAL = "partial";
  const NONE = "none";
  const PLANNED = "planned";

  $: groupedFeatures = !showCategories
    ? { "All Features": data.features }
    : data.features.reduce((acc, feature) => {
        const category = feature.category || "Other";
        if (!acc[category]) acc[category] = [];
        acc[category].push(feature);
        return acc;
      }, {});

  function getSupport(featureId: string, competitorId: string) {
    return (
      data.supportMatrix?.[featureId]?.[competitorId] || { level: UNKNOWN }
    );
  }

  function SupportIcon(support: { level: string }) {
    switch (support.level) {
      case FULL:
        return Check;
      case NONE:
        return X;
      case PLANNED:
        return Minus;
      case PARTIAL:
        return null;
      case UNKNOWN:
      default:
        return HelpCircle;
    }
  }

  function getSupportIconClass(level: string): string {
    switch (level) {
      case FULL:
        return "text-green-500";
      case NONE:
        return "text-red-500";
      case PLANNED:
        return "text-blue-500";
      case UNKNOWN:
      default:
        return "text-gray-400";
    }
  }
</script>

<div class={`space-y-4 ${className}`}>
  <div class="w-full overflow-x-auto bg-white">
    <table class="w-full border-collapse text-sm">
      <thead>
        <tr class="bg-gray-100">
          <th
            class="p-3 text-left font-semibold border-b border-gray-300 min-w-[180px]"
          >
            Feature
          </th>
          {#each data.competitors as competitor}
            <th
              class="p-3 text-center font-semibold border-b border-gray-300 min-w-[120px]"
            >
              <div class="flex flex-col items-center justify-center gap-2">
                {#if competitor.logo}
                  <img
                    src={competitor.logo}
                    alt={`${competitor.name} logo`}
                    class="h-8 w-auto object-contain"
                  />
                {/if}
                <span>{competitor.name}</span>
              </div>
            </th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each Object.entries(groupedFeatures) as [category, features]}
          {#if showCategories}
            <tr class="bg-gray-50">
              <td
                colspan={data.competitors.length + 1}
                class="p-3 font-medium text-gray-700 border-b border-gray-300"
              >
                {category}
              </td>
            </tr>
          {/if}

          {#each features as feature}
            <tr class="hover:bg-gray-50 transition-colors">
              <td class="p-3 border-b border-gray-300 group relative">
                <div class="flex items-center gap-1">
                  {feature.name}
                  {#if feature.description}
                    <div class="relative group">
                      <Info class="h-4 w-4 text-gray-400 cursor-help" />
                      <div
                        class="absolute left-0 bottom-full mb-2 w-64 bg-white p-2 rounded shadow-lg text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-10 border border-gray-300"
                      >
                        {feature.description}
                      </div>
                    </div>
                  {/if}
                </div>
              </td>
              {#each data.competitors as competitor}
                {#key feature.id + competitor.id}
                  {#await Promise.resolve(getSupport(feature.id, competitor.id)) then support}
                    <td class="p-3 text-center border-b border-gray-300">
                      <div
                        class="flex flex-col items-center justify-center gap-1"
                      >
                        {#if support.level === PARTIAL}
                          <span class="text-yellow-500 font-medium">
                            - {support.note}
                          </span>
                        {:else}
                          <svelte:component
                            this={SupportIcon(support)}
                            class={`h-5 w-5 ${getSupportIconClass(support.level)}`}
                          />
                        {/if}
                      </div>
                    </td>
                  {/await}
                {/key}
              {/each}
            </tr>
          {/each}
        {/each}
      </tbody>
    </table>
  </div>

  {#if showNotes && data.notes && Object.keys(data.notes).length > 0}
    <div class="text-sm text-gray-600 flex gap-4 items-center">
      {#each Object.entries(data.notes) as [key, note]}
        <div class="flex gap-1">
          <span class="font-medium">{key}</span>
          <span>{note}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>
