import React, { Component } from 'react'

class CriarUsuario extends Component {
  render() {
    return (
        <div className="container pt-5">
          <form className="nave-formularioUsuario">
            <h4 className="mx-4 py-3">Criar Usuário</h4>
            <div className="form-row mx-3">
              <div class="form-group col-sm-3">
                <input type="text" className="form-control" placeholder="Nome" required/>
              </div>
            </div>
            <div className="form-row mx-3 pt-3">
              <div className="form-group col-sm-3">
                <input type="text" className="form-control" placeholder="Vaga" required/>
              </div>
            </div>
            <div className="form-row mx-3 pt-3">
              <div className="form-group col-sm-3">
                <input type="text" className="form-control" placeholder="Data de Nascimento" required/>
              </div>
            </div>
            <div className="form-row mx-3 pt-3">
              <div className="form-group col-sm-3">
                <input type="email" className="form-control" placeholder="Email" required/>
              </div>
            </div>
            <div className="form-row mx-3 d-flex justify-content-center justify-content-sm-start">
              <div className="form-group col-xs-12">
                <button type="submit" className="btn nave-botao">ENVIAR</button>
              </div>
            </div>
    </form>
    </div>
    )
  }
}

export default CriarUsuario