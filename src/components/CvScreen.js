import React from 'react'
import { Education } from './education/Education'
import { Information } from './information/Information'
import { AboutMe } from './profile/AboutMe'
import { Projects } from './projects/Projects'
import { Skills } from './skills/Skills'
import { Technologies } from './tecnologies/Technologies'
import { Navbar } from './ui/Navbar'

export const CvScreen = () => {
    return (
        <>
        <Navbar/>
        <div id="#Profile" className="__nav_background"></div>
        <main>
            <AboutMe/>
            <Education/>
            <Skills/>
            <Projects/>
            <Technologies/>
            <Information/>

        </main>
    
        </>
    )
}
