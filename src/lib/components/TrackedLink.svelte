<!-- Type declarations for SimpleAnalytics -->
<script lang="ts" context="module">
  declare global {
    interface Window {
      sa_event?: (eventName: string, eventData?: string) => void;
    }
  }

  // Define possible locations for analytics tracking
  export type TrackingLocation = "header" | "hero" | "footer" | "page";

  // Define the structure of analytics data
  export interface AnalyticsData {
    location: TrackingLocation;
    className: string;
    [key: string]: any;
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";

  // Basic link props
  export let href: string;
  let className: string = "";
  export { className as class };

  // Analytics configuration
  export let eventName: string = "link_click";
  export let analyticsData: Omit<AnalyticsData, "className"> = {
    location: "page",
  };

  analyticsData.className = className;

  // Optional props
  export let target: "_blank" | "_self" | "_parent" | "_top" = "_self";
  export let rel: string | undefined = undefined;

  // Default tracking data that will be merged with custom data
  const defaultTrackingData = {
    href,
    pathname: typeof window !== "undefined" ? window.location.pathname : "",
    timestamp: 0,
  };

  function handleClick(event: MouseEvent) {
    // Prepare analytics payload
    const payload = {
      ...defaultTrackingData,
      timestamp: Date.now(),
      ...analyticsData,
    };

    // Track via SimpleAnalytics if available
    if (typeof window.sa_event === "function") {
      window.sa_event(eventName, JSON.stringify(payload));
    }
  }

  // Update pathname if component mounts
  onMount(() => {
    defaultTrackingData.pathname = window.location.pathname;
  });
</script>

<a {href} {target} {rel} class={className} on:click={handleClick}>
  <slot />
</a>
