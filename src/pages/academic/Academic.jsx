import React from "react";
import { useNavigate } from "react-router-dom";

const Academic = () => {
  const navigate = useNavigate();

  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "linear-gradient(to bottom, #53aafd, #6db3f2)", // Blue gradient
    padding: "5rem",
    textAlign: "center",
    color: "white",
    position: "relative",
  };

  const headingStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
  };

  const pinkText = {
    color: "#ff69b4", // Soft pink highlight
  };

  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "3rem",
  };

  const cardStyle = {
    backgroundColor: "#0d0d98", // Deep blue
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 0 30px rgba(13, 13, 152, 0.8)", // Blue glow
    textAlign: "center",
    color: "white",
    width: "200px",
    transition: "transform 0.3s ease-in-out",
  };

  const buttonStyle = {
    marginTop: "1rem",
    padding: "0.6rem 1.5rem",
    backgroundColor: "#ffa8e9",
    borderRadius: "2rem",
    fontSize: "1rem",
    color: "white",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 0 20px rgba(255, 168, 233, 0.6)", // Pink glow
    transition: "transform 0.2s ease-in-out",
  };

  const handleReadMoreClick = (item) => {
    if (item === "Education") {
      navigate("/education");
    } else if (item === "Skills") {
      navigate("/skills"); // Navigate to Skills page
    } else if (item === "Experience") {
      navigate("/experience"); // Add this if you have an Experience page
    }
  };

  return (
    <div style={pageStyle}>
      <h2 style={headingStyle}>
        <span style={pinkText}>My</span> Academic
      </h2>
      <div style={cardContainer}>
        {["Education", "Skills", "Experience"].map((item, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3>{item}</h3>
            <button
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              onClick={() => handleReadMoreClick(item)}
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academic;
