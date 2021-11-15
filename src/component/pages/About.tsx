import SectionTitle from "../../layout/SectionTitle"
import { PageContainer, SAbout, SButton, SParagraph } from "../styledComponents"

const About = () => {
  return (
    <PageContainer>
      <SAbout>
        <SectionTitle title="About" description="My Introduction" />
        <div className="aboutMe">
          <section className="image">
            <h1>IMAGE / MAYBE SAME DOG</h1>
          </section>
          <section className="description">
            <SParagraph>
              Due to my diverse background, I know myself to be a bridge
              between design and engineering, as I enjoy building elegant
              solutions to complex problems. I quest for more professional
              and personal satisfaction, which I believe joining a fast
              growing company where I can see the difference my work is making
              would satisfy. A bonus would be to find a mentor who can groom me
              for leadership roles.
            </SParagraph>
            <div className="stats">
              <div className="stat">
                <p>3+</p>
                <p>Years of experience</p>
              </div>
              <div className="stat">
                <p>14+</p>
                <p>Completed projects</p>
              </div>
              <div className="stat">
                <p>2+</p>
                <p>Companies worked</p>
              </div>
              <SButton>Download Resume</SButton>
            </div>
          </section>

        </div>
      </SAbout>
    </PageContainer>
  )
}

export default About