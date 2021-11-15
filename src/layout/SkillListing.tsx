import { SSkillsListing } from "../component/styledComponents"
import { SkillType } from "../global"
import SubSkill from "./SubSkill"

const SkillListing = (props: SkillType) => {
  return (
    <SSkillsListing>
      <div className="skill">
        <div className="logo">
          <h4>{props.icon}</h4>
        </div>
        <div className="text">
          <h3 className="skillTItle">{props.title}</h3>
          <p className="experienceYears">More than {props.yearsOfExperience} years</p>
        </div>
      </div>
      <section className="subSkills">
        {props.subSkill.map((skill, i) => <SubSkill key={i} name={skill.name} logo={skill.logo} />)}
      </section>
    </SSkillsListing>
  )
}

export default SkillListing