import type { SolutionId } from "$lib/solutions/ids";
import type { SolutionIconName } from "$lib/solutions/icons";

export type SolutionIndexCardPresentation = {
  beforeGradientClass: string;
  iconTextClass: string;
};

export type SolutionPresentation = {
  icon: SolutionIconName;
  indexCard: SolutionIndexCardPresentation;
};

export const solutionPresentation = {
  "hardware-store-chain": {
    icon: "BoxIso",
    indexCard: {
      beforeGradientClass:
        "before:bg-gradient-to-br before:from-azure-500/20 before:to-azure-600/10",
      iconTextClass: "text-sapphire-500",
    },
  },
  museum: {
    icon: "Database",
    indexCard: {
      beforeGradientClass:
        "before:bg-gradient-to-br before:from-sapphire-500/20 before:to-sapphire-600/10",
      iconTextClass: "text-sapphire-500",
    },
  },
  "bike-shop": {
    icon: "Headset",
    indexCard: {
      beforeGradientClass:
        "before:bg-gradient-to-br before:from-plum-500/20 before:to-plum-600/10",
      iconTextClass: "text-plum-500",
    },
  },
  makerspace: {
    icon: "GraphUp",
    indexCard: {
      beforeGradientClass:
        "before:bg-gradient-to-br before:from-rosy-500/20 before:to-rosy-600/10",
      iconTextClass: "text-rosy-500",
    },
  },
  nonprofit: {
    icon: "Dollar",
    indexCard: {
      beforeGradientClass:
        "before:bg-gradient-to-br before:from-salmon-500/20 before:to-salmon-600/10",
      iconTextClass: "text-salmon-500",
    },
  },
  "ice-cream-distributor": {
    icon: "Clock",
    indexCard: {
      beforeGradientClass:
        "before:bg-gradient-to-br before:from-pumpkin-500/20 before:to-pumpkin-600/10",
      iconTextClass: "text-pumpkin-500",
    },
  },
} as const satisfies Record<SolutionId, SolutionPresentation>;

export function getSolutionPresentation(id: SolutionId): SolutionPresentation {
  return solutionPresentation[id];
}
