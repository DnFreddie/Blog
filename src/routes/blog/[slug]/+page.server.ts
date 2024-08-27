import { error } from "@sveltejs/kit";
import { initDb, getItem } from "$lib";
import { resolve } from "path";

export async function load({ params }) {
  const app = initDb();
  const slug = params.slug;

  try {
    const collList = await getItem(app, slug, "blogPosts", "title");

    if (!collList || collList.length === 0) {
      throw error(404, { message: "Blog Post does not exist" });
    }

    const post =  collList[0];
    const lab_url = post.lab_url
    const url = post.body 
    const request = await fetch(url);
    

    if (!request.ok) {
      throw error(404, { message: "Failed to fetch content" });
    }

    const content = await request.text();

    return {
      p: {
        title: slug,
        content,
        lab_url
      },
    };
  } catch (e) {
    throw error(404, { message: "Blog Post does not exist" });
  }
}

