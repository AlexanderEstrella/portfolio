import React from "react";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import Projects from "./Pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
