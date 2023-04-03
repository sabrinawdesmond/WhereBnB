import { Route } from "react-router-dom";
import React from "react";
import LoginFormPage from "./components/LoginFormPage";


function App() {
  return (
    <>
        <h1>Hello World</h1>
      <Route path="/login">
        <LoginFormPage />
      </Route>
  </>
  );
}

export default App;
