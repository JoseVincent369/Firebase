import React from "react";
import { useNavigate } from "react-router-dom";

const MoreInfo = () => {
  const navigate = useNavigate();

  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#53aafd",
    color: "white",
    padding: "2rem",
  };

  const textStyle = {
    maxWidth: "800px",
    textAlign: "center",
    fontSize: "1.6rem",
    background: "#fffaf5", // Warmer white
    color: "#333", // Softer contrast
    padding: "2.5rem",
    borderRadius: "15px", // More rounded
    boxShadow: "0 8px 30px rgba(255, 168, 233, 0.4)", // Softer shadow
  };

  const buttonStyle = {
    marginTop: "2rem",
    padding: "0.8rem 2rem",
    backgroundColor: "#ffa8e9",
    borderRadius: "2rem",
    fontSize: "1.2rem",
    color: "white",
    fontWeight: "600",
    border: "2px solid #53aafd",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(255, 168, 233, 0.6)", // Enhanced glow
    transition: "transform 0.2s ease-in-out",
  };

  return (
    <div style={pageStyle}>
      <div style={textStyle}>
        <h2 style={{ marginBottom: "1rem", color: "#ff69b4" }}>More About Me</h2>
        <p>
          I am Juliet Pinalas, a fourth-year student at Northern Bukidnon State
          College. I am passionate about design and always eager to learn. I
          believe in creativity, innovation, and dedication to my work.
        </p>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          onClick={() => navigate("/aboutme")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default MoreInfo;
