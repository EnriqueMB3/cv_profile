import React from 'react'
import useModal from '../hooks/useModal'
import { Education } from './education/Education'
import { Information } from './information/Information'
import { AboutMe } from './profile/AboutMe'
import { Projects } from './projects/Projects'
import { Skills } from './skills/Skills'
import { Technologies } from './tecnologies/Technologies'
import { Navbar } from './ui/Navbar'
import { Sidebar } from './ui/Sidebar'

export const CvScreen = () => {

    
    const {isShowing, toggle } = useModal();

    return (
        <>
        <Sidebar isShowing={isShowing} toggle={toggle} />
        <Navbar toggle={toggle}/>
        <div  className="__nav_background"></div>
        <main>

            
            <AboutMe />
            <Education/>
            <Skills />
            <Projects />
            <Technologies />
            <Information />
        
        </main>

       
        </>
    )
}
