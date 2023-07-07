import React from "react";
import Contact from "./Contact";
import Data from "../Data";

const Projects = () => {
  return (
    <>
      <section id="Projects">
        <h2>Projects</h2>
        <div className="card-container">
          {Data.map((Data) => (
            <a key={Data.id} href={Data.link} className="card">
              <img src={Data.image} alt={Data.title} />
              <h3>{Data.title}</h3>
              <p>{Data.description}</p>
            </a>
          ))}
        </div>
      </section>

      <div className="spacer-about"></div>
      <Contact />
    </>
  );
};

export default Projects;
