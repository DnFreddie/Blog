import { initDb,getColl } from "$lib"

export async   function load (){
    const app = initDb()
    const collList = await getColl(app,"blogPosts")

return{
     postst: collList
    

        }

}

