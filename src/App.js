import React from "react";
import Navbar from "./Sections/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Contact from "./Sections/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div id="content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
