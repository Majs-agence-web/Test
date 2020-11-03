import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './navebar.scss';
import LogoCasa from './Logos/LogoCasa.png';
import LogoBenfica from './Logos/LogoBenfica.png';
import couronne from './Logos/couronne.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";


const Navbar = ({ user }) => {
    return ( 
        <div className="fondNavbar p-0 m-0">
            
            <div className=" d-none d-lg-block">
                <div className="row p-2 m-0 ">
                    <div className="col-3 pl-4 d-flex align-items-center">
                        <img className="" src={LogoCasa} style={{width:'70%'}} />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col pt-5">
                                <h1 className="text-center" style={{color:"white"}}>Casa Benfica Tourcoing</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5"></div>
                            <h4 className="col-7 text-center pt-3" style={{ color:"#FFEB32"}}>"E PLURIBUS UNUM"</h4>
                        </div>
                    </div>
                    <div className="col-3 d-flex/collumn justify-content-center ">
                        <div className="row"> 
                            <div className="col-7"></div>
                            <div className="col-5 ">
                                <div className="">
                                    <img className="p-0 m-0" src={LogoBenfica} style={{width:'85%'}}/>
                                    <p className=" p-0 m-0 text-center " style={{fontSize:"1.8em",fontWeight:'bold', color:"white"}}>N°224</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div className=" d-none d-md-block d-lg-none p-0 m-0">
                <div className="row d-flex item-align-center pt-3 p-0 m-0">
                    <div className="col">
                        <div className="d-flex justify-content-center">
                            <img className="" src={LogoCasa} style={{width:'60%'}} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-center">  
                                <img className="p-0 m-0" src={LogoBenfica} style={{width:'35%'}}/>
                        </div>
                        <div className="d-flex justify-content-center pt-2">
                            <p className=" p-0 m-0 " style={{fontSize:"2em",fontWeight:'bold', color:"white"}}>N°224</p>
                        </div>
                    </div>
                </div>
                <div className="row p-0 m-0">
                    <div className="col-12">
                        <h1 className="text-center" style={{color:"white"}}>Casa Benfica Tourcoing</h1>
                    </div>
                    <div className="col-12">
                        <h4 className="text-center pt-3" style={{color:"#FFEB32"}}>"E PLURIBUS UNUM"</h4>
                    </div>
                </div>      
            </div>

            <div className="d-sm-block d-md-none p-0 m-0">
                <div className="row d-flex item-align-center pt-3 p-0 m-0">
                    <div className="col">
                        <div className="d-flex justify-content-center">
                            <img className="" src={LogoCasa} style={{width:'70%'}} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-center">  
                            <img className="p-0 m-0" src={LogoBenfica} style={{width:'45%'}}/>
                        </div>
                        <div className="d-flex justify-content-center pt-2">
                            <p className=" p-0 m-0 " style={{fontSize:"1.5em",fontWeight:'bold', color:"white"}}>N°224</p>
                        </div>
                    </div>
                </div>
                <div className="row p-0 m-0 pt-2">
                    <div className="col-12">
                        <h3 className="text-center" style={{color:"white"}}>Casa Benfica Tourcoing</h3>
                    </div>
                    <div className="col-12">
                        <h5 className="text-center pt-3" style={{color:"#FFEB32"}}>"E PLURIBUS UNUM"</h5>
                    </div>
                </div>      
            </div>  
            
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fondMenu">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <NavLink className="nav-item active nav-link souligner" to="/">               
                                ACCUEIL
                        </NavLink>
        
                            
                        <NavLink className="nav-item active nav-link souligner" to="/CasaPresentation">               
                                LA CASA
                        </NavLink>

                        <div className="nav-item active dropdown souligner" to="">
                        
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">FUTSAL</a>
                                                              
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/PresentationEquipe">Présentation des équipes</a>
                                    <a className="dropdown-item" href="/ResultatCalendrier">Matchs et résultats</a>
                                </div>
                        </div> 
                        <div className="nav-item active dropdown souligner" to="">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">RUNNING</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Présentation des coureurs</a>
                                </div>
                        </div>    
                        <NavLink className="nav-item active nav-link souligner" to="/tatoo">
                            TATOUAGES
                        </NavLink>     
                        <NavLink className="nav-item active nav-link souligner" to="/marketing">
                            MARKETING
                        </NavLink>
                        
                            <li className="nav-item active souligner">
                                <a className="nav-link text-uppercase" href="#"><img className="text-align-center pr-1 couronne"src={couronne}/>espace eusébio<img className="text-align-center pl-1 couronne"src={couronne}/></a>
                            </li>
                        <NavLink className="nav-item active nav-link souligner" to="">               
                            STADE DE LA LUZ
                        </NavLink>
                    </ul>
                    { user && (
                        <NavLink className="nav-item nav-link text-warning" to="/deconnexion">
                            <button className="btn-danger" style={{borderRadius:"20px"}}>
                            <FontAwesomeIcon icon={faPowerOff} size="md"  />
                            </button>
                        </NavLink>
                    )}
                      
                    

                </div>
            </nav>
            
        </div>
        
     );
}
 
export default Navbar;