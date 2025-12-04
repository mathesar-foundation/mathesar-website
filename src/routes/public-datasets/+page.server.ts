import { getDatasets } from "$lib/util/getDatasets.server";

export async function load() {
  const datasets = getDatasets();
  return { datasets };
}
