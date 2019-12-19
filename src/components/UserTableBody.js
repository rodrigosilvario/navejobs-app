//NPM modules
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//components
//actions
import { removeUser } from "../redux/modules/user/actions/UserActions"


toast.configure({
    autoClose: 2000,
    draggable: false,
  })


function  UserTableBody (props) {

    function removeUser(user,index) {
        props.removeUser(user, index)
        toast.success("Usuário Removido com Sucesso!", {hideProgressBar: true, className: "nave-toast-success"})
    }
    
    const rows = props.users.map((user, index) => {
        return (
               
            <tr key={index}>
                <th scope="row"> <Link className="linkUserDetail" to={`/user/detail/${index}`}> {index} </Link> </th> 
                    <td><Link className="linkUserDetail" to={`/user/detail/${index}`}>{user.name} </Link> </td>
                    <td><Link className="linkUserDetail" to={`/user/detail/${index}`}>{user.job} </Link> </td>
                    <td><Link className="linkUserDetail" to={`/user/detail/${index}`}>{user.birthday} </Link> </td>
                    <td><Link className="linkUserDetail" to={`/user/detail/${index}`}>{user.email} </Link>  </td>
                    <td> 
                        <Link className="linkUserDetail" to={`/user/edit/${index}`}>
                            <img src="./img/edit-solid.svg" width="17px" className="img-fluid m-1" alt="Edit Icon"/>
                        </Link>
                        <img src="./img/trash-solid.svg" width="12px" onClick={() => removeUser(user, index)} className="img-fluid m-1" alt="Remove Icon"/> 
                    </td>
            </tr>
        )
    })
    
    return <tbody>{rows}</tbody>
}

export default connect(undefined, {removeUser}) (UserTableBody);
