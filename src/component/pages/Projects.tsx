import SectionTitle from "../../layout/SectionTitle"
import { PageContainer, SButton, SProjects } from "../styledComponents"

const Projects = () => {
  return (
    <PageContainer>
      <SProjects>
        <SectionTitle title="Freelance Portfolio" description="Most recent work" />
        <div className="projects">
          <div className="project">
            <div className="thumbnail">IMG 1</div>
            <div className="description">
              <h2>Finpay</h2>
              <p>
                This here is the landing page for a startup fintech company.
                I really enjoyed bringing this website to life as I worked alongside
                a talented UI developer and an amazing Project Manager to deliver this.
              </p>
              <SButton>View Site</SButton>
            </div>
          </div>
          <div className="project">
            <div className="thumbnail">IMG 1</div>
            <div className="description">
              <h2>Finpay</h2>
              <p>
                This here is the landing page for a startup fintech company.
                I really enjoyed bringing this website to life as I worked alongside
                a talented UI developer and an amazing Project Manager to deliver this.
              </p>
              <SButton>View Site</SButton>
            </div>
          </div>
          <div className="project">
            <div className="thumbnail">IMG 1</div>
            <div className="description">
              <h2>Finpay</h2>
              <p>
                This here is the landing page for a startup fintech company.
                I really enjoyed bringing this website to life as I worked alongside
                a talented UI developer and an amazing Project Manager to deliver this.
              </p>
              <SButton>View Site</SButton>
            </div>
          </div>
        </div>
      </SProjects>
    </PageContainer>
  )
}

export default Projects