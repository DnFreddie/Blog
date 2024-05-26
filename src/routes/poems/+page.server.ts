import { initDb, getColl } from "$lib";

export async function load() {
  const app = initDb();
  const poemsList = getColl(app, "poems");

  return {
    poems: {
            item:poemsList
        }
  };
}
