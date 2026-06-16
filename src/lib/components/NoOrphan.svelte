<script lang="ts">
  export let text = "";
  export let keepWords = 2;

  $: words = text.trim().split(/\s+/).filter(Boolean);
  $: keepCount = Math.min(Math.max(keepWords, 1), words.length);
  $: displayText =
    words.length > 1
      ? [
          words.slice(0, -keepCount).join(" "),
          words.slice(-keepCount).join("\u00A0"),
        ]
          .filter(Boolean)
          .join(" ")
      : text;
</script>

{displayText}
