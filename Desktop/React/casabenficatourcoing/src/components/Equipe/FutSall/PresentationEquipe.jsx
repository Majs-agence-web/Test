import React, { Component } from 'react';
import ligneDroite from './Image/ligneDroite.png';
import ligneGauche from './Image/ligneGauche.png';
import EquipeAFutSal from './EquipeA/EquipeAFutSal';
import EquipeBFutSal from './EquipeB/EquipeBFutSal';
import './FutSal.scss'

const PresentationEquipe = () => {
    return ( 
        <div>
            <div className="text-center mt-2 mb-2">
                <h2 className="img-fluid d-inline" >
                    <img className="ligneTitre img-fluid d-none d-lg-inline pr-2" src={ligneGauche} />
                    PRESENTATION DES EQUIPES
                    <img className="ligneTitre img-fluid d-none d-lg-inline pl-2" src={ligneDroite} />
                </h2>
            </div>

            <div>
                <EquipeAFutSal/>
            </div>
            <div>
                <EquipeBFutSal/>
            </div>
        </div>
        
     );
}
 
export default PresentationEquipe;