import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext'
import { shortStory } from '../../dataBank'
import BlobAvatar from '../BlobAvatar'
import { SButton, SParagraph, SSubTitle, STitle } from '../styledComponents'

const Bio = () => {
    const { darkTheme } = useContext(ThemeContext)
    return (
        <section className="devInfo">
            <div className="flex gap-1">
                <STitle>👋🏼 Hey I'm Emmanuel </STitle>
                <BlobAvatar />
            </div>
            <SSubTitle>{darkTheme ? "Game" : "Software"} Developer by {darkTheme ? "night 🚀" : "day 🌚"}</SSubTitle>
            <SParagraph>
                {darkTheme ? shortStory.gameDev : shortStory.softwareDev}
            </SParagraph>
            <Link to="/contact">
                <SButton>Download Resume</SButton>
            </Link>
        </section>
    )
}

export default Bio