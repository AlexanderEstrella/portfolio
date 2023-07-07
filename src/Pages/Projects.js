import React from "react";
import Contact from "./Contact";
const Projects = () => {
return (
    <>
      <section id="projects">
        <h2>Projects/Coursework</h2>
        <div className="card-container">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="spacer-about"></div>
      <Contact />
    </>
  );
};

export default Projects;
