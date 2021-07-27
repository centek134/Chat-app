import React , { useState }from 'react';
import firebase from './utility/firebase.js';
import './App.css';

function App() {
  
  const [text, setText] = useState("");


  const getInputData = (e) => {
    setText(e.target.value);
    console.log(text);
  }


  const createChat = () => {
    const chatRef = firebase.database().ref("Chat");
    const message = {
      text,
      send: true
    };
    chatRef.push(message);
  } 
  return (
    <div className="App">
      <input type = "text" onChange = {getInputData}/>
      <button onClick ={createChat}>Add to database</button>
    </div>
  );
}

export default App;
