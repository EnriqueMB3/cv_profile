import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import Logo from '../svg/Logo';


export const Sidebar = ({isShowing,  toggle}) => {



    // const toggleMenu = ()=> {
        
    // }

    const style = {
        // display: isShowing? "grid" : "none",
        top: isShowing?  '0':'-100%',
        opacity: isShowing? '100%' : '0',
      };
      
    const toggleHome =() =>{
        scroll.scrollToTop();
        toggle();
    }
    return (
        <div style={style} className="__sidebar_content"  >
           <i className="fas fa-times" onClick={toggle} ></i>
           <div className="__sidebar_wrap">
               <ul className="__sidebar_menu">
                    <li >
                    <Logo  onClick={toggleHome} width="1.6rem"  />       

                    </li>

                    <li>

                    <Link  smooth={true}
                    hashSpy={true}
                    offset={-10}
                    duration={500}
                    delay={400}   isDynamic={true} onClick={toggle} className="__sidebar_link" to="Education" >Education</Link>
                    </li>

                    <li>

                    <Link  smooth={true}
                    hashSpy={true}
                    duration={500}
                    delay={400}   isDynamic={true} onClick={toggle}     offset={-50} to="Skills" className="__sidebar_link">Skills</Link>
                    </li>

                    <li>

                    <Link  smooth={true}
                    hashSpy={true}
                    offset={-30}
                    duration={500}
                    delay={400}   isDynamic={true} onClick={toggle}  className="__sidebar_link" to="Projects" >Projects</Link>
                    </li>

                    <li>

                    <Link  smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    delay={400}   isDynamic={true} onClick={toggle}  className="__sidebar_link" to="Technologies" >Technologies</Link>
                    </li>
               </ul>

           </div>
        </div>
    )
}
