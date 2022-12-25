import { PageContainer, SButton, SHeader, SParagraph, SSubTitle, STitle } from "../styledComponents"
import { useContext } from "react"
import { motion } from "framer-motion"
import MeImg from "../../assets/me.png"
import { ThemeContext } from "../../contexts/ThemeContext"
import { Link } from "react-router-dom"
import { shortStory } from "../../dataBank"
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { pageVariants } from "../constants"
import BlobAvatar from "../BlobAvatar"
import ProfessionalSocials from "../Header/ProfessionalSocials"
import ContactMeSocials from "../Header/ContactMeSocials"
import Bio from "../Header/Bio"
import SocialCard from "../common/SocialCard"

const Header = () => {
  return (
    <PageContainer fullscreen={true}>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <SHeader>
          <ProfessionalSocials />
          {/* <SocialCard /> */}
          <Bio />
          <ContactMeSocials />
        </SHeader>
      </motion.div>
    </PageContainer>
  )
}

export default Header