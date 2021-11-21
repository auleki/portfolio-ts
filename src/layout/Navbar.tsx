import { useContext } from "react"
import { Link } from "react-router-dom"
// import { icons } from "../component/constants"
import { SNavbar } from "../component/styledComponents"
import { ThemeContext } from "../contexts/ThemeContext"

const Navbar = () => {
  const { setDarkTheme, darkTheme } = useContext(ThemeContext)

  function toggleTheme() {
    setDarkTheme(!darkTheme)
  }

  return (
    <SNavbar className="nav container">
      <Link to="/" className="nav__logo">
        Emmanuel
      </Link>
      <div className="navMenu" id="nav-menu">
        <div className="mobileToggle">M</div>
        <ul className="navList grid">
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
          <li onClick={toggleTheme}>
            <span className="theme_switcher">
              {darkTheme ? "Sun" : "Moon"}
            </span>
          </li>
        </ul>
        <i className="uil uil-times nav__close" id="nav-close" />
      </div>
    </SNavbar >

  )
}

export default Navbar