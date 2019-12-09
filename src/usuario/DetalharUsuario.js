import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DetalharUsuario extends Component {
  render() {
    return (
        <div className="container mt-4">
            <div className="nave-detalhe-usuario">
                <div className="row mx-3 py-3">
                    <div className="col-xs-12">
                        <h4>Nome do Usuário</h4>
                    </div>
                </div>
                <div className="row mx-3 py-3">
                    <div className="col-xs-12">
                    Vaga:
                    </div>
                </div>
                <div className="row mx-3 py-3">
                    <div className="col-xs-12">
                        Data de Nascimento:
                    </div>
                </div>
                <div className="row mx-3 py-3">
                    <div className="col-xs-12">
                        Email:
                    </div>
                </div>
                <div className="row mx-3 py-3 d-flex justify-content-center justify-content-sm-start">
                    <div className="col-xs-12">
                        <Link to="/usuarios">
                            <button type="button" className="btn nave-botao">VOLTAR</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default DetalharUsuario