import { initDb, getItem } from "$lib";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const app = initDb();
    const slug = params.poem;
  const item = getItem(app, slug, "poems", "title")
  .then((data) => {
    if (!data || data.length === 0) {
      throw new Error( "Blog Post not found");
    } else {
     const firstItem = data[0];
        return firstItem
    }
  })
  .catch((error) => {
    console.error(error);
  });



    return {
            p:{
                title:slug,
                item:item
                

            }
         };
  } catch (e) {
    throw error(404, { message: "Blog Post does not Exits" });
  }


}
