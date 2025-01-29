import { getContributors } from "$lib/util/getContributors.server";
import { getSolutions } from "$lib/util/getSolutions.server";

export async function load() {
  const contributors = await getContributors();
  const solutions = await getSolutions();

  return { contributors, solutions };
}
