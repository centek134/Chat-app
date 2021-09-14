import React from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar.js";
import Chat from "./components/Chat.js";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./utility/StateProvider.js";


const Myapp = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

function App() {
  const [{user}, ] = useStateValue();

  return (
    <Myapp>
      {!user ? (
        <Login  />
      ) : (
        <React.Fragment>
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </React.Fragment>
      )}
    </Myapp>
  );
}

export default App;
