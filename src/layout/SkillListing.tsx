import { useState } from "react"
import { SSkillsListing } from "../component/styledComponents"

import { SkillProps } from "../global"
import SubSkill from "./SubSkill"

const SkillListing = ({ skill, skillIndex }: SkillProps) => {
  // const [isActive, setIsActive] = useState<boolean>(false)
  const [clicked, setClicked] = useState<boolean | number | null>(false)


  //! To have an accordion control that makes sure only one accordion is open at a time
  //? if one is clicked on it closes the others. Think about that 

  const openAccordion = (index: number) => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }
  return (
    <SSkillsListing onClick={() => openAccordion(skillIndex)}>
      <div className="skill">
        <div className="logo">
          {/* <h4>{skill.icon}</h4> */}
          <h4><skill.icon /></h4>

        </div>
        <div className="text">
          <h3 className="skillTItle">{skill.title}</h3>
          <p className="experienceYears">More than {skill.yearsOfExperience} years</p>
        </div>
        <span className="activeIndicator">{clicked !== skillIndex ? "+" : "-"}</span>
      </div>
      {skillIndex === clicked && (<section className="subSkills">
        {skill.subSkill.map((skill, i) => <SubSkill key={i} name={skill.name} logo={skill.logo} />)}
      </section>)}
    </SSkillsListing >
  )
}

export default SkillListing