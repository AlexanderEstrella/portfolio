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
          <span>Let's talk business!</span>
        </div>
        <div className="spacer-about"></div>

        <div className="about-me-box">
          <div className="aboutme-pic">
            <img className="aboutimg" src="images/profile.jpg" alt="Profile" />
          </div>

          <div className="aboutdetails">
            <p>
              Greetings! I'm Alexander Estrella, a Florida-based Full-Stack Web
              Developer originally from the Dominican Republic. What began as a
              coding hobby has blossomed into my thriving profession.
            </p>

            <p>
              <span>Skills:</span> I have a strong proficiency in JavaScript, Python, and C#.
  
            </p>

            <p>
              My aspiration is to not only evolve as a developer but also to
              contribute to your team's success. I bring a deep passion for
              crafting modern, classy websites that not only showcase your brand
              but also contribute to increased sales.
            </p>

            <p>
              Beyond coding, I cherish family time, indulge in video games, seek
              outdoor adventures, and find companionship in the presence of my
              loyal dog.
            </p>
          </div>
        </div>
      </section>
      <div className="spacer-about"></div>
    </>
  );
};

export default About;
