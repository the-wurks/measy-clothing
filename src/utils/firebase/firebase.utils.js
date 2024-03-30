import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithPopup,
    GoogleAuthProvider, 
    signInWithRedirect
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAUANhbW4GdRpPXleNRB_-hfzPGP4lEh04",
    authDomain: "crwn-clothing-db-8a88b.firebaseapp.com",
    projectId: "crwn-clothing-db-8a88b",
    storageBucket: "crwn-clothing-db-8a88b.appspot.com",
    messagingSenderId: "966430312240",
    appId: "1:966430312240:web:8b1e5fdfb33f60d0af2af5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); 

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
               displayName,
               email,
               createdAt 
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;

    // if user data does not exists
    // create / set the document with the data from userAuth in my collection

    // if user data exists


  }
