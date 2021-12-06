import SectionTitle from "../../layout/SectionTitle"
import Projects from "../Projects"
import { PageContainer, SProjects } from "../styledComponents"
import { motion } from "framer-motion"
import { pageVariants } from "../constants"

const Portfolio = () => {
  return (

    <PageContainer>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <SProjects>
          <SectionTitle title="Freelance Portfolio" description="Most recent work" />
          <Projects />
        </SProjects>
      </motion.div >
    </PageContainer>
  )
}

export default Portfolio