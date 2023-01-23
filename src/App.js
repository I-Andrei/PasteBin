import './App.css';
import React from 'react';
import InsertPaste from './components/InsertPaste';
import ListDocs from './components/PasteList';
import { NavBar } from './components/NavigationBar';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<InsertPaste />}/>
        <Route path='/paste' element={<ListDocs />}/>
        <Route path='/paste/:ids' element={<ListDocs/>} />
      </Routes>
      </>
      </div>
  );
}

export default App;