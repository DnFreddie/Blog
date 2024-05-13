import { initDb,addBlogPost } from "$lib";
import { LOGIN_PASSWORD,LOGIN_MAIL } from "$env/static/private";
export const actions ={
    uploadImage: async ({request})=>{
        const form = await request.formData();
        const pictureName = form.get("pictureName")??'';
        const pictureData  = form.get("pictureData");
        const u8 = Uint8Array.from(Buffer.from(pictureData, 'base64'))

        const app = initDb()
        await addBlogPost(u8,pictureName,app)
  },
    
        login:  async ({request})=>{
            		const data = await request.formData();
                    const email = data.get('email');
                    const password = data.get('password');
        if (email == LOGIN_MAIL && password == LOGIN_PASSWORD){
        		return { success: true };
        }

        return {success: false}


        }
}

