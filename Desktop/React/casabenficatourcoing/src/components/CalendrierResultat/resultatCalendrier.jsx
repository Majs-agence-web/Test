
import React, { Component } from 'react';
import Pagination from '../Pagination/common/pagination';
import { paginate } from '../../utils/paginate';
import ligneDroite from './images/ligneDroite.png';
import ligneGauche from './images/ligneGauche.png';
import './resultatCalendrier.scss';
import logoCasa from "./images/logoCasa.png";
import logoSaintPole from "./images/logoSaintPole.png";

class matchCalendrier extends Component {
    state = { 
        articles: [
            {
                id: 1,
                nomEquipeA: "TOURCOING M.D.B.2",
                villeEquipeA: "TOURCOING",
                salleEquipeA: "Salle Rita Gérard",
                nomEquipeB: "ST POL FUTSAL",
                villeEquipeB: "ST POL",
                salleEquipeB: "Salle Equipe B"
            },

            {
                id: 2,
                nomEquipeA: "TOURCOING M.D.B.2",
                villeEquipeA: "TOURCOING",
                salleEquipeA: "Salle Rita Gérard",
                nomEquipeB: "ST POL FUTSAL",
                villeEquipeB: "ST POL",
                salleEquipeB: "Salle Equipe B"
            },

            {
                id: 3,
                nomEquipeA: "TOURCOING M.D.B.2",
                villeEquipeA: "TOURCOING",
                salleEquipeA: "Salle Rita Gérard",
                nomEquipeB: "ST POL FUTSAL",
                villeEquipeB: "ST POL",
                salleEquipeB: "Salle Equipe B"
            },

            {
                id: 4,
                 nomEquipeA: "TOURCOING M.D.B.2",
                villeEquipeA: "TOURCOING",
                salleEquipeA: "Salle Rita Gérard",
                nomEquipeB: "ST POL FUTSAL",
                villeEquipeB: "ST POL",
                salleEquipeB: "Salle Equipe B"
            }
        ],
        currentPage: 1,
        pageSize: 3
     } 

