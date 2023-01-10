import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBaVgjd87I4wSu3Rhj-TUg5tGw7Ne4HkJo",
    authDomain: "pastebin-51b71.firebaseapp.com",
    projectId: "pastebin-51b71",
    storageBucket: "pastebin-51b71.appspot.com",
    messagingSenderId: "957075870217",
    appId: "1:957075870217:web:8b740f8d21caa893675ed8",
    measurementId: "G-GY4SKQYNJZ"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export {db};
