import { NavLink } from "react-router-dom"
import { SMobileLinkItem } from "../component/styledComponents";
import { MobileLinkItemProps } from "../global";

const MobileLinkItem = (props: MobileLinkItemProps) => {
  return (
      <SMobileLinkItem onClick={props.collapsePanel}>
          <NavLink to={props.pathName} className="nav__link">
            <span className="icon"><props.icon /></span>
            <span className="linkText">{props.pathName}</span>
          </NavLink>
      </SMobileLinkItem>
  )
}

export default MobileLinkItem