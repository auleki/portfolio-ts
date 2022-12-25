import React from 'react'
import foxImg from "../../assets/fox.png"
import linkedInImg from "../../assets/Linkedin.png"
import SideMenu from '../../layout/SideMenu'
import SocialCard from '../common/SocialCard'

const socials = [
    {
        title: 'GitHub',
        iconPath: foxImg
    },
    {
        title: "LinkedIn",
        iconPath: linkedInImg
    },
    {
        title: "Twitter",
        iconPath: linkedInImg
    }
]

const ProfessionalSocials = () => {

    return (
        <SideMenu title="Follow Me On">
            {/* <ul className="socialConnects">
                <li>
                    <a href="https://linkedin.com/in/aukoda" target="_blank" rel="noopener noreferrer">
                        <span className="linkText">LinkedIn</span>
                        <img height="auto" width="200" src={linkedInImg} alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/auleki" target="_blank" rel="noopener noreferrer">
                        <span className="linkText">Github</span>
                        <img height="auto" width="200" src={foxImg} alt="" />
                    </a>
                </li>
            </ul> */}
            {socials.map(social => (
                <SocialCard
                    key={social.title}
                    title={social.title}
                    iconPath={social.iconPath}
                />
            ))}
        </SideMenu>
    )
}

export default ProfessionalSocials