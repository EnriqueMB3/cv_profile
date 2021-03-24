import React from 'react'
import FcaSabinas from '../../assets/fcasabinas_logo.png';
import Donut from '../../assets/donut.png';
import Pokeball from '../../assets/pokeball.png';
import { Element } from 'react-scroll';


export const Projects = () => {
    return (
        <Element name="Projects">

        <div className="__projects_content">
            <h2 className="mb-5">Projects</h2>

            <div className="__projects_cards">
                <div className="__projects_card_item">
                    <div >
                        <img src={FcaSabinas} alt="Logo Sabinas Fca"  height="50rem"/>
                    </div>
                    <div className="ml-1">
                    <h3> Festival de la Carne Asada </h3>
                    <p>Sistema para la organización de un concurso</p>
                    </div>
                </div>

                <div className="__projects_card_item">
                    <div >
                        <img src={Donut} alt="Simpson Donut"  height="50rem"/>
                    </div>
                    <div className="ml-1">
                    <h3> SimpsonApp  </h3>
                    <p>Una aplición en Xamarin para los episodios de los simpson</p>
                    </div>
                </div>

                <div className="__projects_card_item">
                    <div >
                        <img src={Pokeball} alt="Simpson Donut"  height="50rem"/>
                    </div>
                    <div className="ml-1">
                    <h3> PokeApp  </h3>
                    <p>Una aplición en Xamarin tipo Pokedex</p>
                    </div>
                </div>
            </div>
        </div>
        </Element>
    )
}
