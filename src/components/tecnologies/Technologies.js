import React from 'react';

import {ReactComponent as Separation} from '../../assets/onda.svg';
import Git from '../../assets/img/git.png';
import Reactjs from '../../assets/img/react.png';
import Angular from '../../assets/img/angular.png';
import Nodejs from '../../assets/img/nodejs.png';
import Javascript from '../../assets/img/javascript.png';
import Mysql from '../../assets/img/mysql.png';

import NetCore from '../../assets/img/netcore.png';
import Html from '../../assets/img/html.png';
import Css from '../../assets/img/css.png';

import Csharp from '../../assets/img/csharp.png';
import Illustrator from '../../assets/img/illustrator.png';
import Photoshop from '../../assets/img/photoshop.png';
import Mongodb from '../../assets/img/mongodb.png';
import Xd from '../../assets/img/xd.png';
import Xamarin from '../../assets/img/xamarin.png';
import { Element } from 'react-scroll';

















export const Technologies = () => {
    return (
        <>
        <Element name="Technologies"> 

        <Separation width="100vw" className="__techologies_separator"/>
        <div className="__technologies_content">
            
            <h2>Technologies</h2>
            <div className="__technologies_list">

            
            <div className="__technologies_item">
                <img src={Git} alt="Git" height="60px"></img>
                <h4>Git</h4>
            </div>

            <div   className="__technologies_item" >
                <div>
                <img src={Reactjs} alt="Reactjs" height="60px"></img>

                </div>
                <h4>React js</h4>
            </div>

            <div  className="__technologies_item" >
                <div>
                <img src={Angular} alt="Angular" height="60px"></img>

                </div>
                <h4>Angular</h4>
            </div>

            <div  className="__technologies_item">
                <div>
                <img src={Nodejs} alt="Nodejs" height="60px"></img>

                </div>
                <h4>Node js</h4>
            </div>

            <div  className="__technologies_item">
                <div>
                <img src={Javascript} alt="Javascript" height="60px"></img>

                </div>
                <h4>Javascript</h4>
            </div>

            <div  className="__technologies_item">
                <div>
                <img src={Mysql} alt="Mysql" height="60px"></img>

                </div>
                <h4>Mysql</h4>
            </div>

            <div  className="__technologies_item">
                <div>
                <img src={NetCore} alt="Mysql" height="60px"></img>

                </div>
                <h4>NetCore</h4>
            </div>
            
            <div  className="__technologies_item">
                <div>
                <img src={Html} alt="Mysql" height="60px"></img>

                </div>
                <h4>Html</h4>
            </div>

            <div  className="__technologies_item">
                <div>
                <img src={Css} alt="Mysql" height="60px"></img>

                </div>
                <h4>Css</h4>
            </div>
            
            <div  className="__technologies_item">
                <div>
                <img src={Csharp} alt="Csharp" height="60px"></img>

                </div>
                <h4>C#</h4>
            </div>
            <div  className="__technologies_item">
                <div>
                <img src={Illustrator} alt="Mysql" height="60px"></img>

                </div>
                <h4>Illustrator</h4>
            </div>
            <div  className="__technologies_item">
                <div>
                <img src={Photoshop} alt="Mysql" height="60px"></img>

                </div>
                <h4>Photoshop</h4>
            </div>
            <div  className="__technologies_item">
                <div>
                <img src={Mongodb} alt="Mysql" height="60px"></img>

                </div>
                <h4>Mongodb</h4>
            </div>
            <div  className="__technologies_item">
                <div>
                <img src={Xd} alt="Mysql" height="60px"></img>

                </div>
                <h4>Adobe Xd</h4>
            </div>
            <div  className="__technologies_item">
                <div>
                <img src={Xamarin} alt="Mysql" height="60px"></img>

                </div>
                <h4>Xamarin</h4>
            </div>
            </div>
        </div>
        </Element>
        </>
    )
}
