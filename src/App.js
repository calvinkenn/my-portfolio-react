import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Certificates from "./components/certificates/Certificates";

function App() {
  return (
    <React.Fragment>
      <MainNavigation />
      <Routes>
        <Route exact path="/" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/certificates" element={<Certificates />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
