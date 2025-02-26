import React from "react";
import sample from "../../assets/sample.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const homeStyle = {
    minHeight: "100vh",
    padding: "5rem 9% 5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8rem",
    backgroundColor: "#53aafd",
    color: "white",
  };

  const homeContentStyle = {
    textAlign: "left",
  };

  const heading1Style = {
    fontSize: "3rem",
    fontWeight: "700",
    lineHeight: "1.3",
  };

  const heading3Style = {
    fontSize: "3rem",
    marginBottom: "1rem",
    fontWeight: "700",
  };

  const paragraphStyle = {
    fontSize: "1.6rem",
  };

const imageContainerStyle = {
  width: "20vw",
  borderRadius: "49%", // Soft rounded edges instead of a circle
  backgroundColor: "#ffa8e9", // Cozy pink background color
  boxShadow: "0 0 25px #ffa8e9, 0 0 80px #ffa8e9, 0 0 120px #ffa8e9",
  padding: "1.5rem", // Slightly increased padding for a balanced look
  display: "flex",
  justifyContent: "center",
  alignItems: "center", // Soft glowing effect
  transition: "box-shadow 0.3s ease-in-out", // Smooth hover transition
};



  const imageStyle = {
    width: "20vw",
    borderRadius: "49%",
    boxShadow: "0 0 25px #ffa8e9, 0 0 80px #ffa8e9, 0 0 120px #ffa8e9",
    cursor: "pointer",
    transition: "0.2s linear",
  };

  const socialIconsStyle = {
    display: "flex",
    gap: "2rem",
    marginTop: "2rem",
  };

  const iconStyle = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "4rem",
    height: "4rem",
    backgroundColor: "transparent",
    border: "0.2rem solid #ffa8e9",
    fontSize: "2rem",
    borderRadius: "50%",
    margin: "3rem 1.5rem 3rem 0",
    transition: "0.3s ease",
    color: "#ffa8e9",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "1rem 2.8rem",
    backgroundColor: "#ffa8e9",
    borderRadius: "4rem",
    fontSize: "1.6rem",
    color: "white",
    fontWeight: "600",
    border: "2px solid #53aafd",
    transition: "0.3s ease",
    cursor: "pointer",
    marginTop: "2rem",
  };

  return (
    <section id="home" style={homeStyle}>
      <div style={homeContentStyle}>
        <h1 style={heading1Style}>
          WELCOME TO MY <span style={{ color: "#ffa8e9" }}>PORTFOLIO</span>
        </h1>
        <h2 style={heading3Style}>
          Hello, I'm <span style={{ color: "#ffa8e9" }}>Juliet Pinalas</span>
        </h2>
        <h3 style={heading3Style}>Graphic Designer</h3>
        <p style={paragraphStyle}>
          I'm a passionate Intern UI/UX designer who loves creating intuitive
          and beautiful digital experiences. I focus on making designs not just
          look great but feel great.
        </p>
        <div style={socialIconsStyle}>
          <a href="#" style={iconStyle}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" style={iconStyle}>
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" style={iconStyle}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" style={iconStyle}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <a href="/path-to-your-cv.pdf" download style={buttonStyle}>
          Download CV
        </a>
      </div>
      <div style={imageContainerStyle}>
        <img src={sample} alt="Juliet Pinalas" style={imageStyle} />
      </div>
    </section>
  );
};

export default Home;
