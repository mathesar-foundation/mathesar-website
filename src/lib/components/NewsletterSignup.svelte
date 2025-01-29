<script lang="ts">
  const FormState = {
    IDLE: "IDLE",
    SUBMITTING: "SUBMITTING",
    SUCCESS: "SUCCESS",
    ERROR: "ERROR",
  } as const;

  const themes: Record<string, Record<string, string>> = {
    dark: {
      background: "bg-stormy-900",
      border: "border-stormy-800",
      textPrimary: "text-white",
      textSecondary: "text-stormy-200",
      buttonText: "text-white",
      buttonBackground: "bg-orange-red-500",
      buttonHover: "hover:bg-orange-red-600",
      focusRing: "focus:ring-salmon-500",
      errorText: "text-red-500",
    },
    light: {
      background: "bg-white",
      border: "border-gray-300",
      textPrimary: "text-slate",
      textSecondary: "text-slate",
      buttonText: "text-white",
      buttonBackground: "bg-orange-red-500",
      buttonHover: "hover:bg-orange-red-600",
      focusRing: "focus:ring-salmon-500",
      errorText: "text-red-500",
    },
  };

  let formState: (typeof FormState)[keyof typeof FormState] = FormState.IDLE;
  let email = "";
  export let theme = "dark"; // Current theme: 'dark' or 'light'

  const handleSubmit = async () => {
    formState = FormState.SUBMITTING;

    try {
      const response = await fetch("https://formspree.io/f/xlevqoza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        formState = FormState.SUCCESS;
      } else {
        formState = FormState.ERROR;
      }
    } catch {
      formState = FormState.ERROR;
    }
  };
</script>

<div class="space-y-6 not-prose">
  {#if formState === FormState.SUCCESS}
    <div
      class={`flex flex-col items-center text-center space-y-2 p-6 border rounded-md ${themes[theme].background} ${themes[theme].border}`}
    >
      <h3 class={`text-xl font-medium ${themes[theme].textPrimary}`}>
        Thank you for subscribing!
      </h3>
      <p class={`${themes[theme].textSecondary} max-w-md`}>
        We'll keep you updated with the latest from the Mathesar Foundation.
      </p>
    </div>
  {:else}
    <form on:submit|preventDefault={handleSubmit} class="space-y-4">
      <div class="flex flex-col xl:flex-row gap-2">
        <input
          disabled={formState === FormState.SUBMITTING}
          type="email"
          bind:value={email}
          placeholder="Enter your email"
          required
          class={`flex-1 px-4 py-2.5 rounded-md placeholder:${themes[theme].textSecondary} focus:outline-none focus:ring-2 ${themes[theme].background} ${themes[theme].border} ${themes[theme].textPrimary} ${themes[theme].focusRing}`}
        />
        <button
          type="submit"
          class={`flex items-center justify-center gap-2 px-6 py-2.5 rounded-md transition-all duration-300 whitespace-nowrap ${themes[theme].buttonBackground} ${themes[theme].buttonHover} ${themes[theme].buttonText}`}
          disabled={formState === FormState.SUBMITTING}
        >
          {formState === FormState.SUBMITTING ? "Submitting..." : "Subscribe"}
        </button>
      </div>
      <p class={`text-sm ${themes[theme].textSecondary}`}>
        We'll send you occasional email updates about Mathesar. You can opt out
        at any time.
      </p>
    </form>
    {#if formState === FormState.ERROR}
      <p class={`text-sm ${themes[theme].errorText}`}>
        Something went wrong. Please try again later.
      </p>
    {/if}
  {/if}
</div>
