import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faHouse,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MainNav from "./Mainnav";

const Navbar = () => {
  return (
    <>
      <MainNav />
      <div className="primaryHeader">
        <div className="nav">
          <ul>
            <li>
              <Link className="navas" to="/Home">
                <FontAwesomeIcon icon={faHouse} className="fa-xl" />
              </Link>
            </li>
            <li>
              <Link to="/About">
                <FontAwesomeIcon icon={faPerson} className="fa-xl" />
              </Link>
            </li>
            <li>
              <Link to="/Projects">
                <FontAwesomeIcon icon={faEarthAmericas} className="fa-xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
