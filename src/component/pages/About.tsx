import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import SectionTitle from "../../layout/SectionTitle"
import { PageContainer, SAbout, SButton, SParagraph } from "../styledComponents"
import { pageVariants } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  const { darkTheme } = useContext(ThemeContext)
  const AboutMeImg = "https://res.cloudinary.com/dyj6pqx6d/image/upload/v1615938112/portfolio/wlq63cWy_400x400_nxotw0.jpg"
  return (
    <PageContainer fullscreen={true}>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <SAbout darkTheme={darkTheme}>
          <SectionTitle title="About Me" description="My Introduction" />
          <div className="aboutMe">
            <section className="image">
              <img src={AboutMeImg} alt="about me" />
            </section>
            <section className="description">
              <SParagraph>
                Due to my diverse background, I know myself to be a bridge
                between design and engineering, as I enjoy building elegant
                solutions to complex problems.
              </SParagraph>
              <br />
              <SParagraph>
                I quest for more professional
                and personal satisfaction, which I believe joining a fast
                growing company where I can see the difference my work is making
                would satisfy.A bonus would be to find a mentor who can groom me
                for leadership and executive roles.
              </SParagraph>
              <div className="stats">
                <section className="statList">
                  <div className="stat">
                    <p>3+</p>
                    <p>Years of experience</p>
                  </div>
                  <div className="stat">
                    <p>14+</p>
                    <p>Completed projects</p>
                  </div>
                  <div className="stat">
                    <p>2+</p>
                    <p>Companies worked</p>
                  </div>
                </section>
                <div className="actions">
                  <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1s1ks_tRv1gs49MuLaSqhyiP8cPLLo06k/edit?usp=sharing&ouid=115103245112290251423&rtpof=true&sd=true">
                    <SButton>Resume</SButton>
                  </a>
                </div>
              </div>
            </section>

          </div>
        </SAbout>
      </motion.div>
    </PageContainer>
  )
}

export default About