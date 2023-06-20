import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faHouse,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Mainnav = () => {
  return (
    <>
      <Link className="navagation" to="/Home">
        <FontAwesomeIcon icon={faHouse} className="fa-xl" />
      </Link>
      <a className="resumenav" href="/images/Resume.pdf">
        Resume
      </a>
    </>
  );
};

export default Mainnav;
