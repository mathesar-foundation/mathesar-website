<script lang="ts">
  import SectionCurve from "$lib/components/SectionCurve.svelte";
  import CTASection from "$lib/components/CTASection.svelte";
  import OpenNewWindow from "iconoir/icons/open-new-window.svg?component";
  import Seo from "$lib/components/SEO.svelte";
  let { data } = $props();
  const { projects } = data;

  function getStatusInfo(status: string) {
    if (status.includes("Shipped")) {
      return {
        color: "emerald",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        textColor: "text-emerald-700",
        icon: "🚀",
      };
    } else if (status.includes("In Progress")) {
      return {
        color: "blue",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
        icon: "🚧",
      };
    } else if (status.includes("Planning")) {
      return {
        color: "amber",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
        textColor: "text-amber-700",
        icon: "📋",
      };
    } else if (status.includes("Upcoming")) {
      return {
        color: "purple",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        textColor: "text-purple-700",
        icon: "⏳",
      };
    } else if (status.includes("Ideas")) {
      return {
        color: "rose",
        bgColor: "bg-rose-50",
        borderColor: "border-rose-200",
        textColor: "text-rose-700",
        icon: "💡",
      };
    }
    return {
      color: "gray",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-700",
      icon: "📄",
    };
  }

  // Accept only v0.x.y (e.g., "v0.3.2")
  const V0_SEMVER = /^v0\.(\d+)\.(\d+)$/;

  function parseV0Semver(title?: string) {
    if (!title) return null;
    const m = V0_SEMVER.exec(title);
    if (!m) return null;
    return { major: 0, minor: Number(m[1]), patch: Number(m[2]) };
  }

  function compareV0SemverDesc(aTitle: string, bTitle: string) {
    const a = parseV0Semver(aTitle)!;
    const b = parseV0Semver(bTitle)!;
    // Newest first
    if (a.minor !== b.minor) return b.minor - a.minor;
    return b.patch - a.patch;
  }

  function isValidV0Milestone(title?: string): boolean {
    return parseV0Semver(title ?? (null as any)) !== null;
  }

  function groupProjectsByMilestone() {
    // Map keyed by milestone title string
    const groups = new Map<
      string,
      { milestone: Project["milestone"]; projects: Project[] }
    >();

    projects.forEach((project) => {
      const ms = project.milestone;
      const title = ms?.title;
      if (!isValidV0Milestone(title)) return;

      if (!groups.has(title!)) {
        // Keep the first milestone object we see for this title
        groups.set(title!, { milestone: ms!, projects: [] });
      }
      groups.get(title!)!.projects.push(project);
    });

    // Sort by semver (desc)
    const sorted = Array.from(groups.keys()).sort(compareV0SemverDesc);

    return sorted.map((title) => groups.get(title)!);
  }

  function getFutureIdeasProjects() {
    return projects.filter(
      (project) => !isValidV0Milestone(project.milestone?.title),
    );
  }

  // Svelte runes (unchanged usage)
  const milestoneGroups = $derived(groupProjectsByMilestone());
  const futureIdeasProjects = $derived(getFutureIdeasProjects());
</script>

<Seo title="Mathesar Product Roadmap" image="/og/og-product.png" />

