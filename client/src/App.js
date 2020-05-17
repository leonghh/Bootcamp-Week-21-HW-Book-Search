import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/Homepage"
import SavedPage from "./pages/Savedpage"

import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/saved" component={SavedPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
