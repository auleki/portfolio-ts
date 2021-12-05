import { Link } from "react-router-dom"
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
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="socials">
          <div className="social">
            <a href="https://instagram.com/emmagiwa_" target="_blank" rel="noopener noreferrer"><icons.instagram /></a>
          </div>
          <div className="social">
            <a href="https://twitter.com/giemm_" rel="noopener noreferrer" target="_blank"><icons.twitter /></a>
          </div>
        </div>
      </div>
      <p className="maker">Created by Emmanuel B. Giwa</p>
    </SFooter >
  )
}

export default Footer