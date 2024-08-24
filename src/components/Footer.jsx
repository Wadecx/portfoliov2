import { Linkedin, Github } from 'lucide-react';

import "../style/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="leftSide">
        <h3>Statistique de code</h3>
        <a href="https://github.com/Wadecx" target="_blank">
          Visiter
        </a>
      </div>

      <div className="right_side">
        <ul>
            <li><a href="">Mon Github <Github /></a></li>
            <li><a href="">Mon LinkedIn <Linkedin /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
