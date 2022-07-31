import React from "react";
import { ProductsPage } from "./pages/ProductsPage";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { AboutPage } from "./pages/AboutPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  )
}

export default App;
