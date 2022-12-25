import React from 'react'
import whatsAppImg from "../../assets/whatsapp.png"
import mailImg from "../../assets/mail.png"
import phoneImg from "../../assets/phone.png"
import SideMenu from '../../layout/SideMenu'
import SocialCard from '../common/SocialCard'

const socials = [
    {
        title: "Call Me",
        iconPath: phoneImg
    },
    {
        title: "Mail",
        iconPath: mailImg
    },
    {
        title: "WhatsApp",
        iconPath: whatsAppImg
    },
]

const ContactMeSocials = () => {
    return (
        <SideMenu title="Contact Me">
            {socials.map(social => (
                <SocialCard
                    title={social.title}
                    iconPath={social.iconPath}
                />))}
        </SideMenu>
    )
}

export default ContactMeSocials