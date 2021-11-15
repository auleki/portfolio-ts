import { SubSkillType } from "../global"

const SubSkill = (props: SubSkillType) => {
  return (
    <div className="subSkill">
      <p className="name">{props.name}</p>
      <p className="logo">{props.logo}</p>
    </div>
  )
}

export default SubSkill