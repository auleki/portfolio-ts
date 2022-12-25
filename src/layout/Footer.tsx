import { NavLink } from "react-router-dom"
import { icons } from "../component/constants"
import { SFooter } from "../component/styledComponents"

const Footer = () => {
  return (
    <SFooter>
      <div className="container">
        <div className="titles">
          <h2 className="title">Giwa</h2>
          <p className="subtitle">Software Developer</p>
        </div>
        <ul className="footerLinks">
          <NavLink to="/about">
            <li>
              About
            </li>
          </NavLink>
          <NavLink to="/skills">
            <li>
              Skills
            </li>
          </NavLink>
          <NavLink to="/services">
            <li>
              Services
            </li>
          </NavLink>
          <NavLink to="/portfolio">
            <li>
              Portfolio
            </li>
          </NavLink>
          {/* <NavLink to="/contact">
            <li>
              Contact
            </li>
          </NavLink> */}
        </ul>
        <div className="socials">
          <a href="https://instagram.com/emmagiwa_" target="_blank" rel="noopener noreferrer" className="social">
            <span ><icons.instagram /></span>
          </a>
          <a href="https://twitter.com/giemm_" rel="noopener noreferrer" target="_blank" className="social">
            <span ><icons.twitter /></span>
          </a>
        </div>
      </div>
      <p className="maker">Created by Emmanuel B. Giwa</p>
    </SFooter >
  )
}

export default Footer