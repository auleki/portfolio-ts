import React from 'react'
import whatsAppImg from "../assets/whatsapp.png"
import mailImg from "../assets/mail.png"
import phoneImg from "../assets/phone.png"
import { SCSideMenu } from '../component/styledComponents'

const SideMenu = ({ children, title = "N/A" }: { children: React.ReactNode, title: string }) => {
    return (
        <SCSideMenu>
            <h3 className="title">{title}</h3>
            {children}
        </SCSideMenu>
    )
}

export default SideMenu