import { initDb, getColl } from "$lib";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({}) => {
  const app = initDb();
  const collList = await getColl(app, "blogPosts");

  return Response.json(collList);
};
