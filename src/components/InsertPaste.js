import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore/lite';
import { db } from "../firebase";

let titleName = ""
function InsertPaste() {
  const [inputTitle, setInputTitle] = useState("")
  const [input_word, setInput_word] = useState("")
  const [message, setMessage] = useState("")

  function typedWord(event) {
    setInput_word(event.target.value)
  }

  function typedTitle(event) {
    setInputTitle(event.target.value)
  }

  async function ButtonClicked() {
    const dbRef = collection(db, "users");
    const data = {
      title: {inputTitle},
      description: {input_word},
   };
    setMessage("Document has been added successfully")
    addDoc(dbRef, data)
    .then({})
    .catch(error => {
      console.log(error);
    })
    setInput_word("")
  }

  return (
    <div>
      <label>Post Name / Title:</label>
      <input type="textarea" id="titleBox" onChange={typedTitle} placeholder="Title"></input>
      <div><label>Write Text:</label></div>
      <input className="inputBox" type="textarea" id="textBox" onChange={typedWord} placeholder="Text Here"></input>
      <div><button type="button" onClick={()=> {ButtonClicked(); document.getElementById('textBox').value = ''; document.getElementById('titleBox').value = ''}}> Create New Post </button></div>
      <div>{message}</div>
    </div>
  )
}

  export { titleName };
  export default InsertPaste;
  