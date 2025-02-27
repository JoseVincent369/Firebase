import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import Aboutme from "./pages/aboutme/Aboutme";
import MoreInfo from "./pages/moreinfo/MoreInfo";
import Academic from "./pages/academic/Academic";
import Education from "./pages/education/Education";
import Skill from "./pages/skill/Skill"; // Import Skill component
import Projects_main from "./pages/Projects/Projects_main"; // Import the Projects_main page

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/more-info" element={<MoreInfo />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skill />} /> {/* Added Skills Route */}
        <Route path="/projects" element={<Projects_main />} />
      </Routes>
    </div>
  );
};

export default App;
