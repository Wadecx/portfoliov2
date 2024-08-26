import { useRef } from "react";
import Navbar from "../../components/Navbar";
import "./home.css";
import { ArrowUpRight, Mail } from "lucide-react";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="introduction">
          <div className="hello">
            <div className="credentials">
              <div className="wrapper">
                <h1>Bonjour ! </h1>
                <h3>WEB / GAME</h3>
              </div>
              <h1>
                Je suis <span className="orange">Tyron Morcel</span>
              </h1>
            </div>
          </div>
          <div className="paragraphe">
            <p>
              Developpeur multi-orientées, je suis passioné d'informmatique
              depuis mon plus jeune âge.
            </p>
          </div>

          <div className="buttons">
            <a href="" className="contact">
              Contact <Mail />
            </a>
            <a href="" className="projects">
              Projets <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="image">
          <img src="./moi.png" alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
