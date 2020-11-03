import { css } from 'jquery';
import React, { Component } from 'react';
import News from "./news/news"
import MiniCarrouselHomePage from "./Asyde/miniCaroussel/minCarousselHomePage"
import ligneDroite from './Image/ligneDroite.png'
import ligneGauche from './Image/ligneGauche.png'

const BodyHomePage = (props) => {
    const { user } = props;

    return ( 
        <div>
            <div className="row">

                <div className="col-12 pt-2">
                    <h2 className=" text-center img-fluid pt-3 pb-3" >
                    <img className="ligneTitre img-fluid d-none d-lg-inline pr-2" src={ligneGauche} />
                    ACTUALITÉS
                    <img className="ligneTitre img-fluid d-none d-lg-inline pl-2" src={ligneDroite} />
                    </h2>
                </div>

                <div className="col-12 pl-2 p-0 m-0">
                    <button className="bg-danger text-white text-uppercase rounded btn" data-toggle="modal" data-target="#newsForm">ajouter une actualité</button>
                </div>

            </div>

            <div className="row">
                <div className="col-12 col-lg-9 col-xl-10"><News user={ user }/></div>
                <div className="col-12 col-lg-3 col-xl-2 p-2"><MiniCarrouselHomePage/></div>
            </div>
            
        </div>
             );
}
 
export default BodyHomePage ;