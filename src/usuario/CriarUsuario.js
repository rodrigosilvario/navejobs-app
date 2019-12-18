import React, { Component } from 'react'
import {adicionarUsuario} from '../redux/modules/user/actions/UsuarioActions'
import { connect } from 'react-redux';


class CriarUsuario extends Component {
  constructor(props){
    super(props)

    this.initialState = {
      nome : '',
      vaga : '',
      dataNascimento : '',
      email : ''
    }

    this.state = this.initialState

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    if(this.validarFormulario(event.target)){
      this.props.adicionarUsuario(this.state)
      event.preventDefault();
      this.setState(this.initialState)
      this.props.history.push('/usuario');
    }
    event.preventDefault();  
  }

  validarFormulario(form){
    let validacao = 0

    if(form.nome.value === "" || form.nome.value === null ){
      form.nome.classList.add("is-invalid")
      validacao++
    }else{
      form.nome.classList.remove("is-invalid")
    }
    
    if(form.vaga.value === "" || form.vaga.value === null ){
      form.vaga.classList.add("is-invalid")
      validacao++
    }else{
      form.vaga.classList.remove("is-invalid")
    }

    if(form.dataNascimento.value === "" || form.dataNascimento.value === null ){
      form.dataNascimento.classList.add("is-invalid")
      validacao++
    }else{
      form.dataNascimento.classList.remove("is-invalid")
    }
    var regexData = /^[0-9]{2}[/][0-1]{1}[0-9]{1}[/][0-9]{4}$/g
    
    if(regexData.test(form.dataNascimento.value)){
      form.dataNascimento.classList.remove("is-invalid")
    }else{
      validacao++
      form.dataNascimento.classList.add("is-invalid")
    }

    if(form.email.value === "" || form.email.value === null ){
      form.email.classList.add("is-invalid")
      validacao++
    }else{
      form.email.classList.remove("is-invalid")
    }

    var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
    
    if(regexEmail.test(form.email.value)){
      form.email.classList.remove("is-invalid")
    }else{
      validacao++
      form.email.classList.add("is-invalid")
    }

    if(validacao > 0){
      return false
    }else {
      return true
    }
        

  }

  render() {
    return (
    <div className="container pt-5">
      <form className="nave-formularioUsuario" onSubmit = {this.handleSubmit} noValidate>
        <h4 className="mx-4 py-3">Criar Usuário</h4>
        <div className="form-row mx-3">
          <div className="form-group col-sm-4">
            <input 
              type="text" 
              className="form-control" 
              name="nome" 
              value={this.state.nome} 
              onChange={this.handleChange}
              placeholder="Nome"
              required
            />
            <div className="invalid-tooltip">
              Obrigatório.
            </div>
          </div>
        </div>

        <div className="form-row mx-3 pt-3">
          <div className="form-group col-sm-4">
            <input
              type="text"
              className="form-control"
              name="vaga"
              value={this.state.vaga}
              onChange={this.handleChange}
              placeholder="Vaga"
              required
            />
            <div className="invalid-tooltip">
              Obrigatória.
            </div>
          </div>
        </div>

        <div className="form-row mx-3 pt-3">
          <div className="form-group col-sm-4">
            <input
              type="text"
              className="form-control"
              name="dataNascimento"
              value={this.state.dataNascimento}
              onChange={this.handleChange}
              placeholder="Data de Nascimento"
              
            />
            <div className="invalid-tooltip">
              Obrigatória. Formato DD/MM/AAAA
            </div>
          </div>
        </div>

        <div className="form-row mx-3 pt-3">
          <div className="form-group col-sm-4">
            <input
              type="text"
              className="form-control"
              name="email"
              value={this.state.email} 
              onChange={this.handleChange}
              placeholder="Email"
              
            />
            <div className="invalid-tooltip">
              Obrigatório. Formato: email@email.com
            </div>
          </div>
        </div>

        <div className="form-row mx-3 mt-4 d-flex justify-content-center justify-content-sm-start">
          <div className="form-group col-xs-12">
            <button type="submit" className="btn nave-botao">
              ENVIAR
            </button>
          </div>
        </div>
    </form>
    </div>
    )
  }
}

export default connect(undefined, {adicionarUsuario}) (CriarUsuario);

