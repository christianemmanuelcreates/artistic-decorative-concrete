import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { ServiceAreaPage } from "./pages/ServiceAreaPage";
import { LOCATIONS, getLocation } from "./data/locations";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {LOCATIONS.map((loc) => {
            const location = getLocation(loc.slug)!;
            return (
              <Route
                key={loc.slug}
                path={`/${loc.slug}`}
                element={<ServiceAreaPage location={location} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
