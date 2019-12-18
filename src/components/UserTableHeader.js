//NPM modules
import React from 'react'
//components


function  UserTableHeader (props) {
    return (
        <thead>
            <tr> 
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Vaga</th>
                <th scope="col">Data de Nascimento</th>
                <th scope="col">Email</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
    )
  
}


export default UserTableHeader