import { initDb, getItem } from "$lib";
import { renderMarkdown} from "$lib/mdRender";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const app = initDb();
    const slug = params.slug;
    const collList = await getItem(app, slug, "blogPosts", "title");

    if (!collList || collList.length === 0) {
      throw error(404, "Blog Post does not exist");
    }

    const url = collList[0];
    const request = await fetch(url.body);

    if (!request.ok) {
      throw new Error("Failed to fetch content");
    }

    const blob = await request.text();
    const toRender = renderMarkdown(blob);

    return {
      content: toRender,
      title: slug,
    };
  } catch (e) {
    throw error(404, { message: "Blog Post does not Exits" });
  }
}
