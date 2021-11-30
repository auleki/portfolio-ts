import { useState } from "react"
import { SSkillsListing } from "../component/styledComponents"
import { SkillProps } from "../global"
import SubSkill from "./SubSkill"

const SkillListing = ({ skill, key }: SkillProps) => {
  // const [isActive, setIsActive] = useState<boolean>(false)
  const [clicked, setClicked] = useState<boolean | number | null>(false)
  // const { skill, key } = props
  const openAccordion = (index: number) => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }
  return (
    <SSkillsListing onClick={() => openAccordion(key)}>
      <div className="skill">
        <div className="logo">
          <h4>{skill.icon}</h4>
        </div>
        <div className="text">
          <h3 className="skillTItle">{skill.title}</h3>
          <p className="experienceYears">More than {skill.yearsOfExperience} years</p>
        </div>
        <span className="activeIndicator">{clicked !== key ? "+" : "-"}</span>
      </div>
      {key === clicked && (<section className="subSkills">
        {skill.subSkill.map((skill, i) => <SubSkill key={i} name={skill.name} logo={skill.logo} />)}
      </section>)}
    </SSkillsListing >
  )
}

export default SkillListing