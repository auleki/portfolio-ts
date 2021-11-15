import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="nav container">
      <Link to="/" className="nav__logo">
        Emmanuel
      </Link>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list grid">
          <li className="nav__item">
            {/* <Link to="#home" class="nav__link active-link"> */}
            <Link to="#home" className="nav__link">
              <i className="uil uil-estate nav__icon" />
              Home
            </Link>
          </li>
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
        </ul>
        <i className="uil uil-times nav__close" id="nav-close" />
      </div>
      <div className="nav__btns">
        {/* switch themes  */}
        <i className="uil uil-moon change-theme" id="theme-button" />
        <div className="nav__toggle" id="nav-toggle">
          <i className="uil uil-apps" />
        </div>
      </div>
    </nav>

  )
}

export default Navbar