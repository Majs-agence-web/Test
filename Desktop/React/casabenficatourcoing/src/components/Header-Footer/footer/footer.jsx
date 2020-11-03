import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './footer.scss';
import Eusebio from './Logos/EUSEBIO.png';
import Meo from './Logos/Meo_logo_pt.png';
import LogoHubert from './Logos/LogoHubert.png';
import LogoBenfica from './Logos/LogoBenfica.png';
import LogoBtv from './Logos/LogoBtv.png';
import LogoDynaby from './Logos/LogoDynaby.png';
import LogoImviso from './Logos/LogoImviso.png';
import LogoOfficialStore from './Logos/LogoOfficialStore.png';
import LogoSep from './Logos/LogoSEP.png';
import BenficaTV from './Logos/Logo_Benfica_TV.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faTicketAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return ( 
        <div className="fondFooter">

           <div className="row p-3 Panthere m-0">
   {/* Logo Eusébio */}
            
               <div className="col-lg-4 col-12 mx-auto ">
                  <div className="col-lg-6 col-12"><img className="Eusebio " src={Eusebio}/></div>
                  <div className="col-lg-6 col-12"></div>
               </div>
   {/* Nos Services */}
               <div className="Services col-lg-4 col-12">
                  <h4 className="pl-2 pt-3 pb-2">NOS SERVICES</h4>
                  <div className="pl-4 pb-3">
                     <FontAwesomeIcon icon={faUtensils} size="2x" className="d-inline align-middle"/>
                     <h5 className="d-inline pl-2 my-auto  align-middle RestaurantSnackCommandes">Restaurant</h5>
                  </div>
                  <div className="pl-4 pb-3">
                     <FontAwesomeIcon icon={faHamburger} size="2x" className="d-inline align-middle"/>
                     <h5 className="d-inline pl-2 my-auto  align-middle RestaurantSnackCommandes">Snack-Bar</h5>
                  </div>
                  <div className="pl-4 pb-3">
                     <FontAwesomeIcon icon={faTicketAlt} size="2x" className="d-inline align-middle"/>
                     <h5 className="d-inline pl-2 align-middle RestaurantSnackCommandes">Commandes de billets</h5>
                  </div>
                  <div className="pl-4 pb-2">
                     <img className="Meo" src={Meo}/>
                  </div>
                  <div className=" pl-4 pb-2">
                     <img className="BenficaTV" src={BenficaTV}/>
                  </div>
               </div>

   {/* Contact et Informations */}
               <div className="Contact col-lg-4 col-12">
                  <h4 className=" pl-2 pt-3 pb-2">CONTACT ET INFORMATIONS</h4>

                  <div className="pl-4 pb-2">
                     <div className="d-inline pl-2 align-middle">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} size="lg" className="d-inline align-middle"/>
                        <h5 className="d-inline align-middle pl-2 ">E-MAIL</h5>
                     </div>
                     <div className="d-inline pt-2 align-middle fontSizeMail">
                        <h6 className="">casabenficatourcoing2212@gmail.com </h6>
                     </div>
                  </div>
                  <div className=" pl-4 pb-2">
                     <div className="d-inline pt-2 align-middle">
                        <FontAwesomeIcon icon={faPhone} size="lg" className="d-inline align-middle"/>
                        <h5 className="d-inline align-middle pl-2 ">TÉLÉPHONE</h5>
                     </div>
                     <div className="d-inline pt-2 align-middle">                        
                        <h6>03 20 11 24 62</h6>
                     </div>
                  </div>
                  <div className="pl-4 pb-2">
                     <div className="d-inline pl-2 align-middle">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" className="d-inline align-middle"/>
                        <h5 className="d-inline align-middle pl-2 ">ADRESSE</h5>
                     </div>
                     <div className="d-inline pl-2 align-middle">                        
                        <h6>188 Rue des Cinq Voies</h6>
                        <h6>59200 Tourcoing</h6>
                     </div>
                  </div>

               </div>
           </div>      
                           
            {/* Sponsors */}
               <div className="d-none d-sm-inline d- col-lg-12 col-4 pt-2 pb-2 mx-auto">
                  <img className="LogosSponsors mx-auto pl-5 pr-5 pt-2 pb-2" src={LogoBenfica}/>  
                  <img className="LogosSponsors mx-auto pt-2 pb-2" src={LogoDynaby}/>
                  <img className="LogosSponsors mx-auto pl-5 pr-5 pt-2 pb-2" src={LogoHubert}/>
                  <img className="LogosSponsors mx-auto pt-2 pb-2" src={LogoImviso}/>
                  <img className="LogosSponsors mx-auto pl-5 pr-5 pt-2 pb-2" src={LogoSep}/>
                  <img className="LogosSponsors mx-auto pt-2 pb-2" src={LogoOfficialStore}/>
                  <img className="LogosSponsorsmx-auto  pl-5 pr-5 pt-2 pb-2" src={LogoBtv}/>
               </div>  

               <div className="d-sm-none d-block mx-auto col-8 pt-2 pb-2 ">                              
                  <img className="LogosSponsors p-2" src={LogoBenfica}/>  
                  <img className="LogosSponsors p-2" src={LogoDynaby}/>
                  <img className="LogosSponsors p-2" src={LogoHubert}/>
                  <img className="LogosSponsors p-2" src={LogoImviso}/>
                  <img className="LogosSponsors p-2" src={LogoSep}/>
                  <img className="LogosSponsors p-2" src={LogoOfficialStore}/>
                  <img className="LogosSponsors p-2" src={LogoBtv}/>
               </div>  

        </div>
        
     );
}
 
export default Footer;