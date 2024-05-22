import { initDb,getColl } from "$lib";

 
export async function load() {


    const app = initDb();
   let  data =  await  getColl(app, "blogPosts");



  return {
    posts: data
  };
}
