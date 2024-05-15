import { initDb, getItem } from "$lib";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const app = initDb();
    const slug = params.poem;
    const collList = await getItem(app, slug, "poems", "title");

    if (!collList || collList.length === 0) {
      throw error(404, "Blog Post does not found");
    }

    const data = collList[0];

    const { img, music, body, bacground } = data;

    return {
      title: slug,
      img: img,
      music: music,
      body: body,
      bacground: bacground,
    };
  } catch (e) {
    throw error(404, { message: "Blog Post does not Exits" });
  }
}
