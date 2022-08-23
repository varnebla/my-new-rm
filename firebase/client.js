// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
  query,
  where
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC-P8vQsUIeJfkOVcsTcrCh4gHbc57Hj8Q',
  authDomain: 'my-new-rm.firebaseapp.com',
  projectId: 'my-new-rm',
  storageBucket: 'my-new-rm.appspot.com',
  messagingSenderId: '878474045052',
  appId: '1:878474045052:web:d3667bb1307c3067e84bf9',
  measurementId: 'G-EXLWJ0MWRK'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getExercises() {
  const exercisesSnapshot = await getDocs(collection(db, 'exercises'));
  const exercisesData = exercisesSnapshot.docs.map((doc) => doc.data());
  return exercisesData;
}

export async function getExerciseBySlug(slug) {
  //documents ids have same value as slugs
  const documentReference = doc(db, 'exercises', slug);
  const documentSnapshot = await getDoc(documentReference);

  if (documentSnapshot.exists()) return documentSnapshot.data();
  else return null;
}
