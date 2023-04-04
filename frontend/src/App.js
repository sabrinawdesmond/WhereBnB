import { Route, Switch } from "react-router-dom";
import React from "react";
import SignupForm from './components/SignupFormModal'
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/signup">
          <SignupForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;
