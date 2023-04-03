import { Route, Switch } from "react-router-dom";
import React from "react";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";


function App() {
  return (
    <>
    <Switch>
      <Navigation/>
      <Route path="/login">
        <h1>Welcome to WhereBnB</h1>
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
      </Switch>
  </>
  );
}

export default App;
