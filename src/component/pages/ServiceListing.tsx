import { listOfServices } from "../../dataBank"
import Service from "../Service"

const ServiceListing = () => {
  return (
    <section className="services">
      {listOfServices.map((service, i) => <Service service={service} />)}
    </section>
  )
}

export default ServiceListing