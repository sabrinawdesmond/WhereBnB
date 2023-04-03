import { Route, Switch } from "react-router-dom";
import React from "react";
import LoginFormPage from "./components/LoginFormPage";


function App() {
  return (
    <>
    <Switch>
        <h1>Hello World</h1>
      <Route path="/login">
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
