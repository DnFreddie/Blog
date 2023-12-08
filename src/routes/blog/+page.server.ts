import { initDb,getColl } from "$lib"
import { marked } from 'marked';
import { sanitize } from "isomorphic-dompurify";

function santeizeM(mdString:string): string{
    const html :string = marked.parse(mdString).toString();
    const clean: string = sanitize(html);
    return clean
}
export async function load({ params }) {
 const    app = initDb()
 const collList = await getColl(app,"blogPosts")
   // const url =  collList[0]
   //  const request  =  await fetch( url.contentURL)
   //  const blob = await request.text()
   //  const toRender = santeizeM(blob)
    




	return {
		posts: collList
	};
}

