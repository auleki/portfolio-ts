import { SSectionTitle } from "../component/styledComponents"
import { SectionTitleProps } from "../global"

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <SSectionTitle>
      <h2>{props.title}</h2>
      <span>{props.description}</span>
    </SSectionTitle>
  )
}

export default SectionTitle