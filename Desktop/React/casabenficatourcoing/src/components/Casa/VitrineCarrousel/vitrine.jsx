import React, { Component } from 'react';
import vitrine1 from '../PresentationCasa/images/vitrine 1.png'
import vitrine2 from '../PresentationCasa/images/vitrine 2.png'
import vitrine3 from '../PresentationCasa/images/vitrine 3.png'


const CarrouselVitrine = () => {
    return ( 
        <div className="">                     
            {/* Début du carousel*/}
            <div id="demo3" className="carousel slide" data-ride="carousel">
                {/* Liste des éléments */}
                <ul className="carousel d-none" style={{listStyleType: "none"}}>
                    <li data-target="#demo3" data-slide-to="0" className="active"></li>
                    <li data-target="#demo3" data-slide-to="1"></li>
                    <li data-target="#demo3" data-slide-to="2"></li>
                </ul>
                {/* Fin liste des éléments*/}

                {/* Début des éléments du caroussel*/}
                <div className="carousel-inner">
                    
                    {/* Début 1 élément*/}
                    <div className="carousel-item active" data-interval="4000">
                        <img src={vitrine1} alt="Carrousel slide 1" className="d-block w-100 rounded"/>
                    </div>
                    {/* Fin 1 élément*/}

                    {/* Début 2 élément*/}
                    <div class="carousel-item" data-interval="4000">
                        <img src={vitrine2} alt="Carrousel slide 2" className="d-block w-100 rounded"/>
                    </div>
                    {/* Fin 2 élément*/}

                    {/* Début 3 élément*/}
                    <div class="carousel-item" data-interval="4000">
                        <img src={vitrine3} alt="Carrousel slide 3" className="d-block w-100 rounded"/>
                    </div>
                    {/* Fin 3 élément*/}
                </div>
                {/* Fin des éléments du caroussel */}
            </div>
            {/* Fin du caroussel */}
        </div>
    );
}
                    
export default CarrouselVitrine;