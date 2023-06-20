import React from "react";
import Contact from "./Contact";
const Projects = () => {
  return (
    <>
      <section id="projects">
        <h2>Projects/Coursework</h2>
        <div className="card-container">
          <div className="card">
            <img
              src="images/Reactapp.png"
              className="card-img-top"
              alt="Libriary"
            />
            <div className="card-body">
              <h5 className="card-title">My react app</h5>
              <p className="card-text black">
                Library of children novels using React.
              </p>
              <a
                href="https://github.com/AlexanderEstrella/my-reactapp"
                className="btn btn-primary"
              >
                Code
              </a>
              <a
                href="https://github.com/AlexanderEstrella/my-reactapp/deployments/activity_log?environment=murmuring-savannah-54543"
                className="btn btn-primary"
              >
                Deploy
              </a>
            </div>
          </div>

          {/* Add other card elements here */}
        </div>
      </section>

      <div className="spacer-about"></div>
      <Contact />
    </>
  );
};

export default Projects;
