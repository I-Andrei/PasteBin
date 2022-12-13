import React, { useState } from 'react';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

let alert = ""

function InsertWord(props) {
  
  const [input_word, setInput_word] = useState("")

  function typedWord(event) {
    setInput_word(event.target.value)
  }

  async function ButtonClicked() {
    const dbRef = collection(props.db, "users");
    const data = {input_word};
    addDoc(dbRef, data)
    .then(docRef => {
      console.log(dbRef.id)
      console.log("Document has been added successfully");
    })
    .catch(error => {
      console.log(error);
    })
    setInput_word("")
  }
  
  

  return (
    <div>
      <label>Post Name / Title:</label>
      <input type="textarea" id="textBox" onChange={typedWord} placeholder="Title"></input>
      <div><label>Write Text:</label></div>
      <input className="inputBox" type="textarea" id="textBox" onChange={typedWord} placeholder="Text Here"></input>
      <div><button type="button" onClick={()=> ButtonClicked()}> Create New Post </button></div>
      <div>{alert}</div>
    </div>
  )
}

  export default InsertWord;