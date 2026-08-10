import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { GoogleAnalytics } from "./components/GoogleAnalytics";
import Home from "./pages/Home";
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const ServiceAreaPage = lazy(() =>
  import("./pages/ServiceAreaPage").then((module) => ({ default: module.ServiceAreaPage })),
);
import { LOCATIONS, getLocation } from "./data/locations";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <GoogleAnalytics />
        <Suspense fallback={<div className="min-h-screen bg-background" aria-label="Loading page" />}>
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
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
