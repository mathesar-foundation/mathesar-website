import { getBlogPosts } from "$lib/util/getBlogPosts.server";
import { error } from "@sveltejs/kit";

export async function load() {
  const posts = await getBlogPosts();

  if (!posts) {
    error(404, {
      message: "Not found",
    });
  }

  return { posts };
}
