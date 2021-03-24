import React from 'react';
import Logo from '../svg/Logo';

import {animateScroll as scroll, Link} from 'react-scroll';
// import { NavLink } from 'react-router-dom';
export const Navbar = ({toggle}) => {


    const toggleHome =() =>{
        scroll.scrollToTop();
    }
    return (
        <div id="container">

        <nav>
            <ul>
            <li>    <Logo className="mr-5" width="1.6rem"  onClick={toggleHome} />   </li>


               <li>
               <Link  
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                delay={400}   isDynamic={true}  offset={-10}  to="Education">Education</Link>
                </li> 
                <li> 
                <Link  
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={400}   isDynamic={true}  to="Technologies">Technologies</Link>
                    
                </li>
                <li> 
                <Link   smooth={true}
      hashSpy={true}
      duration={500}
      delay={400}   isDynamic={true}  offset={-60} to="Skills">Skills</Link>
                </li>
                <li> 
                <Link   smooth={true}
      hashSpy={true}
      duration={500}
      delay={400}  isDynamic={true} offset={-60} to="Projects">Projects</Link>
                </li>

                <li>
                    <i onClick={toggle} className="fas fa-bars __nav_mobile_icon"></i>
                </li>
            </ul>
        </nav>
        </div>
    )
}
