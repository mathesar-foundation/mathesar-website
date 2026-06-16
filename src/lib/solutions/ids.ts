export const solutionIds = [
  "hardware-store-chain",
  "museum",
  "bike-shop",
  "makerspace",
  "nonprofit",
  "ice-cream-distributor",
] as const;

export type SolutionId = (typeof solutionIds)[number];

export function isSolutionId(id: string): id is SolutionId {
  return (solutionIds as readonly string[]).includes(id);
}
