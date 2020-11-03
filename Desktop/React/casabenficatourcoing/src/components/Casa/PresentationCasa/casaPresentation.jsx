import React, { Component } from 'react';
import ligneDroite from './images/ligneDroite.png';
import ligneGauche from './images/ligneGauche.png';
import facadeCasa from './images/facadeCasa.png';
import paolo from './images/Paolo.jpg'
import photoCasa1 from './images/photoCasa1.png'
import photoCasa2 from './images/photoCasa2.png'
import photoCasa3 from './images/photoCasa3.png'
import photoCasa4 from './images/photoCasa4.png'
import photoCasa5 from './images/photoCasa5.jpg'
import vitrine1 from './images/vitrine 1.png'
import vitrine2 from './images/vitrine 2.png'
import vitrine3 from './images/vitrine 3.png'
import separation from './images/Separation.png'
import equipe1 from './images/equipe1.png'
import equipe2 from './images/equipe2.png'
import equipe3 from './images/equipe3.png'
import './casaPresentation.scss';
import CarrouselVitrine from '../VitrineCarrousel/vitrine'


const CasaPresentation = () => {
    return ( 
        <div className="backgroundCasaPresentation">
            <div className="text-center pt-4 pb-4">

                    {/*<div className="float-right">
                        <img className="pl-3 img-fluid photoPaolo" src={paolo}/>
                        <p className="text-center">Paolo Peixoto</p>
                    </div>*/}

                {/* Titre */}
                <h2 className=" text-center img-fluid d-inline" >
                    <img className="ligneTitre img-fluid d-none d-lg-inline pr-2" src={ligneGauche} />
                    LA CASA BENFICA DE TOURCOING
                    <img className="ligneTitre img-fluid d-none d-lg-inline pl-2" src={ligneDroite} />
                </h2>
                {/* Fin Titre */}

                {/* Qui sommes nous ? */}
                <div className="container pt-4 ">
                    <div className="row">

                        <div className="col-lg-4 d-flex align-items-center ">
                            <div className="d-none d-lg-block">
                                <img className="pr-3 img-fluid photoCasa5 " style={{width:'100%',height:'auto'}} src={facadeCasa}/>
                            </div>
                        </div>  

                        <div className="col-12 col-lg-8">
                            <h4 className="text-left">Qui sommes nous ?</h4>
                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet 
                                    ex quis felis fringilla molestie. Mauris egestas, metus quis posuere finibus, 
                                    justo sem condimentum velit, sed pharetra ex erat eleifend risus. Ut ut ante 
                                    arcu. Aenean tempor, orci vel ullamcorper viverra, nibh metus scelerisque 
                                    lorem, ac placerat ex augue et sapien. Nullam lobortis neque tincidunt 
                                    quam sodales, a rutrum ligula tempus. Nunc est odio, mollis et orci a, 
                                    rutrum porta nibh. Pellentesque tristique sed lacus in faucibus. Sed quis 
                                    quam maximus, lacinia risus in, pulvinar sapien. Duis et pulvinar mi, nec 
                                    consectetur dui. Aenean interdum, ante nec dapibus tempor, nunc nisl 
                                    consequat est, eu pulvinar purus nibh eget purus. Maecenas vitae gravida 
                                    est. Phasellus suscipit vehicula finibus. Curabitur iaculis justo aliquet tortor 
                                    hendrerit tincidunt ut non velit. Sed condimentum nec lorem at commodo.
                                </p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <div className="d-md-block d-lg-none">
                                <img className="img-fluid photoCasa5 " style={{width:'90%',height:'auto'}} src={facadeCasa}/>
                            </div>
                        </div>   
                        
                    </div>
                </div> 
                {/* Fin Qui sommes nous ? */}

                {/* Séparation */}
                    {/* Grand */}
                    <div className="d-none d-md-block">
                        <img src={separation} className="img-fluid" style={{width:'30em',height:'auto'}}></img>
                    </div>
                    {/* Fin Grand */}
                    {/* Petit */}
                    <div className="d-sm-block d-md-none">
                        <img src={separation} className="img-fluid" style={{width:'17em',height:'auto'}}></img>
                    </div>
                    {/* Fin Petit */}
                {/* Fin Séparation */}

                {/* Restauration */}
                <div className="container pt-4">

                    <div className="">
                        <h4 className="text-left">Restauration</h4>
                            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet 
                                ex quis felis fringilla molestie. Mauris egestas, metus quis posuere finibus, 
                                justo sem condimentum velit, sed pharetra ex erat eleifend risus. Ut ut ante 
                                arcu. Aenean tempor, orci vel ullamcorper viverra, nibh metus scelerisque 
                                lorem, ac placerat ex augue et sapien. Nullam lobortis neque tincidunt 
                                quam sodales, a rutrum ligula tempus. Nunc est odio, mollis et orci a, 
                                rutrum porta nibh. Pellentesque tristique sed lacus in faucibus. Sed quis 
                                quam maximus, lacinia risus in, pulvinar sapien. Duis et pulvinar mi, nec 
                                consectetur dui. Aenean interdum, ante nec dapibus tempor, nunc nisl 
                                consequat est, eu pulvinar purus nibh eget purus. Maecenas vitae gravida 
                                est. Phasellus suscipit vehicula finibus. Curabitur iaculis justo aliquet tortor 
                                hendrerit tincidunt ut non velit. Sed condimentum nec lorem at commodo.
                            </p>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 col-lg photoPaolo">
                            <img className=" pl-3 img-fluid " src={photoCasa1}/>
                            <figcaption className="figure-caption">TEST</figcaption>
                        </div>

                        <div className="col-12 col-md-6 col-lg photoPaolo">
                            <img className="pl-3 img-fluid" src={photoCasa2}/>
                            <figcaption className="figure-caption">TEST</figcaption>
                        </div>

                        <div className="col-12 col-md-6 col-lg photoPaolo">
                            <img className="pl-3 img-fluid" src={photoCasa3}/>
                            <figcaption className="figure-caption">TEST</figcaption>
                        </div>

                        <div className="col-12 col-md-6 col-lg photoPaolo">
                            <img className="pl-3 img-fluid" src={photoCasa4}/>
                            <figcaption className="figure-caption">TEST</figcaption>                                                  
                        </div>
                    </div>
               </div>
                {/* Fin Restauration */}

                {/* Séparation */}
                    {/* Grand */}
                    <div className="d-none d-md-block">
                        <img src={separation} className="img-fluid" style={{width:'30em',height:'auto'}}></img>
                    </div>
                    {/* Fin Grand */}
                    {/* Petit */}
                    <div className="d-sm-block d-md-none">
                        <img src={separation} className="img-fluid" style={{width:'17em',height:'auto'}}></img>
                    </div>
                    {/* Fin Petit */}
                {/* Fin Séparation */}

                {/* Passion */}  
                <div className="container pt-4 ">
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-center ">
                            <div className="d-none d-lg-block">
                                <img className="pr-3 img-fluid photoCasa5 " style={{width:'100%',height:'auto'}} src={photoCasa5}/>
                            </div>
                        </div>    

                        <div className="col-12 col-lg-8">
                            <h4 className="text-left">Passion</h4>
                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet 
                                    ex quis felis fringilla molestie. Mauris egestas, metus quis posuere finibus, 
                                    justo sem condimentum velit, sed pharetra ex erat eleifend risus. Ut ut ante 
                                    arcu. Aenean tempor, orci vel ullamcorper viverra, nibh metus scelerisque 
                                    lorem, ac placerat ex augue et sapien. Nullam lobortis neque tincidunt 
                                    quam sodales, a rutrum ligula tempus. Nunc est odio, mollis et orci a, 
                                    rutrum porta nibh. Pellentesque tristique sed lacus in faucibus. Sed quis 
                                    quam maximus, lacinia risus in, pulvinar sapien. Duis et pulvinar mi, nec 
                                    consectetur dui. Aenean interdum, ante nec dapibus tempor, nunc nisl 
                                    consequat est, eu pulvinar purus nibh eget purus. Maecenas vitae gravida 
                                    est. Phasellus suscipit vehicula finibus. Curabitur iaculis justo aliquet tortor 
                                    hendrerit tincidunt ut non velit. Sed condimentum nec lorem at commodo.
                                </p>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <div className="d-md-block d-lg-none">
                                <img className="img-fluid photoCasa5 " style={{width:'90%',height:'auto'}} src={photoCasa5}/>
                            </div>
                        </div>    

                    </div>
                </div> 
                {/* Fin Passion */} 

                {/* Séparation */}
                    {/* Grand */}
                    <div className="d-none d-md-block">
                        <img src={separation} className="img-fluid" style={{width:'30em',height:'auto'}}></img>
                    </div>
                    {/* Fin Grand */}
                    {/* Petit */}
                    <div className="d-sm-block d-md-none">
                        <img src={separation} className="img-fluid" style={{width:'17em',height:'auto'}}></img>
                    </div>
                    {/* Fin Petit */}
                {/* Fin Séparation */}

                {/* Vitrine */}  
                <div className="container pt-4">
     
                    <div className="row">
                        <div className="col-12 col-lg-10">
                            <h4 className="text-left">Une vitrine</h4>
                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet 
                                    ex quis felis fringilla molestie. Mauris egestas, metus quis posuere finibus, 
                                    justo sem condimentum velit, sed pharetra ex erat eleifend risus. Ut ut ante 
                                    arcu. Aenean tempor, orci vel ullamcorper viverra, nibh metus scelerisque 
                                    lorem, ac placerat ex augue et sapien. Nullam lobortis neque tincidunt 
                                    quam sodales, a rutrum ligula tempus. Nunc est odio, mollis et orci a, 
                                    rutrum porta nibh. Pellentesque tristique sed lacus in faucibus. Sed quis 
                                    quam maximus, lacinia risus in, pulvinar sapien. Duis et pulvinar mi, nec 
                                    consectetur dui. Aenean interdum, ante nec dapibus tempor, nunc nisl 
                                    consequat est, eu pulvinar purus nibh eget purus. Maecenas vitae gravida 
                                    est. Phasellus suscipit vehicula finibus. Curabitur iaculis justo aliquet tortor 
                                    hendrerit tincidunt ut non velit. Sed condimentum nec lorem at commodo.
                                </p>   
                        </div>

                        {/* Carrousel > LG */}  
                        <div className="col-12 col-lg-2 d-flex align-items-center">
                            <div className="d-none d-md-none d-lg-block">
                                <CarrouselVitrine/>
                            </div>
                        </div>
                        {/* Fin Carrousel > LG */} 

                        {/* Photo static < LG */} 
                        <div className="col-12 d-none d-md-block d-lg-none">
                            <div className="d-flex justify-content-around">
                                <div className="">
                                    <img className="pl-3 img-fluid photoPaolo" src={vitrine1}/>
                                    <figcaption class="figure-caption">TEST</figcaption>   
                                </div>
                                <div className="">
                                    <img className="pl-3 img-fluid photoPaolo" src={vitrine2}/>
                                    <figcaption class="figure-caption">TEST</figcaption>   
                                </div>
                                <div className="">
                                    <img className="pl-3 img-fluid photoPaolo" src={vitrine3}/>
                                    <figcaption className="figure-caption">TEST</figcaption>   
                                </div>
                            </div>
                        </div>
                        {/* Fin Photo static < LG */}

                        {/* Carrousel  SM */}
                        <div className="col-12 d-flex justify-content-center">
                            <div style={{width:'250px', height:'auto'}} className="d-sm-block d-md-none">
                                <CarrouselVitrine/>
                            </div>
                        </div>  
                        {/* Fin Carrousel SM */}

                    </div>
                </div>
                {/* Fin  Vitrine */}  

                {/* Séparation */}
                    {/* Grand */}
                    <div className="d-none d-md-block">
                        <img src={separation} className="img-fluid" style={{width:'30em',height:'auto'}}></img>
                    </div>
                    {/* Fin Grand */}
                    {/* Petit */}
                    <div className="d-sm-block d-md-none">
                        <img src={separation} className="img-fluid" style={{width:'17em',height:'auto'}}></img>
                    </div>
                    {/* Fin Petit */}
                {/* Fin Séparation */}

                {/* La Casa Benfica de Tourcoing c'est aussi */}  
                <div className="container pt-4">
                    
                    <div className="row">
                        <div className="col-12 col-lg-9">
                            <h4 className="text-left">La Casa Benfica de Tourcoing c'est aussi ...</h4>
                                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet 
                                    ex quis felis fringilla molestie. Mauris egestas, metus quis posuere finibus, 
                                    justo sem condimentum velit, sed pharetra ex erat eleifend risus. Ut ut ante 
                                    arcu. Aenean tempor, orci vel ullamcorper viverra, nibh metus scelerisque 
                                    lorem, ac placerat ex augue et sapien. Nullam lobortis neque tincidunt 
                                    quam sodales, a rutrum ligula tempus. Nunc est odio, mollis et orci a, 
                                    rutrum porta nibh. Pellentesque tristique sed lacus in faucibus. Sed quis 
                                    quam maximus, lacinia risus in, pulvinar sapien. Duis et pulvinar mi, nec 
                                    consectetur dui. Aenean interdum, ante nec dapibus tempor, nunc nisl 
                                    consequat est, eu pulvinar purus nibh eget purus. Maecenas vitae gravida 
                                    est. Phasellus suscipit vehicula finibus. Curabitur iaculis justo aliquet tortor 
                                    hendrerit tincidunt ut non velit. Sed condimentum nec lorem at commodo.
                                </p>
                        </div>
                        <div className=" col-12 col-lg-3 d-flex justify-content-center">
                            <img className="pl-3 img-fluid photoEquipe pb-3" src={equipe3}/>
                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-12 col-md-6 pb-3">
                            <img className=" pl-3 img-fluid photoEquipe" src={equipe1}/> 
                        </div>

                        <div className="col-12 col-md-6 ">
                            <img className="pl-3 img-fluid photoEquipe" src={equipe2}/> 
                        </div>
                    </div>

               </div>
                {/* Fin La Casa Benfica de Tourcoing c'est aussi */}  
            </div>
        </div>

     );
}
 
export default CasaPresentation ;