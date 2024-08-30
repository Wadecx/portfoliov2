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
            <li><a href="https://github.com/Wadecx" target='_blank'>Mon Github <Github /></a></li>
            <li><a href="https://www.linkedin.com/in/tyron-morcel-7a31a2300/"  target='_blank'>Mon LinkedIn <Linkedin /></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
