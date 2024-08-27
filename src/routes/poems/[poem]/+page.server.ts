import { initDb, getItem } from "$lib";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const app = initDb();
  const slug = params.poem;

  try {
    const data = await getItem(app, slug, "poems", "title");

    if (!data || data.length === 0) {
      throw error(404, { message: "Poem not found" });
    }

    const firstItem = data[0];

    return {
      p: {
        title: slug,
        item: firstItem,
      },
    };
  } catch (e) {
    throw error(404, { message: "Poem does not exist" });
  }
}
