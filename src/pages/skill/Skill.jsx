import React from "react";
import { useNavigate } from "react-router-dom";

const Skill = () => {
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

  const titleStyle = {
    alignSelf: "flex-start", // Align title to the left
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
    marginBottom: "1rem",
    width: "800px", // Match card width
  };

  const cardStyle = {
    maxWidth: "800px",
    fontSize: "1.2rem",
    background: "#fff",
    color: "#333",
    padding: "2.5rem",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(255, 168, 233, 0.4)",
    textAlign: "left",
  };

  const buttonContainer = {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "2rem",
  };

  const buttonStyle = {
    padding: "0.8rem 2rem",
    backgroundColor: "#ffa8e9",
    borderRadius: "2rem",
    fontSize: "1.2rem",
    color: "white",
    fontWeight: "600",
    border: "2px solid #53aafd",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(255, 168, 233, 0.6)",
    transition: "transform 0.2s ease-in-out",
  };

  return (
    <div style={pageStyle}>
      {/* Skill title outside the card */}
      <h2 style={titleStyle}>Skill</h2>

      <div style={cardStyle}>
        <h3 style={{ fontWeight: "bold" }}>UI/UX Skills</h3>
        <p>🎨 Design Systems</p>

        <h3 style={{ fontWeight: "bold", marginTop: "1.5rem" }}>
          Software Skill
        </h3>
        <p>🛠 Figma</p>

        <div style={buttonContainer}>
          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            onClick={() => navigate("/academic")}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
