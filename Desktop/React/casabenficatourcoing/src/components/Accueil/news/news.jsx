import React, { Component } from 'react';
import Pagination from '../../Pagination/common/pagination';
import  { paginate } from '../../../utils/paginate';
import ligneDroite from '../Image/ligneDroite.png';
import ligneGauche from '../Image/ligneGauche.png';
import NewsForm from './newsForm';
import _ from "lodash";
import "./news.scss";
import http from '../../../services/httpService';
import config from '../../../config.json';
{/*import CasaPresentation from '../../Casa-Benfica/casaPresentation/casaPresentation';*/}



class News extends Component {
    state = { 
        news: [],
        currentPage: 1,
        pageSize: 3,
        currentNews:{
            title:"",
            text:""
        },
        action : "create"
    }

    async componentDidMount() {
        const { data: news } = await http.get(config.apiEndpoint);
        this.setState({ news });
    }

    handlePageChange = page => {
        this.setState({ currentPage : page })
    };

    handleUpdate = updatedNews => {
        const news = [...this.state.news];
        const index = news.indexOf(this.state.currentNews);
        news[index] = { ...updatedNews };
        this.setState( {news} );
    }

    handleDelete = async newsId => {
        const originalState = this.state.news;

        const news = this.state.news.filter(n => n._id !== newsId);
        this.setState({ news });
        
        try {
            console.log(newsId)
            await http.delete(config.apiEndpoint + '/' + newsId)  
        } catch (error) {
            if(error.response && error.reponse.status === 404) alert("Cette news a déjà été supprimée")

            this.setState({ news: originalState});
        }

    }
    
    handleCreate = createdNews => {
        const updatedNewsTab = [createdNews, ...this.state.news]
        this.setState({news: updatedNewsTab});
    }

    handleClick = (news) => {
        console.log(news)
        this.setState({ currentNews: news, action: "editate"});
        console.log(this.state.currentNews)
    }

    render() { 
        const { pageSize, currentPage, news: allNews}  = this.state;
        const news = paginate(allNews, currentPage, pageSize)
        const { user } = this.props;
        return (
            <React.Fragment>
                
                {/* <UpdateNewsForm news={} /> */}
                <NewsForm create={this.handleCreate} update={this.handleUpdate} news={this.state.currentNews} action={this.state.action}/>  
                {this.state.news.length === 0 && "Il n'y a pas d'actualité!"}
                { news.map( news => 
                    <div Key={news.id} className="row border m-2 p-3 news" style={{backgroundColor: "rgba(255,255,255,0.4)"}}>
                        <div className="col-sm-4  p-0">
                            <img className="w-100" src="http://placehold.it/400x200" alt=""/>
                        </div>
                        <div className="col ">
                            <h6 className="text-danger text-uppercase mb-0">{news.title}</h6>
                            <small>{ news.date }</small>
                            <p className="mt-3">{news.text}</p>
                            { user && 
                                <React.Fragment>
                                    <button className="btn btn-sm btn-primary mr-2" data-toggle="modal" data-target="#newsForm" onClick={() => this.handleClick(news)} >Modifier</button>
                                    <button onClick={() => this.handleDelete(news._id)} className="btn btn-sm btn-danger">Supprimer</button>
                                </React.Fragment>
                            }
                        </div>
                    </div> )
                }
                <Pagination 
                    itemsCount={this.state.news.length} 
                    pageSize={pageSize} 
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange} 
                />
            </React.Fragment>
        );
    }
}
 
export default News;