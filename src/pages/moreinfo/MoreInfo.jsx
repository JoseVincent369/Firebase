import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../public/firebaseutil/firebase_main";

const MoreInfo = () => {
  const navigate = useNavigate();
  const [moreInfo, setMoreInfo] = useState("");

  useEffect(() => {
    const fetchMoreInfo = async () => {
      try {
        const docRef = doc(FIRESTORE_DB, "julietPortfolio_Website", "AboutMe");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setMoreInfo(docSnap.data().More || "No additional information available.");
        } else {
          setMoreInfo("No additional information available.");
        }
      } catch (error) {
        console.error("Error fetching More info:", error);
        setMoreInfo("Failed to load additional information.");
      }
    };

    fetchMoreInfo();
  }, []);

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
    background: "#fffaf5",
    color: "#333",
    padding: "2.5rem",
    borderRadius: "15px",
    boxShadow: "0 8px 30px rgba(255, 168, 233, 0.4)",
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
    boxShadow: "0 0 20px rgba(255, 168, 233, 0.6)",
    transition: "transform 0.2s ease-in-out",
  };

  return (
    <div style={pageStyle}>
      <div style={textStyle}>
        <h2 style={{ marginBottom: "1rem", color: "#ff69b4" }}>More About Me</h2>
        <p>{moreInfo}</p>
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