<div class="antialiased">
  <div class="pt-20 relative text-center">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="relative flex flex-col gap-y-2">
        <span
          class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-pumpkin-400"
        >
          Product Roadmap
        </span>
        <span
          class="text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white"
        >
          See what's coming soon to Mathesar.
        </span>
      </h1>

      <div class="pt-4 lg:pt-8">
        <a
          href="https://github.com/orgs/mathesar-foundation/projects/2?query=sort%3Aupdated-desc+is%3Aopen"
          class="group inline-flex items-center gap-4 px-6 py-3.5 rounded-lg text-lg font-semibold
        bg-transparent text-white
        border-2 border-pumpkin-500
        shadow-lg transition-all duration-300
        hover:bg-pumpkin-500/5 hover:shadow-md
        active:transform active:scale-[0.98]"
        >
          <span>View in GitHub</span>
          <OpenNewWindow class="w-3" />
        </a>
      </div>
    </div>

    <SectionCurve direction="bottom" inverted />
  </div>

  <div
    class="antialiased bg-gradient-to-br from-stormy-50 via-stormy to-blue-50 px-4 flex-grow min-h-screen pb-20"
  >
    <!-- Updated timeline container with better spacing -->
    <div class="relative max-w-6xl mx-auto">
      <!-- Center timeline line -->
      <div
        class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-purple-300 to-rose-200 h-full rounded-full shadow-sm"
      ></div>

      <!-- Milestone groups with compact spacing -->
      <div class="space-y-8">
        {#each milestoneGroups as { milestone, projects: milestoneProjects }}
          <!-- Fixed milestone header styling -->
          <div class="relative flex justify-center mb-6">
            <div
              class="bg-white border-2 border-orange-300 rounded-lg px-6 py-2 shadow-md z-10"
            >
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-orange-400 rounded-full"></div>
                <a href={milestone.url}>
                  <h2 class="text-xl font-bold text-slate-800">
                    {milestone.title}
                  </h2>
                </a>
                <span class="text-sm text-slate-600"
                  >({milestoneProjects.length} project{milestoneProjects.length !==
                  1
                    ? "s"
                    : ""})</span
                >
              </div>
            </div>
          </div>

          <!-- Grid layout instead of alternating timeline -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 px-4"
          >
            {#each milestoneProjects as project}
              {@const statusInfo = getStatusInfo(project.status)}
              <a
                href={project.url}
                class="lg:only:col-start-2 block p-4 {statusInfo.bgColor} {statusInfo.borderColor} border-2 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group text-left"
              >
                <div class="flex items-start justify-between gap-3 text-left">
                  <div class="flex-1">
                    <h3
                      class="font-bold text-base text-slate-800 group-hover:text-slate-900 mb-2 leading-tight"
                    >
                      {project.title}
                    </h3>
                    <div class="flex items-center gap-2">
                      <span class="text-base">{statusInfo.icon}</span>
                      <span
                        class="px-2 py-1 {statusInfo.textColor} bg-white/70 rounded-full text-xs font-semibold border border-{statusInfo.color}-200"
                      >
                        {project.status.substring(
                          project.status.indexOf(" ") + 1,
                        )}
                      </span>
                    </div>
                  </div>
                  <div
                    class="text-{statusInfo.color}-400 group-hover:text-{statusInfo.color}-600 transition-colors"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            {/each}
          </div>
        {/each}

        <!-- Future Ideas section for projects without valid milestones -->
        {#if futureIdeasProjects.length > 0}
          <div class="relative flex justify-center mb-6">
            <div
              class="bg-white border-2 border-rose-300 rounded-lg px-6 py-2 shadow-md z-10"
            >
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-rose-400 rounded-full"></div>
                <h2 class="text-xl font-bold text-slate-800">
                  Additional Projects
                </h2>
                <span class="text-sm text-slate-600"
                  >({futureIdeasProjects.length} project{futureIdeasProjects.length !==
                  1
                    ? "s"
                    : ""})</span
                >
              </div>
            </div>
          </div>

          <!-- Grid layout for future ideas section -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4"
          >
            {#each futureIdeasProjects as project}
              {@const statusInfo = getStatusInfo(project.status)}
              <a
                href={project.url}
                class="lg:only:col-start-2 block p-4 {statusInfo.bgColor} {statusInfo.borderColor} border-2 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <div class="flex items-start justify-between gap-3">
                  <div class="flex-1">
                    <h3
                      class="font-bold text-base text-slate-800 group-hover:text-slate-900 mb-2 leading-tight"
                    >
                      {project.title}
                    </h3>
                    <div class="flex items-center gap-2">
                      <span class="text-base">{statusInfo.icon}</span>
                      <span
                        class="px-2 py-1 {statusInfo.textColor} bg-white/70 rounded-full text-xs font-semibold border border-{statusInfo.color}-200"
                      >
                        {project.status.substring(
                          project.status.indexOf(" ") + 1,
                        )}
                      </span>
                    </div>
                  </div>
                  <div
                    class="text-{statusInfo.color}-400 group-hover:text-{statusInfo.color}-600 transition-colors"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="bg-blue-50 only:span">
    <CTASection />
  </div>
</div>
