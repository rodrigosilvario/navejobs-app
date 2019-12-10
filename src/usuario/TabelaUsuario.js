import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TabelaUsuario extends Component {
  render() {
    const { listaUsuarios } = this.props
    return (
        <div className="table-responsive">
            <table className="table nave-tabela mt-4">
               <TableHeader/>
               <TableBody listaUsuarios={listaUsuarios}/>
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

  const TableBody = (props) => {
    const rows = props.listaUsuarios.map((row, index) => {
        return (
                <tr key={index}>
                    <th scope="row"> <Link to={`/detalheUsuario/${index}`}>{index}</Link></th>
                    <td>{row.nome}</td>
                    <td>{row.vaga}</td>
                    <td>{row.dataNascimento}</td>
                    <td>{row.email}</td>
                </tr>
        )
    })
    return <tbody>{rows}</tbody>
  }

export default TabelaUsuario