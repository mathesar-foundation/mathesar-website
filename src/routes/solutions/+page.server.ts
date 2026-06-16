import { getSolutionNavItems, getSolutions } from "$lib/server/solutions";

export function load() {
  const solutions = getSolutions();
  const solutionNavItems = getSolutionNavItems(solutions);

  return { solutions, solutionNavItems };
}
