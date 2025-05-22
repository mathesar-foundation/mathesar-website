import { getProjects } from "$lib/util/getProjects.server";

export async function load() {
  const [projects] = await Promise.all([getProjects()]);
  return { projects };
}
