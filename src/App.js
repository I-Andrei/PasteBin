import './App.css';
import React, { useState } from 'react';
import InsertWord from './components/InsertPaste';
import ListDocs from './components/PasteList';
import { NavBar } from './components/NavigationBar';
import {
  Routes, 
  Route,
} from "react-router-dom";

function App() {
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
        <Route path='/' element={<InsertWord insertWord={exportWords()} addWord={InsertNewWord} />}/>
        <Route path='/paste' element={<ListDocs />}/>
        <Route path='/paste/:ids' element={<ListDocs/>} />
      </Routes>
      </>
      </div>
  );
}

export default App;