import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import BarraNavegacao from './shared/barra-navegacao/BarraNavegacao';
import Home from './home/Home'
import ListarUsuario from './usuario/ListarUsuario';
import DetalharUsuario from './usuario/DetalharUsuario'
import CriarUsuario from './usuario/CriarUsuario';
import UsuarioAPI from './api/UsuarioAPI'
import {inicializarStoreUsuarios} from './usuario/actions/UsuarioActions'
import { connect } from 'react-redux';



class App extends Component {
  
  async UNSAFE_componentWillMount() {
    this.props.inicializarStoreUsuarios(await UsuarioAPI.getUsuarios())
   }

  render() {
    return (
        <div>
          <BarraNavegacao />
          <Switch>
            <Route exact path="/"component={Home} />
            <Route path="/usuario" component={ListarUsuario}/>
            <Route path='/criarUsuraio' component={CriarUsuario} />
            <Route path="/detalheUsuario/:id" component={DetalharUsuario} />
          </Switch>
        </div>
    )
  }
}

//export default App
export default connect(undefined, {inicializarStoreUsuarios}) (App);
