import SectionTitle from "../../layout/SectionTitle"
import { PageContainer, SServices } from "../styledComponents"
import ServiceListing from "./ServiceListing"

const Services = () => {
  return (
    <PageContainer>
      <SServices>
        <SectionTitle title="Services" description="What I offer" />
        <ServiceListing />
      </SServices>
    </PageContainer>
  )
}

export default Services