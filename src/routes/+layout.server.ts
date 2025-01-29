import { getStars } from '$lib/util/getStars';
import type { LayoutServerLoad } from './$types';

/**
   * For static site generation
   * @see https://svelte.dev/docs/kit/adapter-static
   */
  export const prerender = true;

  export const load: LayoutServerLoad = async () => {
    return {
      starsCount: await getStars()
    };
  };
