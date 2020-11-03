import React, { Component } from 'react';
import News from "../../news/news";
import './miniCarrouselHomePage.css';
import Facebook from "../facebooks";
import FacebookLogo from "./Images/Facebook.png"
import Calendrier from "./Images/Calendrier.png"
import Twitter from "./Images/Twitter.png"
import Vitrine from "./Images/SacBenfica.png"

const MiniCarrouselHomePage = () => {
    return ( 
        
        <div className="" >
            {/* */}


            {/*<div className="row p-0 m-0 ">*/}

                {/* Début de l'asyde Grand Ecran*/}
                <div className="pl-3 pr-3 pt-1 m-0 d-none d-lg-block bg-light" style={{borderRadius:'25px'}}>
                    <div className=""> 
                        {/* Début du carousel*/}
                        <div id="demo3" className="carousel slide" data-ride="carousel">
                            {/* Liste des éléments */}
                            <ul className="carousel" style={{listStyleType: "none"}}>
                                {/*<li data-target="#demo3" data-slide-to="0" className="active"></li>*/}
                                {/*<li data-target="#demo3" data-slide-to="1"></li>*/}
                                {/*<li data-target="#demo3" data-slide-to="2"></li>*/}
                                {/*<li data-target="#demo3" data-slide-to="3"></li>*/}
                            </ul>
                            {/* Fin liste des éléments*/}

                            {/* Début des éléments du caroussel*/}
                            <div className="carousel-inner">
                                
                                {/* Début 1 élément*/}
                                <div className="carousel-item active">
                                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="Carrousel slide 1" className="d-block w-100 rounded"/>
                                </div>
                                {/* Fin 1 élément*/}

                                {/* Début 2 élément*/}
                                {/*<div class="carousel-item">
                                    <img src="" alt="Carrousel slide 2" class="d-block w-100 rounded"/>
                                </div>*/}
                                {/* Fin 2 élément*/}

                                {/* Début 3 élément */}
                                {/*<div class="carousel-item">
                                    <img src="" alt="Carrousel slide 3" class="d-block w-100 rounded"/>
                                </div>*/}
                                {/* Fin 3 élément*/}

                                {/* Début 4 élément */}
                                {/*<div class="carousel-item">
                                    <img src="" alt="Carrousel slide 4" class="d-block w-100 rounded"/>
                                </div>*/}
                                {/* Fin 4 élément*/}

                            </div>
                            {/* Fin des éléments du caroussel */}

                            {/* Début gestion Précédent/Suivant */}
                            <a class="carousel-control-prev" href="#demo3" role="button" data-slide="prev">
                                {/*<span class="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                                {/*<span class="sr-only">Précédent</span>*/}
                            </a>
                            <a class="carousel-control-next" href="#demo3" role="button" data-slide="next">
                                {/*<span class="carousel-control-next-icon" aria-hidden="true"></span>*/}
                                {/*<span class="sr-only">Suivant</span>*/}
                            </a>
                            {/*Fin gestion Précédent/Suivant */}

                        </div>
                        {/* Fin du caroussel */}

                    </div>

                    {/* Iframe facebook */}
                    {/*<div className="mt-2" style={{width:'30%'}} >*/}
                        <Facebook/>
                    {/*</div> */}
                    {/* Iframe facebook */}

                    {/* Bas de l'asyde*/}
                    <div className="pb-3">
                        <div className="mt-4 ">
                            <img className="tailleIcon mr-2" style={{float:'left'}} src={Calendrier}></img>
                            <p className="pt-2">CALENDRIER</p>
                        </div>
                        <div className="mt-4 ">
                            <img className="tailleIcon mr-3" style={{float:'left'}} src={Vitrine}></img>
                            <p className="pt-2">VITRINE</p>
                        </div>
                        <div className="d-flex justify-content-around mt-4">
                            <img className="tailleIcon ml-5" src={FacebookLogo}></img>
                            <img className="tailleIcon mr-5" src={Twitter}></img>
                        </div>
                    </div>
                    {/* Bas de l'asyde*/}

                </div>
                {/* Fin de l'asyde Grand Ecran*/}

                {/* Début de l'asyde Petit Ecran*/}
                <div className="bg-light d-lg-none d-block" style={{borderRadius:'25px'}}>
                    <div className="row m-0 p-2">
                        <div className="col-12 col-sm-6 p-2 d-flex justify-content-center" >
                            {/* Début du carousel*/}
                            <div id="demo3" className="carousel slide HauteurPhoto " data-ride="carousel" >
                                {/* Liste des éléments */}
                                <ul className="carousel d-none" style={{listStyleType: "none"}}>
                                    <li data-target="#demo3" data-slide-to="0" className="active"></li>
                                    <li data-target="#demo3" data-slide-to="1"></li>
                                </ul>
                                {/* Fin liste des éléments*/}

                                {/* Début des éléments du caroussel*/}
                                <div className="carousel-inner">
                                    
                                    {/* Début 1 élément*/}
                                    <div className="carousel-item active">
                                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="Carrousel slide 1" className=" w-100 rounded" />
                                    </div>
                                    {/* Fin 1 élément*/}

                                    {/* Début 2 élément*/}
                                    <div class="carousel-item">
                                        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="Carrousel slide 1" className="w-100 d-block rounded"/>
                                    </div>
                                    {/* Fin 2 élément*/}
                                </div>
                                {/* Fin des éléments du caroussel */}
                            </div>
                            {/* Fin du caroussel */}
                        </div>
                            
                        {/* Facebook */}
                        {/*<div className="col-12 col-sm-6 m-0 p-2 d-flex justify-content-center">    
                            <Facebook />
                            </div>*/}
                        {/* Facebook */}

                    </div>
                    <div className="row m-0 p-0">
                        <div className="col-7 col-sm-5 m-0 p-2 d-flex justify-content-center">
                            <div style={{display:"inline-block"}} className="">
                                <img className="tailleIcon" style={{float:'left'}} src={Calendrier}></img>
                                <p style={{display:"inline-block"}} className="pt-2 pl-1">CALENDRIER</p>
                            </div>
                        </div>

                        <div className="col-5 col-sm-3 m-0 p-2 ">
                            <div style={{display:"inline-block"}} className="d-flex justify-content-center">
                                <img className="tailleIcon" src={Vitrine}></img>
                                <p style={{display:"inline-block"}} className="pl-1">VITRINE</p>
                            </div>
                        </div>

                        <div className="col-6 col-sm-2 m-0 p-2 d-flex justify-content-center">
                            <div style={{display:"inline-block"}} >
                                <img className="tailleIcon" src={FacebookLogo}></img>
                            </div>
                        </div>

                        <div className="col-6 col-sm-2 m-0 p-2 d-flex justify-content-center">
                            <div style={{display:"inline-block"}}>
                                <img className="tailleIcon" src={Twitter}></img>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Fin de l'asyde Petit Ecran*/}

            {/*</div>*/}
        </div>
     );
}
 
export default MiniCarrouselHomePage;