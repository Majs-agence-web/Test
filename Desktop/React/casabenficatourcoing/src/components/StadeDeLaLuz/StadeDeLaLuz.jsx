import React, { Component } from 'react';

import ligneGauche from "./Image/ligneGauche.png"
import ligneDroite from "./Image/ligneDroite.png"
import PhotoAccueil from "./Image/LuzLissabon.png"
import PhotoAncienneImage1 from "./Image/AncienStade.png"
import PhotoAncienneImage2 from "./Image/stadePhoto3.jpg"
import PhotoAncienneImage3 from "./Image/stadePhoto4.jpg"
import PhotoNouvelleImage1 from "./Image/NouveauStade.png"
import PhotoNouvelleImage2 from "./Image/stadePhoto6.jpg"
import PhotoNouvelleImage3 from "./Image/stadePhoto7.jpg"
import PhotoBasPage1 from "./Image/DeuxStades.png"
import PhotoBasPage2 from "./Image/stadePhoto1.jpg"
import PhotoBasPage3 from "./Image/stadePhoto2.jpg"
import separation from "./Image/Separation.png"
import Partie2Droit from "./Image/StatueEusébio.png"


const StadeDeLaLuz = () => {
    return ( 
        <div className="">
            {/* Titre */}  
                <div className="text-center mt-3 mb-3">
                    <h2 className="  img-fluid d-inline" >
                        <img className="ligneTitre img-fluid d-none d-lg-inline pr-2" src={ligneGauche} />
                        LE STADE DE LA LUZ
                        <img className="ligneTitre img-fluid d-none d-lg-inline pl-2" src={ligneDroite} />
                    </h2>
                </div>
            {/* Titre */}

            {/* Photo */}
                <div className="d-none d-lg-block">
                    <div className="container-fluid text-center mb-3" >
                        <div className="col-10 offset-1">
                            <img className="" src={PhotoAccueil} style={{width:'100%'}} /> 
                        </div>
                    </div>
                </div>

                <div className="d-md-block d-lg-none">
                    <div className="text-center mb-3" >
                        <div className="col-12">
                            <img className="" src={PhotoAccueil} style={{width:'100%'}} /> 
                        </div>
                    </div>
                </div>
            {/* Photo */}

            {/* Premier Partie */}
                <div className="container-fluid pb-2">
                    <div className="col-10 offset-1 ">
                        <h3>Estádio da Luz (1954)</h3>
                        <h5>HISTOIRE</h5>
                        <p>Le stade a été inauguré le 1er novembre 1954, à l'occasion d'une rencontre entre le Benfica et le FC Porto. <br/>
                            D'abord d'une capacité de 50 000 places, il passe rapidement à 75 000 places en 1960. <br/>
                            En 1985, il était le plus grand stade d'Europe, avec une capacité de 127 000 places, devant le Nou Camp de Barcelone.<br/>
                            En 1998, pour des raisons de sécurité, une partie des places est supprimée.<br/>
                            <br/>
                            Dans l'optique de l'Euro 2004, l'ancien stade est détruit.<br/>
                            Une nouvelle enceinte d'environ 65 000 places voit alors le jour fin 2003, quasiment à la même place que l'ancien antre du Benfica.
                        </p>
                    </div>
                </div>
            {/* Premier Partie */}

            {/* Séparation */}
                <div>
                    {/* Grand */}
                    <div className=" text-center d-none d-md-block ">
                        <img src={separation} className="img-fluid" style={{width:'30em',height:'auto'}}></img>
                    </div>
                    {/* Fin Grand */}
                    {/* Petit */}
                    <div className="text-center d-sm-block d-md-none">
                        <img src={separation} className="img-fluid" style={{width:'19em',height:'auto'}}></img>
                    </div>
                    {/* Fin Petit */}
                </div>
            {/* Fin Séparation */}

            {/* Deuxieme Partie >MD*/}
            <div className="d-none d-md-block pt-3 pb-3">
                <div className="row p-0 m-0">
                    <div className="col-10 offset-1">
                            <div className="row">
                                {/* Partie Gauche*/}
                                <div className="col-7">
                                    {/* Premier paragraphe*/}
                                        <div>
                                            <h5>L'ancien stade (1954-2003)</h5>
                                            <p>
                                                Article détaillé : Estádio da Luz (1954).<br/>
                                                L’ancien stade de Benfica fut inauguré le 1er décembre 1954, date symbolique associée à la Restauration
                                                de l’indépendance du Portugal.<br/>
                                                Il avait une capacité d’accueil hors norme, étant le plus grand stade d’Europe et le 3e plus grand du monde.<br/>
                                                <br/>
                                                Son affluence record a été enregistrée lors d’un match opposant Benfica contre Porto (victoire de Benfica 3-1),<br/>
                                                avec 135 000 spectateurs.
                                                Il fut démoli en vue de la construction du nouveau stade.
                                            </p>
                                        </div>
                                    {/* Premier paragraphe*/}

                                    {/* Photo Premier paragraphe*/}
                                        <div className=" d-none d-lg-block ">
                                            <div className="row d-flex align-items-center">
                                                <div className="col">
                                                    <img className="" src={PhotoAncienneImage1} style={{width:'100%'}} /> 
                                                </div>
                                                <div className="col"> 
                                                    <img className="" src={PhotoAncienneImage2} style={{width:'100%'}} />
                                                </div>
                                                <div className="col">
                                                    <img className="" src={PhotoAncienneImage3} style={{width:'100%'}} /> 
                                                </div> 
                                            </div>
                                        </div>
                                    {/* Photo Premier paragraphe*/}

                                    {/* Carrousel Premier paragraphe*/}
                                        <div className=" d-md-block d-lg-none">             
                                            {/* Début du carousel*/}
                                            <div id="demo3" className="carousel slide d-flex justify-content-center" data-ride="carousel">
                                                {/* Liste des éléments */}
                                                <ul className="carousel d-none" style={{listStyleType: "none"}}>
                                                    <li data-target="#demo3" data-slide-to="0" className="active"></li>
                                                    <li data-target="#demo3" data-slide-to="1"></li>
                                                    <li data-target="#demo3" data-slide-to="2"></li>
                                                </ul>
                                                {/* Fin liste des éléments*/}

                                                {/* Début des éléments du caroussel*/}
                                                <div className="carousel-inner" style={{width:"70%"}}>
                                                    
                                                    {/* Début 1 élément*/}
                                                    <div className="carousel-item active" data-interval="4000">
                                                        <img src={PhotoAncienneImage1} alt="Carrousel slide 1" className="d-block w-100 rounded"/>
                                                    </div>
                                                    {/* Fin 1 élément*/}

                                                    {/* Début 2 élément*/}
                                                    <div class="carousel-item" data-interval="4000">
                                                        <img src={PhotoAncienneImage2} alt="Carrousel slide 2" className="d-block w-100 rounded"/>
                                                    </div>
                                                    {/* Fin 2 élément*/}

                                                    {/* Début 3 élément*/}
                                                    <div class="carousel-item" data-interval="4000">
                                                        <img src={PhotoAncienneImage3} alt="Carrousel slide 3" className="d-block w-100 rounded"/>
                                                    </div>
                                                    {/* Fin 3 élément*/}
                                                </div>
                                                {/* Fin des éléments du caroussel */}
                                            </div>
                                            {/* Fin du caroussel */}
                                        </div>
                                    {/* Carrousel Premier paragraphe*/}

                                    {/* Séparation */}
                                        <div>
                                            {/* Grand */}
                                            <div className=" text-center d-none d-md-block ">
                                                <img src={separation} className="img-fluid" style={{width:'30em',height:'auto'}}></img>
                                            </div>
                                            {/* Fin Grand */}
                                            {/* Petit */}
                                            <div className="text-center d-sm-block d-md-none">
                                                <img src={separation} className="img-fluid" style={{width:'19em',height:'auto'}}></img>
                                            </div>
                                            {/* Fin Petit */}
                                        </div>
                                    {/* Fin Séparation */}

                                    {/* Deuxieme paragraphe*/} 
                                        <div>
                                            <h5>Le stade actuel</h5>
                                            <p>
                                                Le nouveau stade, inauguré en 2003 sur le site de l’ancien stade, a vu sa capacité ramenée à 64 642 places,
                                                ce qui continue néanmoins d'en faire le plus grand stade du Portugal.<br/>  
                                                <br/>  
                                                L'inauguration du stade a lieu le 25 octobre 2003. Le match oppose le Benfica au club 
                                                uruguayen du National Montevideo.<br/>   
                                                Le club portugais remporte le match et Nuno Gomes est le buteur inaugural à la 7e minute de jeu.<br/>  
                                            </p>
                                        </div>
                                    {/* Deuxieme paragraphe*/}

                                    {/* Phototo Deuxieme paragraphe*/}
                                        <div className=" d-none d-lg-block ">
                                            <div className="row d-flex align-items-center">
                                                <div className="col">
                                                    <img className="" src={PhotoNouvelleImage1} style={{width:'100%'}} /> 
                                                </div>
                                                <div className="col"> 
                                                    <img className="" src={PhotoNouvelleImage2} style={{width:'100%'}} />
                                                </div>
                                                <div className="col">
                                                    <img className="" src={PhotoNouvelleImage3} style={{width:'100%'}} /> 
                                                </div> 
                                            </div>
                                        </div>
                                    {/* Photo Deuxieme paragraphe*/}

                                    {/* Carrousel Deuxieme paragraphe*/}
                                    <div className=" d-md-block d-lg-none">             
                                            {/* Début du carousel*/}
                                            <div id="demo3" className="carousel slide d-flex justify-content-center" data-ride="carousel">
                                                {/* Liste des éléments */}
                                                <ul className="carousel d-none" style={{listStyleType: "none"}}>
                                                    <li data-target="#demo3" data-slide-to="0" className="active"></li>
                                                    <li data-target="#demo3" data-slide-to="1"></li>
                                                    <li data-target="#demo3" data-slide-to="2"></li>
                                                </ul>
                                                {/* Fin liste des éléments*/}

                                                {/* Début des éléments du caroussel*/}
                                                <div className="carousel-inner" style={{width:"70%"}}>
                                                    
                                                    {/* Début 1 élément*/}
                                                    <div className="carousel-item active" data-interval="4000">
                                                        <img src={PhotoNouvelleImage1} alt="Carrousel slide 1" className="d-block w-100 rounded"/>
                                                    </div>
                                                    {/* Fin 1 élément*/}

                                                    {/* Début 2 élément*/}
                                                    <div class="carousel-item" data-interval="4000">
                                                        <img src={PhotoNouvelleImage2} alt="Carrousel slide 2" className="d-block w-100 rounded"/>
                                                    </div>
                                                    {/* Fin 2 élément*/}

                                                    {/* Début 3 élément*/}
                                                    <div class="carousel-item" data-interval="4000">
                                                        <img src={PhotoNouvelleImage3} alt="Carrousel slide 3" className="d-block w-100 rounded"/>
                                                    </div>
                                                    {/* Fin 3 élément*/}
                                                </div>
                                                {/* Fin des éléments du caroussel */}
                                            </div>
                                            {/* Fin du caroussel */}
                                        </div>
                                    {/* Carrousel Deuxieme paragraphe*/}
                                </div>
                                {/* Partie Gauche*/}

                                {/* Partie  Droite*/}
                                <div className="col-5 d-flex align-items-center">
                                    {/* Photo */}
                                        <div className="text-center ">
                                            <img className="" src={Partie2Droit} style={{width:'80%'}} /> 
                                            <p className="text-center">Située à côté du stade,<br/>
                                                une statue d’Eusébio est présentée <br/>
                                                à côté du musée Cosme Damiao <br/>
                                                et de la boutique officielle du stade.<br/>
                                            </p>
                                        </div>
                                    {/* Photo */}
                                </div>
                            {/* Partie  Droite*/}
                        </div>
                    </div>
                </div>
            </div>
            {/* Deuxieme Partie >MD*/}

            {/* Deuxieme Partie <MD*/}
            <div className="d-sm-block d-md-none">
                <div className="row p-0 m-0">
                    <div className="col-10 offset-1">
                        {/* Premier Paragraphe */}
                            <div className="pt-2">
                                <h5>L'ancien stade (1954-2003)</h5>
                                <p>
                                    Article détaillé : Estádio da Luz (1954).<br/>
                                    L’ancien stade de Benfica fut inauguré le 1er décembre 1954, date symbolique associée à la Restauration
                                    de l’indépendance du Portugal.<br/>
                                    Il avait une capacité d’accueil hors norme, étant le plus grand stade d’Europe et le 3e plus grand du monde.<br/>
                                    <br/>
                                    Son affluence record a été enregistrée lors d’un match opposant Benfica contre Porto (victoire de Benfica 3-1),<br/>
                                    avec 135 000 spectateurs.
                                    Il fut démoli en vue de la construction du nouveau stade.
                                </p>
                            </div>
                        {/* Premier Paragraphe */}

                        {/* Carrousel Premier paragraphe*/}
                            <div className="">             
                                {/* Début du carousel*/}
                                <div id="demo3" className="carousel slide d-flex justify-content-center" data-ride="carousel">
                                    {/* Liste des éléments */}
                                    <ul className="carousel d-none" style={{listStyleType: "none"}}>
                                        <li data-target="#demo3" data-slide-to="0" className="active"></li>
                                        <li data-target="#demo3" data-slide-to="1"></li>
                                        <li data-target="#demo3" data-slide-to="2"></li>
                                    </ul>
                                    {/* Fin liste des éléments*/}

                                    {/* Début des éléments du caroussel*/}
                                    <div className="carousel-inner" style={{width:"70%"}}>
                                        
                                        {/* Début 1 élément*/}
                                        <div className="carousel-item active" data-interval="4000">
                                            <img src={PhotoAncienneImage1} alt="Carrousel slide 1" className="d-block w-100 rounded"/>
                                        </div>
                                        {/* Fin 1 élément*/}

                                        {/* Début 2 élément*/}
                                        <div class="carousel-item" data-interval="4000">
                                            <img src={PhotoAncienneImage2} alt="Carrousel slide 2" className="d-block w-100 rounded"/>
                                        </div>
                                        {/* Fin 2 élément*/}

                                        {/* Début 3 élément*/}
                                        <div class="carousel-item" data-interval="4000">
                                            <img src={PhotoAncienneImage3} alt="Carrousel slide 3" className="d-block w-100 rounded"/>
                                        </div>
                                        {/* Fin 3 élément*/}
                                    </div>
                                    {/* Fin des éléments du caroussel */}
                                </div>
                                {/* Fin du caroussel */}
                            </div>
                        {/* Carrousel Premier paragraphe*/}

                        {/* Debut Séparation */} 
                            <div>
                                {/* Petit */}
                                <div className="text-center d-sm-block d-md-none">
                                    <img src={separation} className="img-fluid" style={{width:'19em',height:'auto'}}></img>
                                </div>
                                {/* Fin Petit */}
                            </div>
                        {/* Fin Séparation */}

                        {/* Deuxieme Paragraphe */}
                            <div className="pt-2">
                                <h5>Le stade actuel</h5>
                                <p>
                                    Le nouveau stade, inauguré en 2003 sur le site de l’ancien stade, a vu sa capacité ramenée à 64 642 places,
                                    ce qui continue néanmoins d'en faire le plus grand stade du Portugal.<br/>  
                                    <br/>  
                                    L'inauguration du stade a lieu le 25 octobre 2003. Le match oppose le Benfica au club 
                                    uruguayen du National Montevideo.<br/>   
                                    Le club portugais remporte le match et Nuno Gomes est le buteur inaugural à la 7e minute de jeu.<br/>  
                                </p>
                            </div>
                        {/* Deuxieme Paragraphe */}
                            
                        {/* Carrousel Deuxieme paragraphe*/}
                            <div className=" ">             
                                {/* Début du carousel*/}
                                    <div id="demo3" className="carousel slide d-flex justify-content-center" data-ride="carousel">
                                        {/* Liste des éléments */}
                                        <ul className="carousel d-none" style={{listStyleType: "none"}}>
                                            <li data-target="#demo3" data-slide-to="0" className="active"></li>
                                            <li data-target="#demo3" data-slide-to="1"></li>
                                            <li data-target="#demo3" data-slide-to="2"></li>
                                        </ul>
                                        {/* Fin liste des éléments*/}

                                        {/* Début des éléments du caroussel*/}
                                        <div className="carousel-inner" style={{width:"70%"}}>
                                            
                                            {/* Début 1 élément*/}
                                            <div className="carousel-item active" data-interval="4000">
                                                <img src={PhotoNouvelleImage1} alt="Carrousel slide 1" className="d-block w-100 rounded"/>
                                            </div>
                                            {/* Fin 1 élément*/}

                                            {/* Début 2 élément*/}
                                            <div class="carousel-item" data-interval="4000">
                                                <img src={PhotoNouvelleImage2} alt="Carrousel slide 2" className="d-block w-100 rounded"/>
                                            </div>
                                            {/* Fin 2 élément*/}

                                            {/* Début 3 élément*/}
                                            <div class="carousel-item" data-interval="4000">
                                                <img src={PhotoNouvelleImage3} alt="Carrousel slide 3" className="d-block w-100 rounded"/>
                                            </div>
                                            {/* Fin 3 élément*/}
                                        </div>
                                        {/* Fin des éléments du caroussel */}
                                    </div>
                                    {/* Fin du caroussel */}
                                </div>
                        {/* Carrousel Deuxieme paragraphe*/}  

                        {/* Debut Séparation */} 
                            <div>
                                {/* Petit */}
                                <div className="text-center d-sm-block d-md-none">
                                    <img src={separation} className="img-fluid" style={{width:'19em',height:'auto'}}></img>
                                </div>
                                {/* Fin Petit */}
                            </div>
                        {/* Fin Séparation */}

                        {/* Photo King*/}
                            <div className="row pt-2">
                                <div className="col-10 offset-1">
                                    <div className="text-center ">
                                        <img className="" src={Partie2Droit} style={{width:'80%'}} /> 
                                        <p className="text-center">Située à côté du stade,<br/>
                                            une statue d’Eusébio est présentée <br/>
                                            à côté du musée Cosme Damiao <br/>
                                            et de la boutique officielle du stade.<br/>
                                        </p>
                                    </div>
                                </div>
                            </div>  
                        {/* Photo King*/}   
                    </div>  
                </div>
            </div>
            {/* Deuxieme Partie <MD*/}

            {/* Séparation */}
                <div>
                    {/* Grand */}
                    <div className=" text-center d-none d-md-block ">
                        <img src={separation} className="img-fluid" style={{width:'30em',height:'auto'}}></img>
                    </div>
                    {/* Fin Grand */}
                    {/* Petit */}
                    <div className="text-center d-sm-block d-md-none">
                        <img src={separation} className="img-fluid" style={{width:'19em',height:'auto'}}></img>
                    </div>
                    {/* Fin Petit */}
                </div>
            {/* Fin Séparation */}

            {/* Troisieme Partie */}
            <div className="d-none d-lg-block pt-3">
                <div className="row d-flex align-items-center p-0 m-0">
                    <div className="col d-flex justify-content-around pb-3">
                        <img className="" src={PhotoBasPage2} style={{width:'60%'}} /> 
                    </div>
                    <div className="col d-flex justify-content-around pb-3"> 
                        <img className="" src={PhotoBasPage1} style={{width:'70%'}} />
                    </div>
                    <div className="col  d-flex justify-content-around pb-3">
                        <img className="" src={PhotoBasPage3} style={{width:'60%'}} /> 
                    </div> 
                </div>
            </div>

            <div className="d-md-block d-lg-none ">
                <div className="row d-flex align-items-center p-0 m-0">
                    <div className="col-10 offset-1 d-flex justify-content-around pb-3">
                        <img className="" src={PhotoBasPage2} style={{width:'50%'}} /> 
                    </div>
                    <div className="col-10 offset-1 d-flex justify-content-around pb-3"> 
                        <img className="" src={PhotoBasPage1} style={{width:'65%'}} />
                    </div>
                    <div className="col-10 offset-1 d-flex justify-content-around pb-3">
                        <img className="" src={PhotoBasPage3} style={{width:'50%'}} /> 
                    </div> 
                </div>
            </div>
            {/* Troisieme Partie */}
            
        </div>
             );
}
export default StadeDeLaLuz ;