import { getContributors } from "$lib/util/getContributors.server";
import { getSolutions } from "$lib/util/getSolutions.server";

export async function load() {
  const solutions = await getSolutions();

  return { solutions };
}
