import { listOfSkills } from "../../dataBank"
import SectionTitle from "../../layout/SectionTitle"
import SkillListing from "../../layout/SkillListing"
import { PageContainer, SSkills } from "../styledComponents"

const Skills = () => {
  return (
    <PageContainer>
      <SSkills>
        <SectionTitle title="Skills" description="My skill level" />
        <section className="skillsList">
          {listOfSkills.map((skill, i) => (
            <SkillListing key={i} icon={skill.icon} title={skill.title} subSkill={skill.subSkill} yearsOfExperience={skill.yearsOfExperience} />
          ))}
        </section>
      </SSkills>
    </PageContainer>
  )
}

export default Skills