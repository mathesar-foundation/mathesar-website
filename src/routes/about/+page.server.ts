import { getContributors } from "$lib/util/getContributors.server";
import { getStaff } from "$lib/util/getStaff.server";

export async function load() {
  const [staff, contributors] = await Promise.all([
    getStaff(),
    getContributors(),
  ]);
  return { staff, contributors };
}
