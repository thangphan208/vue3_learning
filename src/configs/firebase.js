import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA63YW20iXb24Lak611lkGP4IThIHraoYU",
    authDomain: "api-vue3.firebaseapp.com",
    projectId: "api-vue3",
    storageBucket: "api-vue3.appspot.com",
    messagingSenderId: "208404754062",
    appId: "1:208404754062:web:28399f97fb2f027b9ae3df",
    measurementId: "G-9VW9TESC9E"
};


const app = initializeApp(firebaseConfig);
const fireStoreBase = getFirestore(app);

export {fireStoreBase}