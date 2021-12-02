import { SubSkillType } from "../global"

const SubSkill = (props: SubSkillType) => {
  return (
    <div className="subSkill">
      <p className="logo"><props.logo /></p>
      <p className="name">{props.name}</p>
    </div>
  )
}

export default SubSkill