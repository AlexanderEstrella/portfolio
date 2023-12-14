import React from "react";

const About = () => {
  return (
    <>
      <a className="arrow" href="#aboutme">
        <i className="bi bi-arrow-down-circle-fill"></i>
      </a>

      <section id="aboutme">
        <div className="about-header" id="aboutmedes">
          <h2>About Me</h2>
          <span>Let's jump right in!</span>
        </div>
        <div className="spacer-about"></div>

        <div className="about-me-box">
          <div className="aboutme-pic">
            <img className="aboutimg" src="images/profile.jpg" alt="Profile" />
          </div>

          <div className="aboutdetails">
            <p>
              Hello World! I'm Alexander Estrella, a Full-Stack Web Developer
              based in Florida, originally from the Dominican Republic. I
              kick-started my coding journey as a hobby, and now I'm turning
              that passion into a profession.
            </p>

            <p>
              <span>Skill set:</span> I'm constantly learning, and my toolkit
              includes Atom, VS Code, and Git for version control.
            </p>

            <p>
              I'm on a mission to expand my expertise by diving into TypeScript
              and Python. With a solid foundation in vanilla JavaScript, I'm
              immersed in React to deepen my understanding.
            </p>

            <p>
              My ambition is to evolve as a developer, staying abreast of the
              latest technologies. I aspire to contribute to a team that shares
              a profound enthusiasm for their product and team members.
            </p>

            <p>
              Outside the code realm, I cherish family time, video games,
              outdoor adventures, and the companionship of my dog.
            </p>
          </div>
        </div>
      </section>
      <div className="spacer-about"></div>
    </>
  );
};

export default About;
