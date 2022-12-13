import './App.css';
import React, { useState } from 'react';
import InsertWord from './components/Insert_component';
import SearchWord from './components/Search_component';
import ListDocs from './components/List_component';
import { NavBar } from './components/NavigationBar';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Routes, 
  Route,
  Link,
} from "react-router-dom";

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
      <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<InsertWord insertWord={exportWords()} db={db} addWord={InsertNewWord} />}/>
        <Route path='/SearchDoc' element={<SearchWord searchWord={exportWords()} />}/>
        <Route path='/Doclist' element={<ListDocs db={db}/>}/>
      </Routes>
      </>
      </div>
  );
}

export default App;