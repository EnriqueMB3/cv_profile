import React from 'react'
import useModal from '../../hooks/useModal';
import { Content } from '../contactme/Content';
import Modal from '../modal/Modal';
import Avatarme from '../svg/Avatar_me'
import Logo from '../svg/Logo';

export const Information = () => {

    
    const {isShowing, toggle} = useModal();
    return (
        <>
        <div className="__information_content">
        

        <div className="__information_contactme">
            <Logo width="1rem" />
                <button className="btn btn-green" onClick={toggle} ><i className="fas fa-envelope-open-text"></i> Send me a E-mail  </button>
            <h6 className="mb-1">Design by Enrique Berrones</h6>
            {/* <button className="btn btn-green" onClick={toggle} ><i className="fas fa-envelope-open-text"></i> Send me an Email</button> */}

        </div>

           
        </div>
        <div className="__information_content_end">

            <Avatarme   className="__information_avatar"/>
      
        </div>
        <Modal header={"Tell me something!"} content={Content }
        isShowing={isShowing}
        hide={toggle} 
      />
        </>
    )
}
