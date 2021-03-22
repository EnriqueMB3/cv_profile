import React from 'react';
import Logo from '../svg/Logo';


export const Navbar = () => {
    return (
        <div id="container">

        <nav>
            <ul>
            <li> <a href="#Profile">    <Logo width="2rem" /></a>   </li>

                <li> <a href="#Education">Education</a>   </li>
                <li> <a href="#Tools"> Technologies </a>   </li>
                <li> <a href="#Projects">Projects</a>   </li>

            </ul>
        </nav>
        </div>
    )
}
