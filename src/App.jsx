import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import People from "./components/People/People";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";

// Pages
import Blogs from "./pages/Blogs"; // Separate Blogs page

import css from "./styles/App.module.scss";

const App = () => {
  return (
    <Router>
      <div className={`bg-primary ${css.container}`}>
        
        <Routes>
          {/* Main page route */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Work />
                <Portfolio />
                <People />
                <Footer />
              </>
            }
          />

          {/* Separate Blogs page */}
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
