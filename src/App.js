import React from "react";

import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import New from "./components/New";
import Topstories from "./components/Topstories";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Topstories} />
      <Route path="/new" exact component={New} />
    </BrowserRouter>
  );
}

export default App;
