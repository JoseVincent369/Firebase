import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../public/firebaseutil/firebase_main";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const userId = "ec22ef"; // Hardcoded user ID for now
        const docRef = doc(FIRESTORE_DB, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          if (userData.portfolio) {
            const portfolioRef = doc(FIRESTORE_DB, userData.portfolio, "Project");
            const portfolioSnap = await getDoc(portfolioRef);

            if (portfolioSnap.exists()) {
              const projectData = portfolioSnap.data();
              setProjects(projectData.projects || []);
              setDescriptions(Array.isArray(projectData.description) ? projectData.description : []);
              setImages(Array.isArray(projectData.image) ? projectData.image : []);
            } else {
              console.log("No Project document found in portfolio.");
            }
          } else {
            console.log("No portfolio linked in user data.");
          }
        } else {
          console.log("User document does not exist.");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">My Projects</h2>

      <div className="d-flex flex-nowrap overflow-auto pb-3" 
           style={{ gap: "1.5rem", scrollbarWidth: "thin", marginRight: "1rem" }}>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div 
              key={index}
              className="flex-shrink-0"
              style={{ width: "300px", marginRight: "1rem", scrollSnapAlign: "start" }}
            >
              <div 
                className="card h-100 shadow-lg border-0 project-card"
                style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
              >
                <img 
                  src={images[index] || 'https://via.placeholder.com/400x250'} 
                  alt={project || "No title"} 
                  className="card-img-top img-fluid"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title mb-2">{project || "Untitled"}</h3>
                  <p className="card-text flex-grow-1">
                    {descriptions[index] || "No description available"}
                  </p>
                  <Link 
                    to={`/projects/${index}`} 
                    className="btn btn-primary project-btn mt-3"
                    style={{ backgroundColor: '#2563eb', borderColor: '#2563eb' }}
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
