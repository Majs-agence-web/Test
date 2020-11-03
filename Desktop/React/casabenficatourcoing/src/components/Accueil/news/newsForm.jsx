import React, { Component } from 'react';
import axios from "axios";
import http from '../../../services/httpService';
import config from '../../../config.json';


class NewsForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
        this.close = React.createRef();
    }

    state = {
        news:  {
            title: "",
            content: ""
        }
    }

    componentWillReceiveProps({ news }) {
        this.setState({ news })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const obj = this.state.news;
        if(this.props.action === "create"){
            const { data: createdNews } = await http.post(config.apiEndpoint, obj);
            this.props.create(createdNews);
        }else{
            await http.put(config.apiEndpoint+'/'+ this.props.news._id, obj);
            this.props.update(obj);
        }

        
        this.close.current.click();
        const news = { title:"", content:""};
        this.setState({ news });
        // console.log(
        //     `Fichier sélectionné - ${
        //       this.fileInput.current.files[0]
        //     }`)
    }

    handleChange = ({ currentTarget: input }) => {
        const news = { ...this.state.news };
        news[input.name] = input.value;
        this.setState({ news })
    }

    render() {
        const { news } = this.state

        return (
            <React.Fragment>
                {/* <button className="bg-danger text-white text-uppercase rounded btn" data-toggle="modal" data-target="#newsForm">ajouter une actualité</button> */}
                <div class="modal " id="newsForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Ajouter une news</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" ref={this.close}>
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={ this.handleSubmit }>
                                    <div className="form-group">
                                        <label htmlFor="titre">Titre</label>
                                        <input value={news.title} onChange={this.handleChange} placeholder="Saisir un titre..." id="titre" name="title" type="text" className="form-control" autoFocus/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="texte">Texte</label>
                                        <textarea value={news.content} onChange={this.handleChange} placeholder="Saisir un texte..." id="texte" name="content" className="form-control" rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="image">Image</label>
                                        <input type="file" class="form-control-file" id="image" ref={this.fileInput} />
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

export default NewsForm;