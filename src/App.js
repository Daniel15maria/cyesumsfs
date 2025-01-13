import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/home';
import About from './pages/About';
import Experience from './pages/experience';
import Gallery from './pages/gallery';
import Program from './pages/Program';
import CustomNavbar from './components/nav';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <HashRouter>
      <CustomNavbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/program" element={<Program />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
