import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import BarraNavegacao from './shared/barra-navegacao/BarraNavegacao';
import Home from './home/Home'
import ListarUsuario from './usuario/ListarUsuario';
import DetalharUsuario from './usuario/DetalharUsuario'
import CriarUsuario from './usuario/CriarUsuario';


class App extends Component {
  render() {
    return (
        <div>
          <BarraNavegacao />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/usuarios" component={ListarUsuario} />
            <Route path="/criarUsuario" component={CriarUsuario} />
            <Route path="/usuarioDetalhe" component={DetalharUsuario} />
          </Switch>
        </div>
    )
  }
}

export default App
