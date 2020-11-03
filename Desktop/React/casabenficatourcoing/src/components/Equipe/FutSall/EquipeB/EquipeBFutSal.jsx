import React, { Component } from 'react';
import separation from "../Image/Separation.png"
import joueur from "../PhotoJoueur/Rectangle 45.png";

const EquipeBFutSal = () => {
    return ( 
        <div>
        <div className="text-center pt-2">
            <h3>EQUIPE B FUTSAL CASA BENFICA</h3>
        </div>

    {/* Affichage Joueur Avec Terrain */}
        <div className="d-lg-block d-none">
            <div className="row p-0 m-0 ">

                <div className="col-5"></div>

                <div className="col-2 d-flex justify-content-between align-items-end mb-2">
                    <img src={joueur} className="TailleJoueur"></img>
                    <img src={joueur} className="TailleJoueur"></img>
                </div>
                <div className="col-5">
                    
                </div>
            </div>
        </div>

        <div className="row fondImage hauteurDiv p-0 m-0 d-lg-block d-none"  >
            <div className="row p-0 m-0">
                <div className="col-2 mb-5 ml-2">
                    <img src={joueur} className="TailleJoueur"></img></div>
                <div className="col-10"></div>
            </div>

            <div className="row p-0 m-0">
                <div className="col-2">
                    <img src={joueur} className="TailleJoueur pl-2"></img>
                </div>
                <div className="col-8 d-flex d-flex justify-content-around">
                    <img src={joueur} className="TailleJoueur"></img>
                    <img src={joueur} className="TailleJoueur"></img>
                    <img src={joueur} className="TailleJoueur"></img>
                    <img src={joueur} className="TailleJoueur"></img>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="row p-0 m-0">
                <div className="col-3"></div>
                <div className="col-6 d-flex d-flex justify-content-around">
                    <img src={joueur} className="TailleJoueur"></img>
                    <img src={joueur} className="TailleJoueur"></img>
                </div>
                <div className="col-3"></div>
            </div>

            <div className="row p-0 m-0">
                <div className="col-3"> </div>
                <div className="col-6 d-flex d-flex justify-content-around">
                    <img src={joueur} className="TailleJoueur"></img>
                    <img src={joueur} className="TailleJoueur"></img>
                    <img src={joueur} className="TailleJoueur"></img>
                    <img src={joueur} className="TailleJoueur"></img>
                </div>
                <div className="col-3"></div>
            </div>

        </div>
    {/* Affichage Joueur Avec Terrain */}


        {/* Affichage Joueur Sans Terrain */}
        <div className="row d-lg-none d-block p-0 m-0">
                <div className="col mb-2">
                    <h4 className="text-center">Entraineur</h4>
                    <div className="d-flex justify-content-around">
                        <img src={joueur} className=""></img>
                        <img src={joueur} className=""></img>
                    </div>
                </div>

                {/* Petit */}
                <div className="text-center d-md-block d-lg-none">
                    <img src={separation} className="img-fluid" style={{width:'19em',height:'auto'}}></img>
                </div>
                {/* Fin Petit */}

                <div className="col mb-2"> 
                    <h4 className="text-center">Gardien</h4>
                    <div className="d-flex justify-content-around">
                        <img src={joueur} className=""></img>
                        <img src={joueur} className=""></img>
                    </div>
                </div> 

                {/* Petit */}
                <div className="text-center d-md-block d-lg-none">
                    <img src={separation} className="img-fluid" style={{width:'19em',height:'auto'}}></img>
                </div>
                {/* Fin Petit */}

                <div className="col mb-2"> 
                    <div className="mb-2">
                        <h4 className="text-center">Joueur de champs</h4>

                        <div className="d-flex justify-content-around mb-2">
                            <img src={joueur} className=""></img>
                            <img src={joueur} className=""></img>
                        </div>

                        <div className="d-flex justify-content-around mb-2">
                            <img src={joueur} className=""></img>
                            <img src={joueur} className=""></img>
                        </div>
    
                        <div className="d-flex justify-content-around mb-2">
                            <img src={joueur} className=""></img>
                            <img src={joueur} className=""></img>
                        </div>

                        <div className="d-flex justify-content-around mb-2">
                            <img src={joueur} className=""></img>
                            <img src={joueur} className=""></img>
                        </div>
                        <div className="d-flex justify-content-around mb-2">
                            <img src={joueur} className=""></img>
                            <img src={joueur} className=""></img>
                        </div>
                    </div>

                </div> 

            </div>
        {/* Affichage Joueur Sans Terrain */}

        {/* Séparation */}
            {/* Grand */}
            <div className=" text-center d-none d-md-block">
                <img src={separation} className="img-fluid" style={{width:'30em',height:'auto'}}></img>
            </div>
            {/* Fin Grand */}
            {/* Petit */}
            <div className="text-center d-sm-block d-md-none">
                <img src={separation} className="img-fluid" style={{width:'19em',height:'auto'}}></img>
            </div>
            {/* Fin Petit */}
        {/* Fin Séparation */}

    </div>
        
     );
}
 
export default EquipeBFutSal;