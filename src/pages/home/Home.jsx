import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../public/firebaseutil/firebase_main";
import sample from "../../assets/sample.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  const [headerData, setHeaderData] = useState({
    fname: "Loading...",
    lname: "",
    role: "Loading...",
    content: "Loading...",
  });

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const docRef = doc(FIRESTORE_DB, "julietPortfolio_Website", "Header_List");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setHeaderData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching header data:", error);
      }
    };

    fetchHeaderData();
  }, []);

  const homeStyle = {
    minHeight: "100vh",
    padding: "5rem 9%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8rem",
    backgroundColor: "#53aafd",
    color: "white",
  };

  const homeContentStyle = { textAlign: "left" };
  const heading1Style = { fontSize: "1.4rem", fontWeight: "400", letterSpacing: "0.1rem", color: "white" };
  const heading2Style = { fontSize: "3rem", fontWeight: "700", lineHeight: "1.3", margin: "0.5rem 0" };
  const heading3Style = { fontSize: "2.5rem", fontWeight: "600", color: "white", marginBottom: "1rem" };
  const paragraphStyle = { fontSize: "1.2rem", maxWidth: "550px", lineHeight: "1.6" };
  const socialIconsStyle = { display: "flex", gap: "1rem", marginTop: "1.5rem" };
  const iconStyle = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    border: "2px solid #ffa8e9",
    fontSize: "1.5rem",
    color: "#ffa8e9",
    transition: "0.3s ease",
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
  const imageContainerStyle = {
    width: "20vw",
    borderRadius: "50%",
    backgroundColor: "#ffa8e9",
    boxShadow: "0 0 30px #ffa8e9, 0 0 80px #ffa8e9, 0 0 120px #ffa8e9",
    padding: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "box-shadow 0.3s ease-in-out",
  };
  const imageStyle = { width: "18vw", borderRadius: "50%", cursor: "pointer", transition: "0.2s linear" };

  return (
    <section id="home" style={homeStyle}>
      <div style={homeContentStyle}>
        <p style={heading1Style}>
          WELCOME TO MY <span style={{ color: "#ffa8e9" }}>PORTFOLIO</span>
        </p>
        <h2 style={heading2Style}>
          Hello, I'm <span style={{ color: "#ffa8e9" }}>{headerData.fname} {headerData.lname}</span>
        </h2>
        <h3 style={heading3Style}>{headerData.role}</h3>
        <p style={paragraphStyle}>{headerData.content}</p>
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
