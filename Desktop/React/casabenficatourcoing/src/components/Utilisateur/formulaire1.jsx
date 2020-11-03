import React, { Component } from 'react';

class Formulaire1 extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            email:"",
            password:""
        };   

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({[name]: event.target.value});
      }
    
    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.email + this.state.password);
        event.preventDefault();
    }

    render() { 
        return (  
        <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Test Formulaire
                </button>
            <div className="modal fade" id="exampleModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Formulaire de modification</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <fieldset>
                                    <legend>Formulaire</legend>
                                    
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input 
                                            type="email" 
                                            value={this.state.email} 
                                            name="email" 
                                            className="form-control" 
                                            placeholder="Enter email"
                                            onChange={this.handleChange}  
                                            />                                                             
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input 
                                            type="password" 
                                            value={this.state.password} 
                                            name="password" 
                                            className="form-control" 
                                            placeholder="Password"
                                            onChange={this.handleChange}  
                                            />
                                    </div>
                                    
                                </fieldset>
                        
                                <button type="submit" className="btn btn-primary">Submit</button>
                    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>         
               
        );
    }
}
 
export default Formulaire1;