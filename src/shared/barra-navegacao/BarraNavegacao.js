import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BarraNavegacao extends Component {
    render() {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark nave-barra-navegacao">
            <span className="navbar-brand mb-0 h1">
              <img src="img/Branco.png" alt="Logo da Empresa Nave Jobs"/>
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/usuario" className="nav-item nav-link active">Usuários</Link>
            </div>
        </div>
        </nav>
      )
    }
  }

  export default BarraNavegacao;

