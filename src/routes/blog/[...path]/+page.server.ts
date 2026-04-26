import { getBlogPosts } from "$lib/util/getBlogPosts.server";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ params }) => {
  const posts = await getBlogPosts();
  const post = posts.find((i) => params.path === i.path);

  if (!post) {
    error(404, {
      message: "Not found",
    });
  }

  // Grab the 3 most recent posts
  const recentPosts = posts
    .filter((candidate) => candidate.path !== post.path)
    .slice(0, 3);

  return { post, recentPosts };
};
