import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";      
import Navbar from "./components/Navbar"; 
import Carrousel from "./pages/Carrousel";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Nosotros from "./pages/Nosotros";
import Section from "./pages/Section";
import Proyectos from "./pages/Proyectos";
import Servicios from "./pages/Servicios";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
     
      <Navbar />
      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrousel" element={<Carrousel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/section" element={<Section />} />
        <Route path="/proyectos" element={<Proyectos/>} />
        <Route path="/servicios" element={<Servicios/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
