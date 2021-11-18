import SectionTitle from "../../layout/SectionTitle"
import { PageContainer, SServices } from "../styledComponents"

const Services = () => {
  return (
    <PageContainer>
      <SServices>
        <SectionTitle title="Services" description="What I offer" />
        <section className="services">
          <div className="service">
            <h3>UI/UX Designer</h3>
            <span className="textLink">View More</span>
            <ul className="serviceListing">
              <li>I design the user interface</li>
              <li>Web page development</li>
              <li>I position your company brand</li>
            </ul>
          </div>
          <div className="service">
            <h3>Frontend Developer</h3>
            <span className="textLink">View More</span>
            <ul className="serviceListing">
              <li> Great at building intuitive user interfaces</li>
              <li> Cross browser compatible websites
              </li>
              <li>Responsive websites that can be easily viewed on mobile</li>
              <li>Well optimized scripts that run seamlessy on any browser</li>
            </ul>
          </div>
          <div className="service">
            <h3>Backend Developer</h3>
            <span className="textLink">View More</span>
            <ul className="serviceListing">
              <li>Adept at setting up optimized database interactions with web app frontend</li>
              <li>Setup GraphQL or RESTful APIs that execute needed services or speak with data store to save certain information</li>
              <li>Knowledgeable with caching strategies to make web apps run faster, even with low bandwith</li>
              <li>Skilled at creating PWAs that enable web apps function offline</li>
            </ul>
          </div>
        </section>
      </SServices>
    </PageContainer>
  )
}

export default Services