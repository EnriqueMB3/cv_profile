import React from 'react';
import {ReactComponent as Database} from '../../assets/database.svg';
import {ReactComponent as Backend} from '../../assets/programming.svg';
import {ReactComponent as Ui} from '../../assets/ui.svg';
import {ReactComponent as Mobile} from '../../assets/medical-app.svg';
import {ReactComponent as Design} from '../../assets/vector_pen.svg';
import {ReactComponent as Frontend} from '../../assets/web-design.svg';
import { Element } from 'react-scroll';







export const Skills = () => {
    return (

      <Element name="Skills">

        <div className="__skills_container">
            <h2 className="mb-5">Skills</h2>

            <div className="__skills_list">
              
            {/* Backend */}
                <div className="__skills_item">
                    <div>

                    <Backend height="2rem" width="2rem"/>
                    </div>
                    <div className="__skills_properties">
                        <h3>Backend</h3>
                        <p>Web API RESTful. Producing the connection between the client and the server. I can use .NET core or Node.js</p>

                    </div>
                </div>


                  {/* Bases de datos */}
                  <div className="__skills_item">

                      <div>
                        <Database height="2rem" width="2rem" />

                      </div>
                    
                    <div className="__skills_properties">
                        <h3>Databases</h3>
                        <p> Estructure, Design and Administration of Database. MySQL and MongoDB</p>
                    </div>
                </div>


                
                  {/* Frontend */}
                  <div className="__skills_item">

                      <div>
                    <Frontend height="2rem" width="2rem"/>

                      </div>
                    
                    <div className="__skills_properties">
                        <h3>Frontend</h3>
                        <p>Writing HTML, CSS and JavaScript for a site or Application so that a user can see and interact with them directly. Now using React and Angular technologies</p>
                    </div>
                </div>

                 {/* Aplicaciones Moviles */}
                 <div className="__skills_item">
                     <div>
                    <Mobile height="2rem" width="2rem"/>

                     </div>
                    
                    <div className="__skills_properties">
                        <h3>Mobile Application</h3>
                        <p>Development of mobile applications with Xamarin Forms</p>
                    </div>
                </div>

                  {/* UX/UI */}
                  <div className="__skills_item">

                      <div>
                    <Ui height="2rem" width="2rem"/>

                      </div>
                    
                    <div className="__skills_properties">
                        <h3>UX/UI</h3>
                        <p>Define the form, function, utility, branding and other aspects that affect the external appearance of user interfaces</p>
                    </div>
                </div>
            
              {/* Diseno Grafico */}
              <div className="__skills_item">
                  <div>
                    <Design height="2rem" width="2rem"/>
                  </div>
                    
                    <div className="__skills_properties">
                        <h3>Graphic Design</h3>
                        <p>Create and project visual pieces destined to transmit specific messages, and achieve distinct objectives</p>
                    </div>
                </div>
            </div>
        </div>
      </Element>
    )
}
