import { redirects } from "$lib/redirects";
import { redirect } from "@sveltejs/kit";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // Remove trailing slashes to match redirects file
  if (event.url.pathname !== "/" && event.url.pathname.endsWith("/")) {
    event.url.pathname = event.url.pathname.slice(0, -1);
  }

  const newPath = redirects[event.url.pathname];
  if (newPath) {
    redirect(302, newPath);
  }

  // If no redirect is necessary, continue with the normal resolve process
  const response = await resolve(event);
  return response;
}
