import { useContext } from "react"
import { SMobileNavbar } from "../component/styledComponents"
import { ThemeContext } from "../contexts/ThemeContext"
import { MobileNavProps } from "../global"
import MobileLinkItem from "./MobileLinkItem"
import { listOfLinks } from "../dataBank";

const MobileNavbar = (props: MobileNavProps) => {
  const { toggleTheme, toggleIcon } = useContext(ThemeContext)

  return (
    <SMobileNavbar>
      <button className="theme_switcher" onClick={toggleTheme}>
        <span>
          {toggleIcon}
        </span>
      </button>
      <ul className="navList">
        {listOfLinks.map((link, i) => <MobileLinkItem key={i} collapsePanel={props.collapsePanel} path={link.name} pathName={link.pathname} icon={link.icon} />)}
      </ul>


    </SMobileNavbar >
  )
}

export default MobileNavbar