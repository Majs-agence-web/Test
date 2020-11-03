import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './tatoo.scss';
import photo1 from './images/photo1.jpg'
import photo2 from './images/photo2.jpg'
import photo3 from './images/photo3.jpg'
import photo4 from './images/photo4.jpg'
import photo5 from './images/photo5.jpg'
import photo6 from './images/photo6.jpg'
import photo7 from './images/photo7.jpg'
import photo8 from './images/photo8.jpg'
import photo9 from './images/photo9.jpg'
import photo10 from './images/photo10.jpg'
import photo11 from './images/photo11.jpg'
import photo12 from './images/photo12.jpg'
import photo13 from './images/photo13.jpg'
import photo14 from './images/photo14.jpg'
import photo15 from './images/photo15.jpg'
import photo16 from './images/photo16.jpg'
import photo17 from './images/photo17.jpg'
import photo18 from './images/photo18.jpg'
import photo19 from './images/photo19.jpg'
import photo20 from './images/photo20.jpg'
import photo21 from './images/photo21.jpg'
import photo22 from './images/photo22.jpg'
import photo23 from './images/photo23.jpg'
import photo24 from './images/photo24.jpg'
import photo25 from './images/photo25.jpg'
import photo26 from './images/photo26.jpg'
import photo27 from './images/photo27.jpg'
import photo28 from './images/photo28.jpg'
import ligneDroite from './images/ligneDroite.png';
import ligneGauche from './images/ligneGauche.png';

const Tatoo = () => {
    return ( 
<div className="container-fluid pb-4" style={{backgroundColor:"black", borderTop: "#FFEB32 solid 3px"}}>
        <div className="container">
            <h2 className=" text-center img-fluid pt-3 pb-3" >
                <img className="ligneTitre img-fluid d-none d-lg-inline pr-2" src={ligneGauche} />
                <span style={{color: "white"}}>TATOO</span>
                <img className="ligneTitre img-fluid d-none d-lg-inline pl-2" src={ligneDroite} />
            </h2>              

            <div class="row"> 
            
                <div class="column">
                    <img className="zoom" src={photo1} style={{width:"100%"}}/>
                    <img className="zoom" src={photo2} style={{width:"100%"}}/>
                    <img className="zoom" src={photo3} style={{width:"100%"}}/>
                    <img className="zoom" src={photo4} style={{width:"100%"}}/>
                    <img className="zoom" src={photo5} style={{width:"100%"}}/>
                    <img className="zoom" src={photo6} style={{width:"100%"}}/>
                    <img className="zoom" src={photo7} style={{width:"100%"}}/>
                </div>

                <div class="column">
                    <img className="zoom" src={photo28} style={{width:"100%"}}/>
                    <img className="zoom" src={photo8} style={{width:"100%"}}/>    
                    <img className="zoom" src={photo9} style={{width:"100%"}}/>
                    <img className="zoom" src={photo10} style={{width:"100%"}}/>
                    <img className="zoom" src={photo11} style={{width:"100%"}}/>
                    <img className="zoom" src={photo12} style={{width:"100%"}}/>
                    <img className="zoom" src={photo13} style={{width:"100%"}}/>
                </div>  

                <div class="column">
                    <img className="zoom" src={photo14} style={{width:"100%"}}/>
                    <img className="zoom" src={photo15} style={{width:"100%"}}/>
                    <img className="zoom" src={photo16} style={{width:"100%"}}/>
                    <img className="zoom" src={photo17} style={{width:"100%"}}/>
                    <img className="zoom" src={photo18} style={{width:"100%"}}/>
                    <img className="zoom" src={photo19} style={{width:"100%"}}/>
                    <img className="zoom" src={photo20} style={{width:"100%"}}/>
                    
                </div>
                <div class="column">
                    <img className="zoom" src={photo21} style={{width:"100%"}}/>
                    <img className="zoom" src={photo22} style={{width:"100%"}}/>
                    <img className="zoom" src={photo23} style={{width:"100%"}}/>
                    <img className="zoom" src={photo24} style={{width:"100%"}}/>
                    <img className="zoom" src={photo25} style={{width:"100%"}}/>
                    <img className="zoom" src={photo26} style={{width:"100%"}}/>
                    <img className="zoom" src={photo27} style={{width:"100%"}}/>    
                </div>
            </div>    
        </div>
</div>
     );
}
 
export default Tatoo;
 

