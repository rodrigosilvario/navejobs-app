import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class DetalharUsuario extends Component {
    state = {
        nome : 'Erro: Volte para a Home',
        vaga : '',
        dataNascimento : '',
        email : ''
    }

    UNSAFE_componentWillMount() {
        const { match: { params } } = this.props;
        if(this.props.usuarios[params.id] !== undefined){
            this.setState({
                nome : this.props.usuarios[params.id].nome,
                vaga : this.props.usuarios[params.id].vaga,
                dataNascimento : this.props.usuarios[params.id].dataNascimento,
                email : this.props.usuarios[params.id].email
            })
        }
    }

    render() {
    return (
        <div className="container mt-4">
            <div className="nave-detalhe-usuario">

                <div className="row mx-3 py-3">
                    <div className="col-xs-12 font-weight-light">
                        <h4>{this.state.nome}</h4>
                    </div>
                </div>

                <div className="row mx-3 py-3">
                    <div className="col-xs-12 font-weight-light">
                        <b className="font-weight-bold">Vaga: </b>{this.state.vaga}
                    </div>
                </div>

                <div className="row mx-3 py-3">
                    <div className="col-xs-12 font-weight-light">
                    <b className="font-weight-bold">Data de Nascimento: </b>{this.state.dataNascimento}
                    </div>
                </div>

                <div className="row mx-3 py-3">
                    <div className="col-xs-12 font-weight-light">
                    <b className="font-weight-bold">Email: </b> {this.state.email}
                    </div>
                </div>

                <div className="row mx-3 py-3 d-flex justify-content-center justify-content-sm-start">
                    <div className="col-xs-12">
                        <Link to="/usuario">
                            <button type="button" className="btn nave-botao">VOLTAR</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
  }
}

const mapStateToProps = store => ({
    usuarios: store.UsuarioReducer.usuarios
  })
  
  export default connect(mapStateToProps) (DetalharUsuario);