import React from "react";
import TabMenu from "./components/Tab";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LinkProvider } from "./LinkContext/LinkProvider";
import { UserProvider } from "./UserContext/UserProvider";
import Register from "./components/Auths/Register";
import NavBar from "./components/NavBar";
import { HistoryProvider } from "./HistoryProvider/HistoryProvider";
import Login from "./components/Auths/Login";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <LinkProvider>
          <HistoryProvider>
            <NavBar />
            <Switch>
              <PrivateRoute exact path='/' component={TabMenu} />
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/register'>
                <Register />
              </Route>
            </Switch>
          </HistoryProvider>
        </LinkProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;

const Apps = styled.div`
  max-width: 96%;
  margin: 3% auto;
`;
