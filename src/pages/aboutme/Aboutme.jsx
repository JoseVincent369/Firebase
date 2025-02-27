import React from "react";
import { useNavigate } from "react-router-dom";
import sample from "../../assets/sample.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const AboutMe = () => {
  const navigate = useNavigate();

  const aboutMeStyle = {
    minHeight: "100vh",
    padding: "8rem 9% 5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#53aafd",
    color: "white",
    textAlign: "center",
  };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8rem",
    flexWrap: "wrap",
  };

  const textContainerStyle = {
    textAlign: "left",
    maxWidth: "600px",
  };

  const heading1Style = {
    fontSize: "3rem",
    fontWeight: "700",
    lineHeight: "1.3",
  };

  const heading3Style = {
    fontSize: "2rem",
    marginBottom: "1rem",
    fontWeight: "600",
  };

  const paragraphStyle = {
    fontSize: "1.6rem",
  };

  const imageContainerStyle = {
    width: "20vw",
    borderRadius: "50%",
    backgroundColor: "#ffa8e9",
    boxShadow: "0 0 25px #ffa8e9, 0 0 80px #ffa8e9, 0 0 120px #ffa8e9",
    padding: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "box-shadow 0.3s ease-in-out",
  };

  const imageStyle = {
    width: "18vw",
    borderRadius: "50%",
    cursor: "pointer",
    transition: "0.2s linear",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "0.8rem 2rem",
    backgroundColor: "#ffa8e9",
    borderRadius: "2rem",
    fontSize: "1.2rem",
    color: "white",
    fontWeight: "600",
    border: "2px solid #53aafd",
    transition: "0.3s ease",
    cursor: "pointer",
    marginTop: "1.5rem",
    boxShadow: "0 0 15px #ffa8e9",
  };

  return (
    <div style={aboutMeStyle}>
      <div style={contentStyle}>
        <div style={imageContainerStyle}>
          <img src={sample} alt="Profile" style={imageStyle} />
        </div>
        <div style={textContainerStyle}>
          <h2 style={heading1Style}>
            About <span style={{ color: "#ffa8e9" }}>Me</span>
          </h2>
          <h3 style={heading3Style}>Graphic Designer</h3>
          <p style={paragraphStyle}>
            I am a dedicated and motivated student currently gaining hands-on
            experience. My goal is to complete my studies and apply my knowledge
            to support my vision. I strive to learn, grow, and add creative
            positivity to any organization I join.
          </p>
          <button style={buttonStyle} onClick={() => navigate("/more-info")}>
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
