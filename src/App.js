import './App.css';
import React, { useState } from 'react';
import InsertWord from './components/Insert';
import ListDocs from './components/List';
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
        <Route path='/Doclist' element={<ListDocs />}/>
        <Route path='/Doclist/:idList' element={<ListDocs/>} />
      </Routes>
      </>
      </div>
  );
}

export default App;