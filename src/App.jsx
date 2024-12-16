import React from "react";
import { Router, Routes, Route, useLocation } from "react-router-dom"; 

import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import "./index.css";
import About from "./Components/About";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <>
      <div className=" bg-[#191a1d]  ">
        <Nav />
        <AnimatedRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
