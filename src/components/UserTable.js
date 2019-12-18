//NPM modules
import React from 'react'
// import { Link } from 'react-router-dom'
//components
import UserTableHeader from "./UserTableHeader"
import UserTableBody from "./UserTableBody"


function  UserTable (props) {
    return (
        <div className="table-responsive">
            <table className="table nave-tabela mt-4">
               <UserTableHeader/>
               <UserTableBody users={props.users}/>
            </table>
        </div>
    )
  
}

export default UserTable