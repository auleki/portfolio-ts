import SectionTitle from "../../layout/SectionTitle"
import { PageContainer, SServices } from "../styledComponents"
import ServiceListing from "./ServiceListing"

const Services = () => {
  return (
    <PageContainer fullscreen={true} >
      <SectionTitle title="Services" description="What I offer" />
      <SServices>
        <ServiceListing />
      </SServices>
    </PageContainer>
  )
}

export default Services