import {
  getSolution,
  getSolutionNavItems,
  getSolutions,
} from "$lib/server/solutions";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
  const solutions = getSolutions();
  const solution = getSolution(params.id, solutions);

  if (!solution) {
    throw error(404, "Solution not found");
  }

  return {
    solution,
    solutionNavItems: getSolutionNavItems(solutions),
  };
};
