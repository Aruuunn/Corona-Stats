import React from "react";
import NavBar from "./layout/navbar";
import "./App.css";
import Main from "./main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailView from "./detailview";
import About from './about';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route path="/about" component={About} />
        <Route path="/:country" render={(props) => <DetailView {...props} />} />
       
        <Route path="/" render={(props) => <Main {...props} />} />
      </Switch>{" "}
    </BrowserRouter>
  );
}

export default App;
