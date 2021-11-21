import SectionTitle from "../../layout/SectionTitle"
import { PageContainer, SAbout, SButton, SParagraph } from "../styledComponents"
import BriefcaseImg from "../../assets/aboutMe.jpg"

const About = () => {
  return (
    <PageContainer>
      <SAbout>
        <SectionTitle title="About Me" description="My Introduction" />
        <div className="aboutMe">
          <section className="image">
            <img src={BriefcaseImg} alt="about me" />
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
              <section className="statList">
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
              </section>
              <div className="actions">
                <SButton>Download Resume</SButton>
              </div>
            </div>
          </section>

        </div>
      </SAbout>
    </PageContainer>
  )
}

export default About