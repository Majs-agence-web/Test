import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Header-Footer/navbar/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Accueil from "./components/Accueil/bodyHomePage.jsx";
import Formulaire1 from "./components/Utilisateur/formulaire1";
import Footer from "./components/Header-Footer/footer/footer";
import CasaPresentation from "./components/Casa/PresentationCasa/casaPresentation.jsx";
import BodyHomePage from "./components/Accueil/bodyHomePage.jsx";
import Carrousel from "./components/Accueil/Carrousel/carrouselHomePage.jsx"
import Tatoo from "./components/Tatouage/tatoo";
import LoginForm from "./components/Utilisateur/loginForm";
import Logout from "./components/Utilisateur/logout";
import auth from "./services/authService";
import Vitrine from "./components/Marketing/vitrine";
import ResultatCalendrier from "./components/CalendrierResultat/resultatCalendrier";
import PresentationEquipe from './components/Equipe/FutSall/PresentationEquipe.jsx';
import StadeDeLaLuz from './components/StadeDeLaLuz/StadeDeLaLuz';

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <Router>
            {/* Header */}
              <Navbar user={this.state.user} />
            {/* Fin Header */}

            {/* Home Page */}
            <Route exact path="/" component={Carrousel} />
              <div className="container-fluid">

                <Route
                 exact path="/"
                  render={(props) => (
                    <BodyHomePage {...props} user={this.state.user} />
                  )}
                />
                {/* <Route path="/Carrousel" component={BodyHomePage} /> */}
              </div>
            {/* Fin Home Page */}

            {/* Casa Benfica */}
              <div className="">
                <Route path="/CasaPresentation" component={CasaPresentation} />
              </div>
            {/* Casa Benfica */}

            {/* Présenation Equipe FutSall */}
              <div className="">
                <Route path="/PresentationEquipe" component={PresentationEquipe} />
              </div>
            {/* Fin Présenation Equipe FutSall */}

            {/* Marketing */}
              <Route
                path="/marketing"
                render={(props) => <Vitrine {...props} user={this.state.user} />}
              />
            {/* Fin Marketing */}

              <Route path="/formulaire1" component={Formulaire1} />
              <Route path="/admin" component={LoginForm} />
              <Route path="/deconnexion" component={Logout} />

            {/* Tatoo */}
              <Route path="/tatoo" component={Tatoo} />
            {/* Tatoo */}

            {/* ResultatCalendrier */}
              <Route path="/ResultatCalendrier" component={ResultatCalendrier} />
            {/* ResultatCalendrier */}

            {/* ResultatCalendrier */}
                <Route path="/StadeDeLaLuz" component={StadeDeLaLuz} />
            {/* ResultatCalendrier */}



            {/* Footer */}
              <Footer />
            {/* Fin Footer */}
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
