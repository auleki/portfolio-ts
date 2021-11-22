import { useState } from 'react'
import { ServicePropsType } from "../global"

const Service = (props: ServicePropsType) => {
  const { icon, serviceList, role } = props.service
  return (
    <div className="service">
      <div className="icon">
        <h2>{icon}</h2>
      </div>
      <h3>{role}</h3>
      <span className="textLink">View More</span>
      <ul className="serviceListing">
        {serviceList.map((service, i) => <li key={i}>{service}</li>)}
      </ul>
    </div>
  )
}

export default Service