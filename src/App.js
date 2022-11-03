import './App.css';
import React, { useState } from 'react';
import InsertWord from './components/Insert_component';
import SearchWord from './components/Search_component';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function App() {
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

  const [words, setWords] = useState([])
  
  function exportWords () {
    return words
  }
  
  function InsertNewWord (wordFromInsertComp) {
    let arrayOfWords_copy = words
    arrayOfWords_copy.push(wordFromInsertComp)
    setWords(arrayOfWords_copy)
  }

  return (
    <div className="App">
      <div ><InsertWord insertWord={exportWords()} addWord={InsertNewWord} /></div>
      <div>""</div>
      <div ><SearchWord searchWord={exportWords()} /></div>
      </div>
  );
}

export default App;