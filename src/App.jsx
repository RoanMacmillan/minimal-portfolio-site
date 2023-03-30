import { useState } from "react";
import Header from "./assets/Components/Header/Header";
import HomePage from "./assets/Components/HomePage/HomePage";
import Footer from "./assets/Components/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PortfolioIndex from "./assets/Components/PortfolioIndex/PortfolioIndex";
import PortfolioDetail from "./assets/Components/PortfolioDetail/PortfolioDetail";
import portfolioItemsData from "../portfolioItemsData.json";
import ContactPage from "./assets/Components/ContactPage/ContactPage";
import ScrollToTop from "./assets/Components/ScrollToTop/ScrollToTop";
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/index" element={<PortfolioIndex />} />
          <Route path='/portfolio/:id' element={<PortfolioDetail portfolioItemsData={portfolioItemsData} />} />
          <Route path="/contact-me" element={<ContactPage />} />
        </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
