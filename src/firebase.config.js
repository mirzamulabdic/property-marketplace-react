// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCp0_d78QmPRgMP7iOUDLdS4cS_-JqKAyE',
  authDomain: 'house-marketplace-app-1498a.firebaseapp.com',
  projectId: 'house-marketplace-app-1498a',
  storageBucket: 'house-marketplace-app-1498a.appspot.com',
  messagingSenderId: '455173711889',
  appId: '1:455173711889:web:22938082f733c0af0129b0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
