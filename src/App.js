// src/App.js

import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ProjectDetails from "./components/Projects/ProjectDetails";
import {
  BrowserRouter as Router,
  Route, 
  Routes, 
  Navigate 
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from '@vercel/analytics/react';

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/ContactUs";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
      <Analytics /> {/* Include the Analytics component here */}
    </Router>
  );
}

export default App;
