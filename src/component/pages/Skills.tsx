import { listOfSkills } from "../../dataBank"
import { motion } from "framer-motion"
import SectionTitle from "../../layout/SectionTitle"
import SkillListing from "../../layout/SkillListing"
import { PageContainer, SSkills } from "../styledComponents"
import Qualifications from "./Qualifications"
import { pageVariants } from "../constants"

const Skills = () => {
  return (
    <PageContainer>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <SSkills>
          <SectionTitle title="Skills" description="My skill level" />
          <section className="skillsList">
            {listOfSkills.map((skill, i) => (
              <SkillListing key={i} skillIndex={i} skill={skill} />
            ))}
          </section>
        </SSkills>
        <Qualifications />
      </motion.div>
    </PageContainer>
  )
}

export default Skills