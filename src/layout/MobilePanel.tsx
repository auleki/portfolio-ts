import { useState } from "react"
import { icons } from "../component/constants"
import { SButton } from "../component/styledComponents"
// import { MobileNavProps, NavLinkProps } from "../global"
import MobileNavbar from "./MobileNavbar"

const MobilePanel = () => {
    const [openPanel, setOpenPanel] = useState<boolean>(false)

    const expandPanel = () => setOpenPanel(true)

    const collapsePanel = () => setOpenPanel(false)

    return (
        <div>
            <SButton onClick={expandPanel}>
                <icons.panel />
            </SButton>
            {openPanel && <MobileNavbar collapsePanel={collapsePanel} />}
        </div>
    )
}

export default MobilePanel