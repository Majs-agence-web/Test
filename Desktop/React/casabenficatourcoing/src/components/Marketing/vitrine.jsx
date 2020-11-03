import React, { Component } from 'react';
import Pagination from '../Pagination/common/pagination';
import { paginate } from '../../utils/paginate';
import ligneDroite from './Image/ligneDroite.png'
import ligneGauche from './Image/ligneGauche.png'
import ItemForm from './itemForm';

class Vitrine extends Component {
    state = { 
        articles: [
            {
                id: 1,
                name: "article 1",
                price: 59.99,
                priceSocio: 53.99
            },
            {
                id: 2,
                name: "article 2",
                price: 59.99,
                priceSocio: 53.99
            },
            {
                id: 3,
                name: "article 3",
                price: 59.99,
                priceSocio: 53.99
            },
            {
                id: 4,
                name: "article 4",
                price: 59.99,
                priceSocio: 53.99
            },
            {
                id: 5,
                name: "article 5",
                price: 59.99,
                priceSocio: 53.99
            },
            {
                id: 6,
                name: "article 6",
                price: 59.99,
                priceSocio: 53.99
            },
            {
                id: 7,
                name: "article 7",
                price: 59.99,
                priceSocio: 53.99
            },
            {
                id: 8,
                name: "article 8",
                price: 59.99,
                priceSocio: 53.99
            },
            {
                id: 9,
                name: "article 9",
                price: 59.99,
                priceSocio: 53.99
            },
            {
                id: 10,
                name: "article 10",
                price: 59.99,
                priceSocio: 53.99
            }
        ],
        currentPage: 1,
        pageSize: 9
     }
    
    handlePageChange = page => {
        this.setState({ currentPage : page })
    };

    handleDelete = articleId => {
        const articles = this.state.articles.filter(a => a.id !== articleId);
        this.setState({ articles });
    }

    render() { 
        const { pageSize, currentPage, articles: allArticles}  = this.state;
        const articles = paginate(allArticles, currentPage, pageSize)
        const { user } = this.props;
        return ( 
            <div className="row">
                <div className="col-12 pt-2">
                    <h2 className=" text-center img-fluid pt-3 pb-3" >
                    <img className="ligneTitre img-fluid d-none d-lg-inline pr-2" src={ligneGauche} alt="" />
                    LA VITRINE
                    <img className="ligneTitre img-fluid d-none d-lg-inline pl-2" src={ligneDroite} alt=""/>
                    </h2>
                    {
                        user && 
                        <div className="d-flex">
                            <button className="btn btn-danger mx-auto text-uppercase" data-toggle="modal" data-target="#itemForm">ajouter un article</button>
                            <ItemForm /> 
                        </div> 
                    }
                    
                </div>
                {/* {this.state.articles.length === 0 && "Il n'y a pas d'articles!"} */}
                { articles.map( article => 
                    <div Key={article.id} className="col-lg-4 col-md-6 my-3">
                        <div className="card rounded p-3 mx-auto" style={{width: "20rem"}}>
                            <img className="rounded" Name="card-img-top" src="http://placehold.it/250x250" alt="Card cap" />
                            <div className="card-body px-0 pb-0">
                                <h5 className="card-title text-center">{ article.name }</h5>
                                <p className="card-text d-flex"><span className="h3">{ article.price}€</span><span class="badge badge-danger ml-auto mr-2 align-self-start">SOCIO</span><span className="text-danger h3">{ article.priceSocio }€</span></p>
                                {
                                    user && 
                                    <React.Fragment>
                                        <button className="btn btn-sm btn-primary mr-2">Modifier</button><button onClick={() => this.handleDelete(article.id)} className="btn btn-sm btn-danger">Supprimer</button>
                                    </React.Fragment> 
                                }
                            </div>
                        </div>
                    </div> )
                }
                <div className="col-12">
                    <Pagination 
                        itemsCount={this.state.articles.length} 
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange} 
                    />
                </div>
            </div>
         );
    }
}
 
export default Vitrine;