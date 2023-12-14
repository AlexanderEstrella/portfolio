import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { SiCsharp, SiJavascript, SiPython } from "react-icons/si";
import "../App.css";
import { useSpring, animated } from "react-spring";
const Home = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    shiftName();
  }, []);

  const props = useSpring({
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(-5px)" },
    config: {
      duration: 4000,
      reset: false,
      reverse: false,
    },
    loop: true,
  });

  function shiftName() {
    const nameElement = document.getElementsByClassName("subheading")[0];
    let emptyName = "";
    const string = "I'm Alexander";

    for (let i = 0; i < string.length; i++) {
      time(i);
    }

    function time(i) {
      setTimeout(() => {
        emptyName += string[i];
        setName(emptyName);
      }, 300 * i); // Multiply the delay by 'i' to increment the delay for each iteration
    }
  }

  return (
    <section id="home">
      <div className="Welcomepage">
        <div className="h">H</div>
        <div className="e">e</div>
        <div className="l">l</div>
        <div className="l">l</div>
        <div className="o">o!</div>
      </div>
      <span className="subheading">{name}</span>
      <h3 className="subsubheading">a Fullstack developer</h3>
      <p className="webpassion"> I have a passion for the web</p>
      <p className="shortdes">
        I'm a fullstack engineer with a drive for innovation and learning in
        technology.
        <br></br>I love to design front-ends and build backend applications for
        the web.
      </p>
      <div className="Programminglangs">
        <animated.div className="iconstyle" style={props}>
          <SiJavascript />
        </animated.div>
        <animated.div className="iconstyle" style={props}>
          <SiPython />
        </animated.div>
        <animated.div className="iconstyle" style={props}>
          <SiCsharp />
        </animated.div>
      </div>
      <ul className="socials">
        <li>
          <a
            className="socialslink"
            href="https://github.com/AlexanderEstrella"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            className="socialslink"
            href="https://www.linkedin.com/in/alexanderjestrella/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            className="socialslink"
            href="https://www.facebook.com/alexander.estrellamartinez"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Home;
