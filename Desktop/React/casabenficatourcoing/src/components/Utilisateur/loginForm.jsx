import React, { Component } from 'react';
import auth from '../../services/authService'

class LoginForm extends Component {
    state = { 
        data: { username: "", password: ""},
        errors: {}
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // try {
            const { data } = this.state;
            auth.login(data.username, data.password);
            window.location = "/";
        // } catch ( error) {
        //     if(error.response && error.response.status === 400) {
        //         const errors = {...this.state.errors};
        //         errors.username = errors.response.data;
        //         this.setState({errors})
        //     }   
        // }
    }

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data })
    }

    render() { 
        const { data } = this.state;
        return ( 
            <div className="container my-5">
                <h1 className="text-center" >Connexion</h1>
                <form  onSubmit={this.handleSubmit} className="w-50 mx-auto clearfix">
                    <div className="form-group ">
                        <label htmlFor="username">Utilisateur</label>
                        <input id="username" value={data.username} onChange={this.handleChange} autoFocus name="username" className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input id="password" value={data.password} onChange={this.handleChange} name="password" className="form-control" type="password" />
                    </div>
                    <button  className="btn btn-primary float-right">Valider</button>
                </form>
            </div>
         );
    }
}
 
export default LoginForm;