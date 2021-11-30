import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
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
      <NavLink to="/" className="nav__logo">
        Emmanuel
      </NavLink>
      <div className="navMenu" id="nav-menu">
        <div className="mobileToggle">M</div>
        <ul className="navList grid">
          <li>
            <NavLink to="/about" className="nav__link">
              <i className="uil uil-user nav__icon" />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className="nav__link">
              <i className="uil uil-file-alt nav__icon" />
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className="nav__link">
              <i className="uil uil-briefcase nav__icon" />
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="nav__link">
              <i className="uil uil-scenery nav__icon" />
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav__link">
              <i className="uil uil-message nav__icon" />
              Contact Me
            </NavLink>
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