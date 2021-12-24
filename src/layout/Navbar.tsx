import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { SNavbar } from "../component/styledComponents"
import { ThemeContext } from "../contexts/ThemeContext"
import useWindowSize from "../component/hooks/useWindowSize"
import DesktopLinks from "../component/DesktopLinks"
import MobilePanel from "../layout/MobilePanel"

const Navbar = () => {
    const { toggleIcon, toggleTheme } = useContext(ThemeContext)

    const windowWidth = useWindowSize()

    return (
        <SNavbar className="nav container">
            <NavLink to="/" className="nav__logo">
                Emmanuel
            </NavLink>
            {windowWidth < 851 ? <MobilePanel /> : <DesktopLinks toggleIcon={toggleIcon} toggleTheme={toggleTheme} />}
        </SNavbar >

    )
}

export default Navbar