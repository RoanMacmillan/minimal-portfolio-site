import { useState } from "react";
import Header from "./assets/Components/Header/Header";
import HomePage from "./assets/Components/HomePage/HomePage";
import Footer from "./assets/Components/Footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PortfolioIndex from "./assets/Components/PortfolioIndex/PortfolioIndex";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/index" element={<PortfolioIndex />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
