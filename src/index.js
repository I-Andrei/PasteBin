import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
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

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
