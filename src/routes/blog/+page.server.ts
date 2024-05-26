import { initDb, getColl } from "$lib";

export async function load() {
  const app = initDb();
  const data = getColl(app, "blogPosts");

  return {
    posts: {
      item: data,
    },
  };
}
