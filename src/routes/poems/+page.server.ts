import { initDb,getColl } from "$lib"

export async   function load (){
    const app = initDb()
    const poemsList = await getColl(app,"poems")

return{
     poems: poemsList
    

        }

}

