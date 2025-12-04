import { getDatasets, getDataset } from "$lib/util/getDatasets.server";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const slug = params.path?.split("/")[0];

  if (!slug) {
    error(404, { message: "Dataset not found" });
  }

  const dataset = getDataset(slug);

  if (!dataset) {
    error(404, { message: "Dataset not found" });
  }

  return { dataset };
};
