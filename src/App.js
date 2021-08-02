import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar.js';
import Chat from './components/Chat.js';
import {Switch, Route} from 'react-router-dom';
//import firebaseApp from './utility/firebase.js';


  const Myapp = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
  `;

function App() {

  return (
    <Myapp>
      <Sidebar/>
      <Switch>
        <Route path="/room/:roomId">
      <Chat/>
        </Route>
        <Route path = "/">
          <Chat/>
        </Route>
      </Switch>
    </Myapp>
  );
}

export default App;
