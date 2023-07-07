import React from "react";
import Contact from "./Contact";
import Data from "./Data";
const Projects = () => {
return (
    <>
      <section id="projects">
        <h2>Projects/Coursework</h2>
        <div className="card-container">
          {Data.map((project) => (
            <div key={Data.id} className="card">
              <img src={Data.image} alt={Data.title} />
              <h3>{Data.title}</h3>
              <p>{Data.description}</p>
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
