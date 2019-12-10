import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import TabelaUsuario from './TabelaUsuario'
import { connect } from 'react-redux';

class ListarUsuario extends Component {
  
 render() {
    return (
        <div className="container mt-5">
          <div className="row mx-2 d-flex justify-content-between">
            <div className="col-xs-6">
                <h4 className="nave-titulo-pagina"> Usuários </h4>
            </div>
            <div className="col-xs-6">
              <Link to="/criarUsuraio">
                <button type="button" className="btn nave-botao">CRIAR</button>
              </Link>
            </div>
          </div>
          <TabelaUsuario listaUsuarios={this.props.usuarios}/> 
        </div>
    )
  }
}

const mapStateToProps = store => ({
  usuarios: store.UsuarioReducer.usuarios
})

export default connect(mapStateToProps) (ListarUsuario);


