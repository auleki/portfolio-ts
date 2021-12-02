import { useState } from "react"
import SectionTitle from "../../layout/SectionTitle"
import EducationTimeline from "../EducationTimeline"
import { PageContainer, SQualifications } from "../styledComponents"
import WorkTimeline from "../WorkTimeline"
import { FcGraduationCap, FcBriefcase } from "react-icons/fc";

const Qualifications = () => {
  const [viewEducation, setViewEducation] = useState<boolean>(false)

  return (
    <PageContainer>
      <SQualifications>
        <SectionTitle title="Qualifications" description="My personal journey" />
        <div className="tabs">
          <div className={viewEducation ? "active tab" : "tab"} onClick={() => setViewEducation(true)}>
            <span><FcGraduationCap /></span> <h4>Education</h4>
          </div>
          <div className={viewEducation ? "tab" : "active tab"} onClick={() => setViewEducation(false)}>
            <span><FcBriefcase /></span><h4>Work</h4>
          </div>
        </div>
        <section className="timelines">
          {/* Switch been each timeline based on tab selection */}
          {viewEducation ? <EducationTimeline /> : <WorkTimeline />}
        </section>
      </SQualifications>
    </PageContainer>
  )
}

export default Qualifications