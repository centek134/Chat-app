import React from 'react';
import styled from 'styled-components';
import './App.css';
import Sidebar from './components/Sidebar.js';
import Chat from './components/Chat.js';
//import firebaseApp from './utility/firebase.js';


  const Myapp = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
  `;

function App() {

  return (
    <Myapp>
      <Sidebar>

      </Sidebar>
      <Chat>
        
      </Chat>
    </Myapp>
  );
}

export default App;
