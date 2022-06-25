// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAX1PcuqwGSJf_NaWpCHIFXzlF5FKrOWUs',
  authDomain: 'firegram-91ae8.firebaseapp.com',
  projectId: 'firegram-91ae8',
  storageBucket: 'firegram-91ae8.appspot.com',
  messagingSenderId: '131690907175',
  appId: '1:131690907175:web:e8918c4244dd246470b002',
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, app, projectFirestore };
