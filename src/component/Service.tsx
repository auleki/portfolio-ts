import { useState } from 'react'
import { ServicePropsType } from "../global"
import { icons } from './constants'

const Service = (props: ServicePropsType) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const { serviceList, role } = props.service
  const toggleServiceModal = () => setModalOpen(!modalOpen)
  return (
    <div className="service">
      <div className="icon">
        <h2><props.service.icon /></h2>
      </div>
      <h3>{role}</h3>
      <p onClick={toggleServiceModal} className="textLink">
        <span className="text">View More</span>
        <span className="arrowIcon"><icons.arrow /></span>
      </p>
      {modalOpen && (
        <ul className="serviceListing" onClick={() => setModalOpen(false)}>
          <div className="listingContainer">
            {serviceList.map((service, i) => <li key={i}><span><icons.droplet /></span> {service}</li>)}
          </div>
        </ul>
      )}

    </div>
  )
}

export default Service