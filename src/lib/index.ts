import { google } from 'googleapis';
import * as crypto from 'crypto'
import {APIKEY,AUTHDOMAIN,DATABASEURL,PROJECTID,STORAGEBUCKET,MESSAGINGSENDERID,APPID} from "$env/static/private"
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore , where,query,collection, addDoc,getDocs } from "firebase/firestore"; import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, type FirebaseStorage } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

export const credentials= 
    {
	"private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDaDQ18nyYoZCRj\nhThHjSCBEH2f5zz69iJ9tSYg4FnOz1+70fRXYDtPnCwxaCq0QBDToFTc12wOAfLs\nCUR6QDNQw9n8C1a3W5Gj+PQYjTGOUtgYpYi06LCNHD0pNdQLFkDDV7fkRUbngR7N\nom3ErB2GIGrgV9vB8W0i+1vaNMUHvU+sArxAn6KbrN3Egm0vip5vytAlnY3trUFi\nzKBgS67EDHGi3fHJJQlWqBnN3Lgz32fRL/+H7xxQt5qwEyDD8zHE9YSVl3aUzMWD\nzC2R49Bp8NgDXOu5nH/B9cG9VUNuP0NSI3I+xHnaLtngUtXH5r+Lm6p3kQhW6Osn\ndrOA5qr7AgMBAAECggEAGTsYFmrWoCcw9rsRj2X1yY6+RTnH7+951OXt1Ya1nZ1C\noe8MwOzdBWc4IzdpyZWoMh9ZR9HoKkQbdyh+CKSpIMKo1JCophWDErWEjoVioz9U\nIKChjZ1nNczQtEC1moV7/56EzssdWz2w8hvGFn3RT2ss3Wy30bHn7lD7iJJBQkB0\n10Ct2g5FJBz8K48RIjI1ViJmefV+5Gxwt82oi4ApirWpDyIDtirytkUjFnbfzlU9\nelfV60kGXfke4OXzdkxa3Myfek88XwkWM2jp7Rx61Ory08ASvzUfCcBlxhflG0b0\nQBCQwkpCfX4W7AFhPHxFWYlD/nAA851o9qJJI7eysQKBgQD5iQce0bKeZJZtT73w\nPBX6259y2dD9XLogm2OSvkDheqikBcJychaAx8FISgHe0iIj3u4YBQ5feUV6GI7g\npPDBu3mdKixbIGrnwUWlYkrQOB2DT9rZyzsTfCX16NcDhC4tfZgsXe6r+oXDYrxF\nFsshKkMIw3+T7n1afQNxayp4RQKBgQDfszbbbwMCSg43GADNTEjWKNl9yCpWwJgI\nQyIDn7kG2UteuZAo73ET6obPJJckvAS/zuEk9Vqd3OMNu0t6vVHAuaykO1KTZlWr\n6nrrRtrJR3AuJfDNhCi5KsGzh7FugZJZrCRCkEawG3XleGyYdfUjzKGzSkrdRhwO\nYUmnM7TqPwKBgQCMjzdHkO+AcUCaynQ/QllPOS8TzsX+MaFWhLEOE8UQPbuIyQXC\n2aj7WYnyYl2zWcKJWiXbud1iwjj0kajJuZ80QZo7gWoC2rvdV+0XP8rMhw94zB6G\n2Aeq7h+j6UhUXrx0O27gbvjmPvPiH1fVwwUg5WFlKlpOxeQueITb+nWt0QKBgQCJ\nfGUP0pe/1XINLGR5yRPPBAZAB0D2VqJaGaCTJ5yZd/2Zt2TBtAAEpJS8RRnbyu8E\nUAsSIvXRpkuqSd2nDypqz/MqcQdcbn3jDlcDuWWIZa6tvkXUmhBJVdz9ET3c1Cf1\nkxYqDvBTFl2MbkoYHg9PNFqBjfybKJbfw6135RChEwKBgQCbEyfQc0E7S+NDITQ0\n0F4CEgmQJK/rxzoupWZbfi4TQJtJVzeZ9a93xaL80B52M26/oDu27BIN7DkcS1Px\nNs2o1ha2mEJy3ZNFPFtSYL3s6v5q3rhbock+7k35K7mLoGmdbkygl+YWEwIc3t8p\nauwdd8ycxwqKJi/g/ljye/qqOA==\n-----END PRIVATE KEY-----\n",
	"client_email": "freedsheets@backupproject-385402.iam.gserviceaccount.com",
}


export async function wrtieSpreadsheet(data, sheetName) {
	const auth = new google.auth.GoogleAuth({
		credentials:credentials ,
		scopes: 'https://www.googleapis.com/auth/spreadsheets'
	});

	const client = await auth.getClient();
	const googleSheets = google.sheets({ version: 'v4', auth: client });

	const now = new Date();
	const dataValues = [...Object.values(data), now];

	await googleSheets.spreadsheets.values.append({
		auth,
		spreadsheetId: '1RRaNkHVGccpWXeaRX9IOoajd5UW33E8bnCA2yHyqEoA',
		range: sheetName,
		valueInputOption: 'USER_ENTERED',
		resource: {
			values: [dataValues]
		}
	});
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



