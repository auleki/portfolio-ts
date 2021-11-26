import SectionTitle from "../../layout/SectionTitle"
import Projects from "../Projects"
import { PageContainer, SProjects } from "../styledComponents"

const Portfolio = () => {
  return (
    <PageContainer>
      <SProjects>
        <SectionTitle title="Freelance Portfolio" description="Most recent work" />
        <Projects />
      </SProjects>
    </PageContainer>
  )
}

export default Portfolio