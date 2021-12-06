import SectionTitle from "../../layout/SectionTitle"
import { PageContainer, SServices } from "../styledComponents"
import ServiceListing from "./ServiceListing"
import { motion } from "framer-motion"
import { pageVariants } from "../constants"


const Services = () => {
  return (
    <PageContainer fullscreen={true} >
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <SectionTitle title="Services" description="What I offer" />
        <SServices>
          <ServiceListing />
        </SServices>
      </motion.div>
    </PageContainer>
  )
}

export default Services