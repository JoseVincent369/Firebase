import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Aboutme from "./pages/aboutme/Aboutme";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </div>
  );
};

export default App;
