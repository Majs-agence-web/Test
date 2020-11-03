import React, { Component } from 'react';
import './carrouselHomePage.css'


const ModalHomePage = () => {
    return ( 
        <div>
        {/* Début Modal */}
            <button type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
            </button>

            {/*<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">
            Launch demo modal 2
            </button>*/}

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        {/*<div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>*/}
                        <div className="modal-body">
                        {/* Début du formulaire */}
                            <form>
                                {/* Choix de la position */}
                                <div className="form-group mb-">
                                    <label for="Position">En qu'elle position voulez-vous afficher votre contenue ?</label>
                                    <div>
                                
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="Position" id="Position1" value="1"/>
                                            <label className="form-check-label" for="Position">1</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="Position" id="Position2" value="2"/>
                                            <label className="form-check-label" for="Position">2</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="Position" id="Position3" value="3"/>
                                            <label className="form-check-label" for="Position">3</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="Position" id="Position4" value="4"/>
                                            <label className="form-check-label" for="Position">4</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="Position" id="Position5" value="5"/>
                                            <label className="form-check-label" for="Position">5</label>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Fin choix de la position */}

                                {/* Choix du titre */}
                                <div className="form-group">
                                    <label for="Position">Titre</label>
                                    <input type="email" className="form-control" id="titre" placeholder="Saissir un titre..."/>
                                </div>
                                {/* Fin choix du titre */}

                                {/* Choix des mots clés */}
                                <div className="form-group">
                                    <label for="Position">Mots clés</label>
                                    <div className="row ml-1 mr-1">
                                        <input type="text" className="form-control col mr-1 ml-1" id="motCle1" placeholder="Saissir un mot..."/>
                                        <input type="text" className="form-control col mr-1 ml-1" id="motCle2" placeholder="Saissir un mot..."/>
                                        <input type="text" className="form-control col mr-1 ml-1" id="motCle3" placeholder="Saissir un mot..."/>
                                    </div>
                                </div>
                                {/* Fin choix des mots clés */}

                                {/* Affichage de l'image */}
                                <div className="form-group">
                                    <label for="Position">Apercu</label>
                                    <div>

                                    </div>
                                </div>
                                {/* Fin Affichage de l'image */}

                                {/* Choix de l'image */}
                                <div className="form-group">
                                    <label for="Position">Image</label>
                                    <div className="row ml">
                                        <div className="col-7">
                                            <input type="text" className="form-control" id="Image" aria-describedby="Image" placeholder="Importer une image..."/>
                                        </div>
                                        <div className="col-4 buttonColorJaune">
                                            <button type="submit" className="btn btn-warning">Importer</button>
                                        </div>
                                    </div>
                                </div>
                                {/* Fin Choix de l'image */} 

                                {/* début de validation */}
                                <div className="row d-flex justify-content-center">
                                    <div className="buttonColor">
                                        <button type="submit" className="btn btn-success">Valider</button>
                                    </div>
                                    <div className="ml-1">
                                        <button className="btn btn-primary">Retour</button>
                                    </div >
                                </div>
                                {/* Fin de validation */}
                                
                                
                            </form>
                        </div>
                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>*/}
                    </div>
                </div>
            </div>

            {/*<div className="modal fade" id="exampleModal2" tabindex="-2" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        {/* Début du formulaire 
                            <form>
                                {/* Choix de la position 
                                <div className="form-group mb-">
                                    <label for="Position">Qu'elle position voulez-vous modifier ?</label>
                                    <div>
                                
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="Position" id="Position1" value="1"/>
                                            <label className="form-check-label" for="Position">1</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="Position" id="Position2" value="2"/>
                                            <label className="form-check-label" for="Position">2</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="Position" id="Position3" value="3"/>
                                            <label className="form-check-label" for="Position">3</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="Position" id="Position4" value="4"/>
                                            <label className="form-check-label" for="Position">4</label>
                                        </div>

                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="Position" id="Position5" value="5"/>
                                            <label className="form-check-label" for="Position">5</label>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Fin choix de la position */}

                                {/* Choix du titre 
                                <div className="form-group">
                                    <label for="Position">Titre</label>
                                    <input type="email" className="form-control" id="titre" placeholder="Saissir un titre..."/>
                                </div>
                                {/* Fin choix du titre */}

                                {/* Choix des mots clés 
                                <div className="form-group">
                                    <label for="Position">Mots clés</label>
                                    <div className="row ml-1 mr-1">
                                        <input type="text" className="form-control col mr-1 ml-1" id="motCle1" placeholder="Saissir un mot..."/>
                                        <input type="text" className="form-control col mr-1 ml-1" id="motCle2" placeholder="Saissir un mot..."/>
                                        <input type="text" className="form-control col mr-1 ml-1" id="motCle3" placeholder="Saissir un mot..."/>
                                    </div>
                                </div>
                                {/* Fin choix des mots clés */}

                                {/* Affichage de l'image 
                                <div className="form-group">
                                    <label for="Position">Apercu</label>
                                    <div>

                                    </div>
                                </div>
                                {/* Fin Affichage de l'image */}

                                {/* Choix de l'image 
                                <div className="form-group">
                                    <label for="Position">Image</label>
                                    <div className="row ml">
                                        <div className="col-7">
                                            <input type="text" className="form-control" id="Image" aria-describedby="Image" placeholder="Importer une image..."/>
                                        </div>
                                        <div className="col-4 buttonColorJaune">
                                            <button type="submit" className="btn btn-warning">Importer</button>
                                        </div>
                                    </div>
                                </div>
                                {/* Fin Choix de l'image */} 

                                {/* début de validation 
                                <div className="row d-flex justify-content-center">
                                    <div className="buttonColor">
                                        <button type="submit" className="btn btn-success">Modifier</button>
                                    </div>
                                    <div className="ml-1">
                                        <button className="btn btn-primary">Retour</button>
                                    </div >
                                </div>
                                {/* Fin de validation 
                                
                                
                            </form>
                        </div>
                        {/*<div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>*/}

        </div>
     );
}
 
export default ModalHomePage;