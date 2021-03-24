import React from 'react';
import  Avatar from '../../assets/pp.jpeg';
import {ReactComponent as Bozco} from '../../assets/bozco.svg';
import Robot from '../svg/Robot';
import Github from '../svg/Github';
import Linkedin from '../svg/LinkedIn';
import Instagram from '../svg/Instagram';
import Twitter from '../svg/Twitter';


export const AboutMe = () => {
    return (
        < >
       
        <div className="__profile_container ">
            <div>
                <Bozco  title="bozco" width="3rem"  className="__profile_svg_icons"/>
                <img src={Avatar} alt="Enrique Berrones" className="__profile_avatar_photo"/>
                <Robot title="robot" width="3rem" className="__profile_svg_icons"/>
            </div>
            <h2>Enrique Berrones</h2>
            <div className="__profile_social">
                <a href="https://github.com/EnriqueMB3" ><Github width="1rem"/></a>
                <a href="https://github.com/EnriqueMB3" ><Linkedin width="1rem"/></a>
                <a href="https://github.com/EnriqueMB3" ><Twitter width="1rem"/></a>
                <a href="https://github.com/EnriqueMB3" ><Instagram width="1rem"/></a>



                
            </div>
            <h5 className="mt-1 mb-1">About me</h5>
            <p className="mb-5">
            Graduate from Instituto Tecnológico de Estudios Superiores de la Región Carbonífera as system engineer.
            Also I’m developing systems as a freelancer. Self-taught at heart; I like to learn new things in topics
            related to graphic design of digital type and new technologies focused on the career that I study. My
            hobbies range from drawing cartoons to writing stories and tales.
            </p>

              
              <a className="btn btn-red " href="../../assets/CV.pdf" download="CV_Enrique_Berrones_2021.pdf"  >Download CV <i className="fas fa-download"></i></a>
                

        </div>
        </>
    )
}
