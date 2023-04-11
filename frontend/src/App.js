  import { Route, Switch } from "react-router-dom";
  import React from "react";
  import Navigation from "./components/Navigation";
  import ListingIndex from "./components/Listings/ListingIndex";
  import ListingShowPage from "./components/Listings/ListingShowPage";
  import LoginForm from "./components/LoginFormModal/LoginForm";

  function App() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={ListingIndex} />
          <Route exact path="/listings/:listingId" component={ListingShowPage} />
          <Route exact path="/login" component={LoginForm} />
        </Switch>
      </>
    );
  }

  export default App;
