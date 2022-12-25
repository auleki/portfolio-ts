import React from 'react'
import ranImg from "../../assets/fox.png"
import { SCSocialCard } from '../styledComponents'

const SocialCard = ({ title, iconPath }: { title: string, iconPath: string }) => {
    return (
        <SCSocialCard className="text-center bg-white-200">
            <h3>{title}</h3>
            <img src={iconPath} width="100" height="auto" alt="" />
        </SCSocialCard>
    )
}

export default SocialCard