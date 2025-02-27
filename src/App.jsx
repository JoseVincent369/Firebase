import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Aboutme from "./pages/aboutme/Aboutme";
import MoreInfo from "./pages/moreinfo/MoreInfo";
import Academic from "./pages/academic/Academic"; // Import the Academic page

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/more-info" element={<MoreInfo />} />
        <Route path="/academic" element={<Academic />} /> {/* New Route */}
      </Routes>
    </div>
  );
};

export default App;
