import { Link } from "react-router-dom"
// import { icons } from "../component/constants"
import { SNavbar } from "../component/styledComponents"

const Navbar = () => {
  return (
    <SNavbar className="nav container">
      <Link to="/" className="nav__logo">
        Emmanuel
      </Link>
      <div className="navMenu" id="nav-menu">
        <ul className="navList grid">
          {/* <li className="nav__item">          
            <Link to="#home" className="nav__link">
              <i className="uil uil-estate nav__icon" />
              Home
            </Link>
          </li> */}
          <li>
            <Link to="/about" className="nav__link">
              <i className="uil uil-user nav__icon" />
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="nav__link">
              <i className="uil uil-file-alt nav__icon" />
              Skills
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav__link">
              <i className="uil uil-briefcase nav__icon" />
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav__link">
              <i className="uil uil-scenery nav__icon" />
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav__link">
              <i className="uil uil-message nav__icon" />
              Contact Me
            </Link>
          </li>
          <li>
            <span className="theme_switcher">
              Moon
            </span>
          </li>
        </ul>
        <i className="uil uil-times nav__close" id="nav-close" />
      </div>
    </SNavbar >

  )
}

export default Navbar