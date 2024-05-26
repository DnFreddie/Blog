import FlexSearch from "flexsearch";
import type { BlogPost } from "./utils";

let postsIndex: FlexSearch.Index;
let posts: BlogPost[];

export function createPostsIndex(data: BlogPost[]) {
  postsIndex = new FlexSearch.Index({ tokenize: "forward" });

  data.forEach((post, i) => {
    const item = post.title;
    postsIndex.add(i, item);
  });

  posts = data;
}
