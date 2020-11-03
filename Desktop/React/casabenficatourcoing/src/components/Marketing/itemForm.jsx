import React, { Component } from 'react';

class ItemForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    state = { 
       item:   {   
                    label: "", 
                    price: "",
                    priceSocio: ""
                }
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log(
            `Fichier sélectionné - ${
              this.fileInput.current.files[0]
            }`)
    }

    handleChange = ({ currentTarget: input }) => {
        const item = { ...this.state.item };
        item[input.name] = input.value;
        this.setState({ item })
    }

    render() { 
        const { item } = this.state

        return ( 
            <React.Fragment>
                {/* <button className="bg-danger text-white text-uppercase rounded btn" data-toggle="modal" data-target="#newsForm">ajouter une actualité</button> */}
                <div className="modal " id="itemForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-uppercase mx-auto">ajouter un article</h5>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={ this.handleSubmit }>
                                    <div className="form-group">
                                        <label htmlFor="image">Image</label>
                                        <input type="file" class="form-control-file" id="image" ref={this.fileInput} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="label">Nom de l'article</label>
                                        <input value={item.label} onChange={this.handleChange} placeholder="Saisir un nom..." id="label" name="label" type="text" className="form-control" autoFocus/>
                                    </div>
                                    <div className="form-group form-row">
                                        <div className="col">
                                            <label htmlFor="price">Prix non socio</label>
                                            <input value={item.price} onChange={this.handleChange} placeholder="Saisir un prix..." id="price" name="price" className="form-control"/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="priceSocio">Prix socio</label>
                                            <input value={item.priceSocio} onChange={this.handleChange} placeholder="Saisir un prix..." id="priceSocio" name="priceSocio" className="form-control"/>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary float-right">Valider</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ItemForm;