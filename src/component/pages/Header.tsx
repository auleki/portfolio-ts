import { PageContainer, SButton, SHeader, SParagraph, SSubTitle, STitle } from "../styledComponents"
import { useContext } from "react"
import { motion } from "framer-motion"
import MeImg from "../../assets/me.png"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Link } from "react-router-dom"
import { shortStory } from "../../dataBank"
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { pageVariants } from "../constants"

const Header = () => {
  const { darkTheme } = useContext(ThemeContext)
  return (
    // <div>
    <PageContainer fullscreen={true}>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <SHeader>
          <ul className="socialConnects">
            <li>
              <a href="https://linkedin.com/in/aukoda" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/auleki" target="_blank" rel="noopener noreferrer">
                <BsGithub />
              </a>
            </li>
          </ul>
          <section className="devInfo">
            <STitle>Hey I'm Emmanuel</STitle>
            <SSubTitle>{darkTheme ? "Game" : "Software"} Developer by {darkTheme ? "night" : "day"}</SSubTitle>
            <SParagraph>
              {darkTheme ? shortStory.gameDev : shortStory.softwareDev}
            </SParagraph>
            <Link to="/contact">
              <SButton>Contact me</SButton>
            </Link>
          </section>
          <section className="devImage">
            <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                A dynamic link goes in svg href
                <image className="home__blob-img" x="12" y="18" xlinkHref={MeImg} />
              </g>
            </svg>
          </section>
        </SHeader>
      </motion.div>
    </PageContainer>
  )
}

export default Header