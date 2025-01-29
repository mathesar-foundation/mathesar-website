import { getSolution, getSolutions } from "$lib/util/getSolutions.server";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const solutions = await getSolutions();
  const solution = await getSolution(params.id);

  if (!solution) {
    throw error(404, 'Solution not found');
  }

  return {
    solution,
    solutions
  };
};
