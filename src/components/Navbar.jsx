import "../style/navbar.css";
import { House, User, Grid2X2, Mail } from "lucide-react";
import { useRef, useState } from "react";

const navigation = (e) => {
  e.preventDefault();
  nav.style.display = none;
};

const Navbar = () => {
  return (
    <>
      <div className="navbar_wrapper">
        <div className="leftSide">
          <h1>
            Tyron <span class="orange">.</span>
          </h1>
        </div>

        <div className="midSide">
          <nav>
            <ul>
              <li>
                <a href="/">
                  Acceuil <House />
                </a>
              </li>
              <li>
                <a href="/about">
                  A propos <User />
                </a>
              </li>
              <li>
                <a href="/projects">
                  Projets <Grid2X2 />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="rightSide">
          <a href="/contact">
            Contact <Mail />
          </a>
        </div>
      </div>

      <div className="burger_btn" onClick={() => navigation()}>
        <div className="top"></div>
        <div className="mid"></div>
        <div className="bot"></div>
      </div>

      <div className="nav_phone">
        <nav>
          <ul>
            <li>
              <a href="/acceuil">Acceuil</a>
            </li>
            <li>
              <a href="/about">A propos</a>
            </li>
            <li>
              <a href="/projects">Projets</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
