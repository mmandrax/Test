import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage"
import { getDatabase } from "firebase/database";


 

    
    const app = initializeApp ({apiKey: process.env.FIREBASE_API_KEY,

    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  
   
  
    projectId: process.env.FIREBASE_PROJECT_ID,
  
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  
    appId: process.env.FIREBASE_APP_ID
  
})

 export const db = getDatabase(app)

export const storage = ref(getStorage(app), "gs://philosophers-469d2.appspot.com")
