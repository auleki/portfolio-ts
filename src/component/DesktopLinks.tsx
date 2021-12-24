import { NavLink } from "react-router-dom"
import { NavLinkProps } from "../global"

const DesktopLinks = (props: NavLinkProps) => {
    return (
        <div className="navMenu" id="nav-menu">
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
                    <NavLink to="/portfolio" className="nav__link">
                        <i className="uil uil-scenery nav__icon" />
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/services" className="nav__link">
                        <i className="uil uil-briefcase nav__icon" />
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="nav__link">
                        <i className="uil uil-message nav__icon" />
                        Contact Me
                    </NavLink>
                </li>
                <li className="theme_switcher" onClick={props.toggleTheme}>
                    <span>
                        {props.toggleIcon}
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default DesktopLinks