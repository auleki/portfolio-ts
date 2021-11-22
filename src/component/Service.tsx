import { useState } from 'react'
import { ServicePropsType } from "../global"

const Service = (props: ServicePropsType) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const { icon, serviceList, role } = props.service
  const toggleServiceModal = () => setModalOpen(!modalOpen)
  return (
    <div className="service">
      <div className="icon">
        <h2>{icon}</h2>
      </div>
      <h3>{role}</h3>
      <span onClick={toggleServiceModal} className="textLink">View More</span>
      {modalOpen && (
        <ul className="serviceListing" onClick={() => setModalOpen(false)}>
          <div className="listingContainer">
            {serviceList.map((service, i) => <li key={i}>{service}</li>)}
          </div>
        </ul>
      )}

    </div>
  )
}

export default Service