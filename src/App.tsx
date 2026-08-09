import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Billings from "./pages/Billings";
import Laurel from "./pages/Laurel";
import Columbus from "./pages/Columbus";
import Roundup from "./pages/Roundup";
import Forsyth from "./pages/Forsyth";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/billings" element={<Billings />} />
        <Route path="/laurel" element={<Laurel />} />
        <Route path="/columbus" element={<Columbus />} />
        <Route path="/roundup" element={<Roundup />} />
        <Route path="/forsyth" element={<Forsyth />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
