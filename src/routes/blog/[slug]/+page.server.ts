import { error } from '@sveltejs/kit';
import { initDb,getItem } from '$lib';
import { resolve } from 'path';
export async function load({ params }) {
  try {
    const app = initDb();
    const slug = params.slug;
 let item =    getItem(app, slug, "blogPosts", "title")
  .then(collList => {
    if (!collList || collList.length === 0) {
      throw new Error("Blog Post does not exist");
    }

    const url = collList[0];
    return fetch(url.body);
  })
  .then(request => {
    if (!request.ok) {
      throw new Error("Failed to fetch content");
    }

    return request.text();
  })
  .catch(error => {
                console.log(error)
  });
    return {
      p: {
        title: slug,
        content: item
      }
    };
  } catch (e) {
    throw error(404, { message: 'Blog Post does not exist' });
  }
}

