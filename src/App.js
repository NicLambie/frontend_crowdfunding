import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <h1>Mentez Logo goes here</h1>
      <Router>
        <div>
          <Nav />
        </div>
        <p>Mentez</p>This is the body text.
        <div>
          <Switch>
            <Route path="/project/:id">
              <ProjectPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
