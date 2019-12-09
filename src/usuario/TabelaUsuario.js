import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TabelaUsuario extends Component {
  render() {
    return (
        <div className="table-responsive">
            <table className="table nave-tabela mt-4">
               <TableHeader/>
                <tbody> 
                    <tr>
                        <th scope="row"><Link to="/usuarioDetalhe">1</Link></th>
                        <td>Rodrigo Barbosa da Silva   </td>
                        <td>Desenvolvedor Front-end</td>
                        <td>05/02/1990</td>
                        <td>rodrigo.silva.rio@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
  }

}

const TableHeader = () => {
    return (
        <thead>
            <tr> 
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Vaga</th>
                <th scope="col">Data de Nascimento</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
    )
  }

export default TabelaUsuario