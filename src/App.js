import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pricing from "./pages/Pricing";
import AppHeader from "./pages/AppHeader";
import MainCard from "./pages/MainCard";
import ProductHero from "./pages/ProductHero";

function App() {
  return (
    <React.Fragment>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/">
            <ProductHero />
          </Route>
          <Route path="/card">
            <MainCard />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
