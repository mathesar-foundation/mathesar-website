import { getContributors } from "$lib/util/getContributors.server";

export async function load() {
  const [contributors] = await Promise.all([
    getContributors(),
  ]);
  return { contributors };
}
