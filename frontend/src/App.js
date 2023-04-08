import { Route, Switch } from "react-router-dom";
import React from "react";
import Navigation from "./components/Navigation";
import ListingIndex from "./components/Listings/ListingIndex";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={ListingIndex}/>
        <ListingIndex />
      </Switch>
    </>
  );
}

export default App;
