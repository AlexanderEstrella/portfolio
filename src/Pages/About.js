import React from "react";
import Fade from "react-reveal/Fade";

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
            <Fade right>
              <img
                className="aboutimg"
                src="images/profile.jpg"
                alt="Profile"
              />
            </Fade>
          </div>
          <Fade left>
            <div className="aboutdetails">
              <p>
                Hello World! I'm Alexander Estrella, a Full-Stack Web Developer
                based out of Florida from the Dominican Republic. I first
                started to code as a hobby and I am pursuing my dream of doing
                it professionally.
              </p>
              <p>
                <span>Skill set:</span> I am always learning, and my current
                development environment consists of Linux Ubuntu, VS Code, and
                Git version control.
              </p>
              <p>
                I plan to expand my skill set by learning TypeScript and Python.
                I have a firm grip on vanilla JavaScript, and I am working with
                React every day to get a firm grip on it as well.
              </p>
              <p>
                My goal is to grow as a developer and stay updated with the
                latest technologies. I would love to work for a team that is
                passionate about their product and their employees.
              </p>
              <p>
                When I'm not writing lines of code, I enjoy family time, video
                games, the outdoors, and my dog.
              </p>
            </div>
          </Fade>
        </div>
      </section>
      <div className="spacer-about"></div>
    </>
  );
};

export default About;
