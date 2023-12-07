import { initDb,addBlogPost } from "$lib";
export const actions ={
    uploadImage: async ({request})=>{
        const form = await request.formData();
        const pictureName = form.get("pictureName")??'';
        const pictureData  = form.get("pictureData");
        const u8 = Uint8Array.from(Buffer.from(pictureData, 'base64'))

        const app = initDb()
        await addBlogPost(u8,pictureName,app)
  }
}
