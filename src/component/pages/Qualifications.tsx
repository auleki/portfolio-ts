import SectionTitle from "../../layout/SectionTitle"
import EducationTimeline from "../EducationTimeline"
import { PageContainer, SQualifications } from "../styledComponents"
import WorkTimeline from "../WorkTimeline"

const Qualifications = () => {
  return (
    <PageContainer>
      <SQualifications>
        <SectionTitle title="Qualifications" description="My personal journey" />
        <div className="tabs">
          <div className="tab">
            <h4>Education</h4>
          </div>
          <div className="tab">
            <h4>Work</h4>
          </div>
        </div>
        <section className="timelines">
          {/* Switch been each timeline based on tab selection */}
          <EducationTimeline />
          <WorkTimeline />
        </section>
      </SQualifications>
    </PageContainer>
  )
}

export default Qualifications