     handlePageChange = page => {
        this.setState({ currentPage : page })
    };

render() {   
    const { pageSize, currentPage, articles: allArticles}  = this.state;
    const articles = paginate(allArticles, currentPage, pageSize)
    return ( 
    <div className="pb-3">
        <div className="">
            <h2 className=" text-center pt-3 pb-3 mx-auto" >
                <img className="ligneTitre img-fluid d-none d-lg-inline pr-2" src={ligneGauche} />
                CALENDRIER ET RÉSULTATS
                <img className="ligneTitre img-fluid d-none d-lg-inline pl-2" src={ligneDroite} />
            </h2> 
        </div>
            
        <div className="row pb-3">
            {/* Equipe A*/}
            <div className=" col-lg-6 col-12 mx-auto separationLigne">                
                <p className="text-center nomEquipe pl-5">EQUIPE A</p>  
                <p className="text-center sousTitre pt-3">SCORE MATCH PRÉCÉDENT</p>
                {/* Carte des scores*/}
                <div className="row pb-4">
                    <div className="col-md-3 col-1"></div>
                    <div className="col-md-6 col-10 carteScore pt-3 pb-3">

                        {/* Nom Des Equipes */}
                        <div className="row text-center">
                            <div className="col-5 titreCarteScore  pt-3">
                                <p className="titreSorePadding">TOURCOING M.D.B.2</p>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-5 titreCarteScore  pt-3">
                                <p className="titreSorePadding">ST POL FUTSAL</p>
                            </div>
                        </div>
                        {/* Nom Des Equipes */}

                        {/* Fanion */}
                        <div className="row text-center">
                            <div className="col-5 texteCarteScore">
                                <img src={logoCasa} />
                            </div>
                            <div className="col-2"></div>
                            <div className="col-5 texteCarteScore">
                                <img src={logoSaintPole} />
                            </div>
                        </div>
                        {/* Fanion */}

                        {/* Score */}
                        <div className="row text-center ">
                            <div className="col-5 texteCarteScore ">
                                <div><p>18</p></div>
                            </div>
                            <div className="col-2 texteCarteScore">-</div>
                            <div className="col-5 texteCarteScore">
                                <p>18</p>
                            </div>
                        </div>
                        {/* Score */}

                    </div>
                    {/* Carte des scores*/}
                    <div className="col-md-3 col-1"></div>
                </div>
    {/* Calendrier 1*/}
    { articles.map( article =>  
            <div Key={article.id} className="row pb-2">
                <div className="col-1"></div>
                <div className="col-10 carteCalendrier">                      
                    <div className="text-center Calendrier">
                        <div className="dateCalendrier">Le 02/10/2020</div>
                        <div className="">{article.salleEquipeA}</div>
                        <div className="">{article.villeEquipeA}</div>
                    </div>                       
                    <div className="text-center row Calendrier pt-3">
                        <div className="col-5 d-inline"><img className="logoEquipe" src={logoCasa}/></div>
                        <div className="col-2 d-inline"><p className="heureMatch">18h30</p></div>
                        <div className="col-5 d-inline logoEquipe"><img className="logoEquipe" src={logoSaintPole}/></div>
                    </div> 
                    <div className="text-center row  pt-3 ">
                        <div className="col-5 d-inline text-center"><p className="nomEquipe">{article.nomEquipeA}</p></div>
                        <div className="col-2 d-inline"></div>
                        <div className="col-5 d-inline"><p className="nomEquipe">{article.nomEquipeB}</p></div>                        
                    </div> 
                </div>
                <div className="col-1"></div>  
            </div>)
     }        
    
        </div>            
            {/* Equipe A*/}

            {/* Equipe B*/}

            <div className="col-lg-6 col-12 mx-auto backgroundNomEquipe " >                
                <p className="text-center nomEquipe pl-5">EQUIPE B</p>

                <p className="text-center sousTitre pt-3">SCORE MATCH PRÉCÉDENT</p>
                {/* Carte des scores*/}
                <div className="row pb-4">
                    <div className="col-md-3 col-1"></div>
                    {/* Carte des scores*/}
                    <div className="col-md-6 col-10 carteScore pt-3 pb-3">
                        {/* Nom Des Equipes */}
                        <div className="row text-center pt-2 ">
                            <div className="col-5 titreCarteScore ">
                                <p className="titreSorePadding">TOURCOING M.D.B.2</p>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-5 titreCarteScore">
                                <p className="titreSorePadding">ST POL FUTSAL</p>
                            </div>
                        </div>
                        {/* Nom Des Equipes */}

                        {/* Fanion */}
                        <div className="row text-center">
                            <div className="col-5 texteCarteScore ">
                                <img src={logoCasa} />
                            </div>
                            <div className="col-2"></div>
                            <div className="col-5 texteCarteScore">
                                <img src={logoSaintPole} />
                            </div>
                        </div>
                        {/* Fanion */}

                        {/* Score */}
                        <div className="row text-center ">
                            <div className="col-5 texteCarteScore ">
                                <p>18</p>
                            </div>
                            <div className="col-2 texteCarteScore">-</div>
                            <div className="col-5 texteCarteScore">
                                <p>18</p>
                            </div>
                        </div>
                        {/* Score */}
                    </div>
                    <div className="col-md-3 col-1"></div>
                </div>
            {/* Calendrier 1*/}
            { articles.map( article =>  
                <div Key={article.id} className="row pb-2">
                    <div className="col-1"></div>
                    <div className="col-10 carteCalendrier">                      
                        <div className="text-center Calendrier">
                            <div className="dateCalendrier">Le 02/10/2020</div>
                            <div className="">{article.salleEquipeA}</div>
                            <div className="">{article.villeEquipeA}</div>
                        </div>                       
                        <div className="text-center row Calendrier pt-3">
                            <div className="col-5 d-inline"><img className="logoEquipe" src={logoCasa}/></div>
                            <div className="col-2 d-inline"><p className="heureMatch">18h30</p></div>
                            <div className="col-5 d-inline logoEquipe"><img className="logoEquipe" src={logoSaintPole}/></div>
                        </div> 
                        <div className="text-center row  pt-3 ">
                            <div className="col-5 d-inline text-center"><p className="nomEquipe">{article.nomEquipeA}</p></div>
                            <div className="col-2 d-inline"></div>
                            <div className="col-5 d-inline"><p className="nomEquipe">{article.nomEquipeB}</p></div>                        
                        </div> 
                    </div>
                    <div className="col-1"></div>  
                </div>)
        }        
    
                </div>
            {/* Equipe B*/}
        
        </div>        
            <Pagination 
                        itemsCount={this.state.articles.length} 
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange} 
                    />            
        
    </div>

     );
    }
}
 
export default matchCalendrier;