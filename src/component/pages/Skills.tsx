import { listOfSkills } from "../../dataBank"
import SectionTitle from "../../layout/SectionTitle"
import SkillListing from "../../layout/SkillListing"
import { PageContainer, SSkills } from "../styledComponents"
import Qualifications from "./Qualifications"

const Skills = () => {
  return (
    <PageContainer>
      <SSkills>
        <SectionTitle title="Skills" description="My skill level" />
        <section className="skillsList">
          {listOfSkills.map((skill, i) => (
            <SkillListing key={i} skill={skill} />
          ))}
        </section>
      </SSkills>
      <Qualifications />
    </PageContainer>
  )
}

export default Skills