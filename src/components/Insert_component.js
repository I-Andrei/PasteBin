import React, { useState } from 'react';

let alert = ""

function InsertWord(props) {
  
  const [input_word, setInput_word] = useState("")

  function typedWord(event) {
    setInput_word(event.target.value)
  }

  function ButtonClicked() {
    if(props.insertWord.indexOf(input_word) === -1){
      alert = "You inserted the word in the dictionary!"
      props.addWord(input_word)
    } else
      alert = "The word already exists!"
    setInput_word("")
  }

  return (
    <div>
      <label>Post Name / Title:</label>
      <input type="textarea" id="textBox" onChange={typedWord} placeholder="Title"></input>
      <div><label>Write Text:</label></div>
      <input class="inputBox" type="textarea" id="textBox" onChange={typedWord} placeholder="Text Here"></input>
      <div><button type="button" onClick={()=> ButtonClicked()}> Create New Post </button></div>
      <div>{alert}</div>
    </div>
  )
}

  export default InsertWord;