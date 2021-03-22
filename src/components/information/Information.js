import React from 'react'
import Avatarme from '../svg/Avatar_me'
import Logo from '../svg/Logo';

export const Information = () => {
    return (
        <>
        <div className="__information_content">
        

        <div>
            <h6 className="mb-1">Design by Enrique Berrones</h6>
            <Logo width="1rem" />

        </div>

           
        </div>
        <div className="__information_content">

            <Avatarme   className="__information_avatar"/>
        </div>
        </>
    )
}
