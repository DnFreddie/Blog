import * as crypto from 'crypto'
import {APIKEY,AUTHDOMAIN,DATABASEURL,PROJECTID,STORAGEBUCKET,MESSAGINGSENDERID,APPID} from "$env/static/private"
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore , where,query,collection, addDoc,getDocs } from "firebase/firestore"; import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, type FirebaseStorage } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';


interface BlogPost{

    content: Blob,
    uuid:string
    hash:string,
    date:string,
    title:string

}



export async function getColl(app: FirebaseApp, col: string) {
  const firestore = getFirestore(app);  
  const blogsCollection = collection(firestore, col);
  const querySnapshot = await getDocs(blogsCollection);

  const posts = [];
  querySnapshot.forEach(doc => {
    posts.push({ id: doc.id, ...doc.data() });
  });
  return posts; 
}






export function initDb() :FirebaseApp{

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASEURL,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID
};

const app = initializeApp(firebaseConfig);
    return app
}




 async function uploadFileAndGetURL(file:ArrayBuffer,storage:FirebaseStorage,fName:string)  {
    const fileRef = storageRef(storage, `blogContents/`+fName);

    await uploadBytes(fileRef, file );

    const downloadURL = await getDownloadURL(fileRef);
    console.log(downloadURL)

    return downloadURL;
}





export async function addBlogPost(file:ArrayBuffer, title:string,app :FirebaseApp) {
    const storage:FirebaseStorage = getStorage(app)
    const downloadURL = await uploadFileAndGetURL(file,storage,title);

const db = getFirestore(app);
    const blogPost = {
        contentURL: downloadURL,
        uuid: uuidv4(),
        hash: await generateFileHash(file) ,
        date: new Date().toISOString(),
        title: title
    };

    await addDoc(collection(db, "blogPosts"), blogPost);
}



 async function generateFileHash(buffer:ArrayBuffer) {
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    return hashHex;
   }
export async function getItem(app :FirebaseApp ,param :string,col:string,id:string){
  const db = getFirestore(app);
    const blogsCollection = collection(db, col);
    const q = query(blogsCollection, where(id, '==', param));
 const querySnapshot = await getDocs(q);
    const blogs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return blogs;
}






    


