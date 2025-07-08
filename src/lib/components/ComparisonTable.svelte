<script lang=ts>
  import Check from iconoir/icons/check.svg?component;
  import X from iconoir/icons/xmark.svg?component;
  import Minus from iconoir/icons/minus.svg?component;
  import HelpCircle from iconoir/icons/question-mark.svg?component;
  import Info from iconoir/icons/info-circle.svg?component;

  export let data;
  export let className = ;
  export let showCategories = false;
  export let showNotes = true;

  // Group features by category if showCategories is true
  $: groupedFeatures = !showCategories
    ? { All Features: data.features }
    : data.features.reduce((acc, feature) => {
        const category = feature.category || Other;
        if (!acc[category]) acc[category] = [];
        acc[category].push(feature);
        return acc;
      }, {});

  function SupportIcon({ support }) {
    switch (support.level) {
      case full:
        return Check;
      case partial:
        return null;
      case none:
        return X;
      case planned:
        return Minus;
      case unknown:
      default:
        return HelpCircle;
    }
  }
</script>

<div class={`space-y-4 ${className}`}>
  <div class=w-full overflow-x-auto>
    <table class=w-full border-collapse text-sm>
      <thead>
        <tr class=bg-gray-100 dark:bg-gray-800>
          <th class=p-3 text-left font-semibold border-b dark:border-gray-700 min-w-[180px]>Feature</th>
          {#each data.competitors as competitor}
            <th class=p-3 text-center font-semibold border-b dark:border-gray-700 min-w-[120px]>
              <div class=flex flex-col items-center justify-center gap-2>
                {#if competitor.logo}
                  <img
                    src={competitor.logo || /placeholder.svg}
                    alt={competitor.name} logo
                    class=h-8 w-auto object-contain
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
            <tr class=bg-gray-50 dark:bg-gray-900>
              <td
                colspan={data.competitors.length + 1}
                class=p-3 font-medium text-gray-700 dark:text-gray-300 border-b dark:border-gray-700
              >
                {category}
              </td>
            </tr>
          {/if}

          {#each features as feature}
            <tr class=hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors>
              <td class=p-3 border-b dark:border-gray-700 group relative>
                <div class=flex items-center gap-1>
                  {feature.name}
                  {#if feature.description}
                    <div class=relative group>
                      <Info class=h-4 w-4 text-gray-400 cursor-help />
                      <div class=absolute left-0 bottom-full mb-2 w-64 bg-white dark:bg-gray-800 p-2 rounded shadow-lg text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-10 border dark:border-gray-700>
                        {feature.description}
                      </div>
                    </div>
                  {/if}
                </div>
              </td>
              {#each data.competitors as competitor}
                {#let support = data.supportMatrix[feature.id]?.[competitor.id] || { level: unknown }}
                <td class=p-3 text-center border-b dark:border-gray-700>
                  <div class=flex flex-col items-center justify-center gap-1>
                    {#if support.level === partial}
                      <span class=text-yellow-500 font-medium>-{support.note}</span>
                    {:else}
                      <svelte:component this={SupportIcon({ support })} class=h-5 w-5 class:text-green-500={support.level==='full'} class:text-red-500={support.level==='none'} class:text-blue-500={support.level==='planned'} class:text-gray-400={support.level==='unknown'}/>
                    {/if}
                  </div>
                </td>
              {/each}
            </tr>
          {/each}
        {/each}
      </tbody>
    </table>
  </div>

  {#if showNotes && data.notes && Object.keys(data.notes).length > 0}
    <div class=text-sm text-gray-600 dark:text-gray-400 space-y-1>
      {#each Object.entries(data.notes) as [key, note]}
        <div class=flex gap-1>
          <span class=font-medium>{key}</span>
          <span>{note}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>
