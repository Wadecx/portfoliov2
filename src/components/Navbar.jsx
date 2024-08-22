import '../style/navbar.css'
import { House, User, Grid2X2, Mail } from 'lucide-react';



const Navbar = () => {
  return (
    <div className="navbar_wrapper">
        <div className="leftSide">
    <h1>Tyron <span class="orange">.</span></h1>
        </div>

        <div className="midSide">
    <nav>
        <ul>
            <li><a href="">Acceuil <House /></a></li>
            <li><a href="">A propos <User/></a></li>
            <li><a href="">Projets <Grid2X2 /></a></li>
        </ul>
    </nav>
        </div>

        <div className="rightSide">
            <a href="">Contact <Mail /></a>
        </div>
    </div>
  )
}

export default Navbar