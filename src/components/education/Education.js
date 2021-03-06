import React from 'react'
import { Element } from 'react-scroll'
import PencilDog from '../svg/PencilDog'



export const Education = () => {
    return (
        <>
        <Element name="Education">

        <div className="__education_container mt-5" >
            <PencilDog width="8rem" className="mb-5"/>
            <h2>Education</h2>
            <div className="__education_degrees mt-5">
                <div className="__education_year">
                <div className="__education_content_badge">
                    <div className="__education_badge">
                        <span>2013 - 2016 CBTIS 20 </span>
                    </div>

                    </div>
                    <span>Mechatronic Technician</span>
                </div>

                <div className="__education_year">

                <div className="__education_content_badge">

                    <div className="__education_badge _badge_blue">
                        <span >2016 - 2021 ITESRC </span>
                    </div>
                </div>
                    <span>Computer Systems Engineer</span>
                </div>

                <div className="__education_year">
                <div className="__education_content_badge ">
                    <div className="__education_badge _badge_sky">
                        <span >Online Courses </span>
                    </div>

                    </div>
                    <span>Angular - React.js - Node.js</span>
                </div>
            </div>
        </div>
        </Element>
        </>
    )
}
