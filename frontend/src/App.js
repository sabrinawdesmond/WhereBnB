import { Route, Switch } from "react-router-dom";
import React from "react";
// import LoginFormPage from "./components/LoginFormModal/LoginForm";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
          <h1>Welcome to WhereBnB</h1>
        {/* <Route path="/login">
          <LoginFormPage />
        </Route> */}
        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
