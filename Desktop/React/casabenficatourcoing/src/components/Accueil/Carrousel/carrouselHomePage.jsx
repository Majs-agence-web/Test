import React, { Component } from 'react';
import './carrouselHomePage.css'
import ModalHomePage from './modalHomePage'
import photo1 from './Photos/photo1.png'
import photo2 from './Photos/photo2.jpg'
import photo3 from './Photos/photo3.jpg'


const CarrouselHomePage = () => {
    return ( 
       
        <div>
            {/* */}

            <div>
                {/* Début du carousel*/}
                <div id="demo3" className="carousel slide" data-ride="carousel">
                    {/* Liste des éléments */}
                    <ul className="carousel-indicators">
                        <li data-target="#demo3" data-slide-to="0" className="active"></li>
                        <li data-target="#demo3" data-slide-to="1"></li>
                        <li data-target="#demo3" data-slide-to="2"></li>
                        <li data-target="#demo3" data-slide-to="3"></li>
                        <li data-target="#demo3" data-slide-to="4"></li>
                    </ul>
                    {/* Fin liste des éléments*/}

                    {/* Début des éléments du caroussel*/}
                    <div className="carousel-inner">
                        {/* Début 1 élément*/}
                        <div className="carousel-item active">
                            <img src={photo1} alt="Carrousel slide 1" className="d-block w-100"/>
                            <div className="divBox">
                                <div className="d-none d-sm-block">
                                    <p className="boxMotCle">FUTSAL</p>
                                    <p className="boxMotCle">CASA BENFICA</p>
                                    <p className="boxMotCle">PREMIER</p>
                                </div>
                                <div className="espacement">
                                    <h4 className="boxTitre">Titre de la légende</h4>
                                </div>
                            </div>
                        </div>
                        {/* Fin 1 élément*/}

                        {/* Début 2 élément*/}
                        <div class="carousel-item">
                            <img src={photo2} alt="Carrousel slide 2" class="d-block w-100"/>
                            <div class="divBox">
                                <div className="d-none d-sm-block">
                                    <p className="boxMotCle">FUTSAL</p>
                                    <p className="boxMotCle">CASA BENFICA</p>
                                    <p className="boxMotCle">PREMIER</p>
                                </div>
                                <div className="espacement">
                                    <h4 className="boxTitre">Titre de la légende</h4>
                                </div>
                            </div>
                        </div>
                        {/* Fin 2 élément*/}

                        {/* Début 3 élément */}
                        <div class="carousel-item">
                            <img src={photo3} alt="Carrousel slide 3" class="d-block w-100"/>
                            <div class="divBox">
                                <div className="d-none d-sm-block">
                                    <p className="boxMotCle">FUTSAL</p>
                                    <p className="boxMotCle">CASA BENFICA</p>
                                    <p className="boxMotCle">PREMIER</p>
                                </div>
                                <div className="espacement">
                                    <h4 className="boxTitre">CASA BENFICA PREMIER AU CLASSEMENT !</h4>
                                </div>
                            </div>
                        </div>
                        {/* Fin 3 élément*/}

                        {/* Début 4 élément */}
                        {/*<div class="carousel-item">
                            <img src="https://www.pierre-giraud.com/bootstrap-carrousel-slide-1.jpg" alt="Carrousel slide 4" class="d-block w-100"/>
                            <div class="divBox">
                                <div className="d-none d-sm-block">
                                    <p className="boxMotCle">FUTSAL</p>
                                    <p className="boxMotCle">CASA BENFICA</p>
                                    <p className="boxMotCle">PREMIER</p>
                                </div>
                                <div className="espacement">
                                    <h4 className="boxTitre">CASA BENFICA PREMIER AU CLASSEMENT !</h4>
                                </div>
                            </div>
                        </div>
                        {/* Fin 4 élément*/}

                        {/* Début 5 élément */}
                       {/*<div class="carousel-item">
                            <img src="https://www.pierre-giraud.com/bootstrap-carrousel-slide-2.jpg" alt="Carrousel slide 5" class="d-block w-100"/>
                            <div class="divBox">
                                <div className="d-none d-sm-block">
                                    <p className="boxMotCle">FUTSAL</p>
                                    <p className="boxMotCle">CASA BENFICA</p>
                                    <p className="boxMotCle">PREMIER</p>
                                </div>
                                <div className="espacement">
                                    <h4 className="boxTitre">CASA BENFICA PREMIER AU CLASSEMENT !</h4>
                                </div>
                            </div>
                        </div>
                        {/* Fin 5 élément*/}

                    </div>
                    {/* Fin des éléments du caroussel */}

                    {/* Début gestion Précédent/Suivant */}
                    <a class="carousel-control-prev" href="#demo3" role="button" data-slide="prev">
                        {/*<span class="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                        <span class="sr-only">Précédent</span>
                    </a>
                    <a class="carousel-control-next" href="#demo3" role="button" data-slide="next">
                        {/*<span class="carousel-control-next-icon" aria-hidden="true"></span>*/}
                        <span class="sr-only">Suivant</span>
                    </a>
                    {/*Fin gestion Précédent/Suivant */}
                </div>
                {/* Fin du caroussel */}
            </div>

            <div>
            {/* Appel au component ModalHomePage */}
                <ModalHomePage />
            {/* Fin appel au component ModalHomePage */}
            </div>
        </div>
        
        
     );
}
 
export default CarrouselHomePage;