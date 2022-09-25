// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzQyucx8-_wV51MJsEdO6VoxSkXTEfbwc",
    authDomain: "econvert-1b246.firebaseapp.com",
    projectId: "econvert-1b246",
    storageBucket: "econvert-1b246.appspot.com",
    messagingSenderId: "598782579856",
    appId: "1:598782579856:web:b2ded42527d1ca24d27415",
    measurementId: "G-ZPFCH5VL4L"
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig);
export const analytics = getAnalytics(db);