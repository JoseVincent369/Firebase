import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    marginTop: "20px",
    position: "fixed",
    top: "0",
    left: "0",
    width: "88%",
    padding: "1rem 9%",
    backgroundColor: "#58acfc", // Updated header background color
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: "100",
  };

  const logoStyle = {
    fontSize: "1.5rem",
    color: "white",
    fontWeight: "800",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  const navStyle = {
    display: "flex",
    gap: "3.5rem",
  };

  const navLinkBaseStyle = {
    fontSize: "1.2rem",
    color: "white",
    fontWeight: "500",
    textDecoration: "none",
    borderBottom: "3px solid transparent",
    transition: "color 0.3s ease, border-bottom 0.3s ease",
  };

  const navLinkHoverStyle = {
    color: "#faacec",
    borderBottom: "3px solid #faacec",
  };

  // Handle hover with state
  const [hovered, setHovered] = useState(null);

  return (
    <header style={headerStyle}>
      <div
        style={logoStyle}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        PORTFOLIO
      </div>
      <nav style={navStyle}>
        {[
          { name: "HOME", path: "/" },
          { name: "ABOUT ME", path: "/aboutme" },
          { name: "ACADEMIC", path: "/academic" },
          { name: "PROJECTS", path: "/projects" },
          { name: "CONTACT ME", path: "/contactme" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.path}
            style={{
              ...navLinkBaseStyle,
              ...(hovered === index ? navLinkHoverStyle : {}),
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
