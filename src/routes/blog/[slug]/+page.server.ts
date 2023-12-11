 import { initDb,getItem } from "$lib"
import { santeizeM } from "$lib/mdRender"

 export async function load ({params}){

 const    app = initDb()
     const slug = params.slug
    const collList =await getItem(app,slug,"blogPosts","title")
    const url =  collList[0]
    const request  =  await fetch( url.contentURL)
    const blob = await request.text()
    const toRender = santeizeM(blob)

    return{
        content:toRender,
        title:slug



    }

 }
