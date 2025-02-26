import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="aboutme-container" style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <span style={styles.logo}>Portfolio</span>
        <ul style={styles.navLinks}>
          <li><a href="/">HOME</a></li>
          <li>
            <button onClick={() => navigate("/aboutme")} style={styles.navButton}>ABOUT ME</button>
          </li>
          <li><a href="/academic">ACADEMIC</a></li>
          <li><a href="/projects">PROJECTS</a></li>
          <li>
            <button onClick={() => navigate("/contactme")} style={styles.navButton}>CONTACT ME</button>
          </li>
        </ul>
      </nav>

      {/* About Me Content */}
      <div style={styles.content}>
        <div>
          <h2 style={styles.heading}>About <span style={styles.highlight}>Me</span></h2>
          <h4 style={styles.subheading}>Graphic Designer</h4>
          <p style={styles.description}>
            I am a dedicated and motivated student currently gaining hands-on experience through on-the-job training (OJT). 
            My goal is to complete my studies and use my skills and knowledge to support my family, who have been my greatest 
            source of strength and inspiration.
          </p>
          <button style={styles.button}>See more</button>
        </div>
        <img src="/images/avatar.png" alt="Profile" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "#6ea8fe",
    minHeight: "100vh",
    padding: "20px",
    textAlign: "center",
    color: "white",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  },
  navButton: {
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
    paddingTop: "50px",
  },
  heading: {
    fontSize: "28px",
  },
  highlight: {
    color: "#ffb6c1",
  },
  subheading: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  description: {
    maxWidth: "500px",
    marginBottom: "20px",
  },
  button: {
    background: "#ffb6c1",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
  },
  image: {
    width: "200px",
    borderRadius: "50%",
    boxShadow: "0px 0px 20px 5px pink",
  },
};

export default AboutMe;
